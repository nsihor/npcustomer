import {ErrorMessage, Field} from 'formik';
import React from 'react';
import clsx from 'clsx';
import css from '../RegistrationSteps/Step2/Step2.scss';

const InputFloating = ({name, type = 'text', placeholder, value, classes = [], validation, smallText}) => {
  return (
    <div className={clsx('form-floating', ...classes)}>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className='input form-control'
        id={`floating${name}`}
        value={value}
      />
      <label className='label' htmlFor={`floating${name}`}>{placeholder}</label>
      {smallText && <div className={clsx(css.inputSmallText, 'inputSmallText')}>{smallText}</div>}
      <div className='errorInput'><ErrorMessage name={name} /></div>
    </div>
  );
};

export default InputFloating;