import {ErrorMessage, Field} from "formik";
import clsx from "clsx";
import css from "./PasswordInput.module.scss"
import sprite from "../../images/sprite.svg"
import React, {useState} from "react";

const PasswordInput = ({handleSetPassword, password, inputClass = '', name='password', classes = [], validation}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const switchIsPasswordVisible = () => setIsPasswordVisible(prevState => !prevState);

    return (
            <div className={clsx("form-floating position-relative", ...classes)}>
                <Field
                    name={name}
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Пароль'
                    // value={password}
                    // onChange={handleSetPassword}
                    id={`floating${name}`}
                    className={clsx(css[inputClass], 'input form-control')}
                    // validation={validation}
                />
                <label className="label" htmlFor={`floating${name}`}>Пароль</label>
                <div className="errorInput"><ErrorMessage name={name} /></div>
                <svg onClick={switchIsPasswordVisible} className='svg'>
                    <use href={sprite + `${isPasswordVisible ? '#icon-openEye' : '#icon-closeEye'}`}></use>
                </svg>
            </div>

    )
}

export default PasswordInput;