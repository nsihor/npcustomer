import {ErrorMessage, Field} from "formik";
import React from "react";
import clsx from "clsx";

const InputFloating = ({name, type = 'text', placeholder, value, handleOnChange, classes = [], validation}) => {
    return (
        <div className={clsx('form-floating', ...classes)} >
            <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className="input form-control"
                id={`floating${name}`}
                value={value}
                onChange={handleOnChange}
                validation={validation}
            />
            <label className= "label" htmlFor={`floating${name}`}>{placeholder}</label>
            <div className="errorInput"><ErrorMessage name={name} /></div>
        </div>
    );
};

export default InputFloating;