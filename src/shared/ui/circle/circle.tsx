import { HTMLProps, ReactElement } from 'react';

import clsx from 'clsx';

import { ElementState } from '#shared/types';

import s from './circle.module.scss';

type CircleProps = HTMLProps<HTMLDivElement> & {
  state?: ElementState;
  letter?: string;
  head?: string | ReactElement | null | false;
  index?: number;
  tail?: string | ReactElement | null | false;
  tailType?: 'string' | 'element';
  extraClass?: string;
  isSmall?: boolean;
};

export const Circle = ({
  state = 'default',
  letter,
  head,
  index,
  tail,
  extraClass = '',
  isSmall,
  ...rest
}: CircleProps) => {
  return (
    <div className={clsx(s.circle, { [extraClass]: !!extraClass })} {...rest}>
      <div
        className={clsx(
          'text mb-4',
          {
            [s.circle__head_type_string]: typeof head === 'string',
          },
          {
            [s.circle__head_type_element]: typeof head !== 'string',
          },
        )}
        data-test='circleHead'>
        {head}
      </div>
      <div
        className={clsx(s[`circle__shape_state_${state}`], {
          [s.circle__shape_small]: isSmall,
        })}
        data-test='circleShape'>
        <p className={clsx('text', s.circle__text)} data-test='circleText'>
          {letter}
        </p>
      </div>
      <p className={clsx('text mt-4', s.circle__index)} data-test='circleIndex'>
        {index?.toString()}
      </p>
      <div
        className={clsx(
          'text mt-4',
          { [s.circle__tail_type_string]: typeof tail === 'string' },
          { [s.circle__tail_type_element]: typeof tail !== 'string' },
        )}
        data-test='circleTail'>
        {tail}
      </div>
    </div>
  );
};
