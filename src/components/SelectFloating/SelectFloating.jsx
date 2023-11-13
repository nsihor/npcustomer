import css from "./SelectFloating.module.scss";
import clsx from "clsx";
import {ErrorMessage} from "formik";
import React, {useState} from "react";
import {FormSelect} from "react-bootstrap";


const SelectFloating = ({name, options, placeholder}) => {
    return (
        <div className="form-floating mb-4">
            <FormSelect
                name={name}
                id={`floating${name}`}
                className={clsx(css.select,"select mt-4")}
            >
                <option value="0"></option>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </FormSelect>
            <label className={clsx(css.label)} htmlFor={`floating${name}`}>{placeholder}</label>
            <div className={clsx(css.error)}><ErrorMessage name={name} /></div>
        </div>
    );

};

export default SelectFloating;