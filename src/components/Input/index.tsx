import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: FieldError;
}

export const Input = forwardRef(
  ({ label, errors, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="input-container">
        <label htmlFor={props.id}>{label}</label>
        <input
          ref={ref}
          id={props.id}
          {...props}
        />
        {errors && (
          <span style={{color: 'red'}}>
            {errors?.message}
          </span>
        )}
      </div>
    );
  },
);
