import {ErrorMessage, Field} from 'formik';
import React from 'react';
import clsx from 'clsx';
import css from './InputFloating.module.scss';

const InputFloating = ({name, type = 'text', placeholder, classes = [], smallText, params = []}) => {
  return (
    <div className={clsx('form-floating inputContainer', css.inputContainer, ...classes)}>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className='input form-control'
        id={`floating${name}`}
        {...params}
      />
      <label className='label' htmlFor={`floating${name}`}>{placeholder}</label>
      {smallText && <div className={clsx(css.inputSmallText, 'inputSmallText')}>{smallText}</div>}
      <div className='errorInput'><ErrorMessage name={name} /></div>
    </div>
  );
};

export default InputFloating;