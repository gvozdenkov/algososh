import { FormEvent, useRef, useState } from 'react';

import clsx from 'clsx';

import { SHORT_DELAY_IN_MS } from '#shared/constants';
import { useFocus } from '#shared/hooks';
import { sleep } from '#shared/lib';
import { ProcessingAction } from '#shared/types';

import { Button, Circle, Input, SolutionLayout } from '#shared/ui';

import { QueueClass, setHead, setState, setTail } from './lib';

import s from './queue-page.module.scss';

const maxQueueSize = 7;
const initialQueue: string[] = [...Array<string>(maxQueueSize)];

export type ProcessingQueueAction = Extract<
  ProcessingAction,
  'addToTail' | 'removeFromHead' | 'idle'
>;

export const QueuePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [queue, setQueue] = useState<(string | undefined)[]>(initialQueue);

  const [processingAction, setProcessingAction] = useState<ProcessingQueueAction>('idle');

  const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();

  const queueRef = useRef(new QueueClass<string>(maxQueueSize));
  const Queue = queueRef.current;

  const queueLength = Queue.getLength();

  const isProcessing = processingAction !== 'idle';
  const isButtonAddDisabled = isProcessing || queueLength >= maxQueueSize || !inputValue;
  const isButtonDeleteDisabled = isProcessing || !queueLength;

  const setQueueState = setState(Queue);
  const setQueueHead = setHead(Queue);
  const setQueueTail = setTail(Queue);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClear = () => {
    Queue.clearQueue();
    setQueue(initialQueue);
    setInputValue('');
    setInputFocus();
  };

  const handlePush = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setProcessingAction('addToTail');

    Queue.enqueue(inputValue);
    setQueue(Queue.getQueue());
    setInputValue('');

    await sleep(SHORT_DELAY_IN_MS);

    setProcessingAction('idle');
    setInputFocus();
  };

  const handlePop = async () => {
    setProcessingAction('removeFromHead');

    setQueue(Queue.getQueue());

    await sleep(SHORT_DELAY_IN_MS);

    Queue.dequeue();
    setQueue(Queue.getQueue());

    setProcessingAction('idle');
    setInputFocus();
  };

  return (
    <SolutionLayout title='Очередь'>
      <form className={s.form} onSubmit={(e) => void handlePush(e)}>
        <Input
          value={inputValue}
          maxLength={4}
          isLimitText
          onChange={handleChange}
          disabled={isProcessing}
          extraClass={s.form__input}
          autoComplete='off'
          ref={inputRef}
          autoFocus
          data-test='input'
        />
        <Button
          type='submit'
          text='Добавить'
          isLoader={processingAction === 'addToTail'}
          disabled={isButtonAddDisabled}
          extraClass={s['add-btn']}
          data-test='add-btn'
        />
        <Button
          text='Удалить'
          onClick={() => void handlePop()}
          isLoader={processingAction === 'removeFromHead'}
          disabled={isButtonDeleteDisabled}
          extraClass={s['delete-btn']}
          data-test='remove-btn'
        />
        <Button
          text='Очистить'
          onClick={handleClear}
          disabled={isButtonDeleteDisabled}
          extraClass={s['clear-btn']}
          data-test='clear-btn'
        />
      </form>
      {
        <ul className={clsx(s['result-list'])}>
          {queue.map((elem, i) => (
            <li key={i}>
              <Circle
                letter={elem}
                index={i}
                state={setQueueState(processingAction, i)}
                head={setQueueHead(i)}
                tail={setQueueTail(i)}
                data-test={`circle-${i}`}
              />
            </li>
          ))}
        </ul>
      }
    </SolutionLayout>
  );
};
