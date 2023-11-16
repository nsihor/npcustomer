import {ErrorMessage, Field} from "formik";
import React from "react";

const InputFloating = ({name, type = 'text', placeholder, value, handleOnChange}) => {
    return (
        <div className="form-floating mb-4">
            <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className="input form-control"
                id={`floating${name}`}
                value={value}
                onChange={handleOnChange}
            />
            <label className= "label" htmlFor={`floating${name}`}>{placeholder}</label>
            <div className="errorInput"><ErrorMessage name={name} /></div>
        </div>
    );
};

export default InputFloating;