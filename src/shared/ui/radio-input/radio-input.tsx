import { ComponentProps, useId } from 'react';

import styles from './radio-input.module.scss';

type RadioProps = ComponentProps<'input'> & {
  label: string;
  extraClass?: string;
};

export const RadioInput = ({
  label = 'Введите текст',
  extraClass = '',
  disabled = false,
  ...rest
}: RadioProps) => {
  const id = useId();

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <input className={styles.input} type='radio' id={id} {...rest} disabled={disabled} />
      <label className={`text text_type_button ${styles.label}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
