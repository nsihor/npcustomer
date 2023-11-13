import css from "./InputFloating.module.scss";
import clsx from "clsx";
import {ErrorMessage, Field} from "formik";
import React from "react";

const InputFloating = ({name, type = 'text', placeholder}) => {
    return (
        <div className="form-floating mb-4">
            <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className={clsx(css.input,"form-control")}
                id={`floating${name}`}
            />
            <label className={clsx(css.label)} htmlFor={`floating${name}`}>{placeholder}</label>
            <div className={clsx(css.error)}><ErrorMessage name={name} /></div>
        </div>
    );
};

export default InputFloating;