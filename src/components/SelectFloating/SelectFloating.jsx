import css from "./SelectFloating.module.scss";
import clsx from "clsx";
import {ErrorMessage, Field} from "formik";
import React, {useState} from "react";
import {FormSelect} from "react-bootstrap";


const SelectFloating = ({name, options, placeholder}) => {
    return (
        <div className="form-floating mb-4">
            <Field
                name={name}
                id={`floating${name}`}
                className={clsx(css.select,"select mt-4 form-control")}
                as='select'
            >
                <option value="0"></option>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </Field>
            <label className="label" htmlFor={`floating${name}`}>{placeholder}</label>
            <div className="errorInput"><ErrorMessage name={name} /></div>
        </div>
    );

};

export default SelectFloating;