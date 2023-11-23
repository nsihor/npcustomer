import {ErrorMessage, Field} from "formik";
import clsx from "clsx";
import css from "./PasswordInput.module.scss"
import sprite from "../../images/sprite.svg"
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const PasswordInput = ({inputClass = '', name='password', classes = [], placeholder}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {t} = useTranslation();

    let chosenPlaceholder;

    switch (placeholder) {
        case 'new':
            chosenPlaceholder = t("PasswordInputPlaceholder.new")
            break;
        case 'old':
            chosenPlaceholder = t("PasswordInputPlaceholder.old")
            break;
        default:
            chosenPlaceholder = t("PasswordInputPlaceholder.default")
            break;
    }

    const switchIsPasswordVisible = () => setIsPasswordVisible(prevState => !prevState);

    return (
            <div className={clsx("form-floating position-relative", ...classes)}>
                <Field
                    name={name}
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder={chosenPlaceholder}
                    id={`floating${name}`}
                    className={clsx(css[inputClass], 'input form-control')}
                />
                <label className="label" htmlFor={`floating${name}`}>{chosenPlaceholder}</label>
                <div className="errorInput"><ErrorMessage name={name} /></div>
                <svg onClick={switchIsPasswordVisible} className='svg'>
                    <use href={sprite + `${isPasswordVisible ? '#icon-openEye' : '#icon-closeEye'}`}></use>
                </svg>
            </div>

    )
}

export default PasswordInput;