import css from "./SelectFloating.module.scss";
import clsx from "clsx";
import {ErrorMessage, Field} from "formik";
import React from "react";

const SelectFloating = ({name, options, placeholder}) => {

    return (
        <div className="form-floating">
            <Field
                name={name}
                id={`floating${name}`}
                className={clsx(css.select,"select form-control")}
                as='select'
            >
                <option></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Field>
            <label className="label" htmlFor={`floating${name}`}>{placeholder}</label>
            <div className="errorInput"><ErrorMessage name={name} /></div>
        </div>
    );

};

export default SelectFloating;