import { FormEvent, useState } from 'react';

import clsx from 'clsx';

import { DELAY_IN_MS } from '#shared/constants';
import { useFocus } from '#shared/hooks';
import { sleep } from '#shared/lib';
import { ElementState } from '#shared/types';

import { Button, Circle, Input, SolutionLayout } from '#shared/ui';

import { reversArrayGen } from './lib';

import s from './string-page.module.scss';

export const StringComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const [stringArr, setStringArr] = useState(['']);
  const [state, setState] = useState<ElementState[]>([]);

  const [showResult, setShowResult] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const char = e.currentTarget.value;

    setInputValue(char);
    setStringArr(char.split(''));
    setShowResult(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowResult(true);

    const reverseStateGenerator = reversArrayGen(stringArr);

    for (const reverseState of reverseStateGenerator) {
      setStringArr(reverseState.arr);
      setState(reverseState.state);
      await sleep(DELAY_IN_MS);
    }

    setIsProcessing(false);
    setInputFocus();
  };

  return (
    <SolutionLayout title='Строка'>
      <form className={s.form} onSubmit={(e) => void handleSubmit(e)}>
        <Input
          value={inputValue}
          maxLength={11}
          isLimitText
          onChange={handleChange}
          autoComplete='off'
          disabled={isProcessing}
          autoFocus
          ref={inputRef}
          data-test='input'
        />
        <Button
          text='Развернуть'
          type='submit'
          isLoader={isProcessing}
          disabled={isProcessing || !inputValue}
          data-test='button'
        />
      </form>
      {showResult && (
        <ul className={clsx(s['result-list'], 'mt-24')}>
          {stringArr.map((letter, i) => (
            <li key={i} role='presentation'>
              <Circle state={state[i]} letter={letter} data-test={`circle-${i}`} />
            </li>
          ))}
        </ul>
      )}
    </SolutionLayout>
  );
};
