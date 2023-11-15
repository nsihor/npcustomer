import {Field} from "formik";
import clsx from "clsx";
import css from "./PasswordInput.module.scss"
import sprite from "../../images/sprite.svg"
import {useState} from "react";

const PasswordInput = ({handleSetPassword, password, inputClass, name='password'}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const switchIsPasswordVisible = () => setIsPasswordVisible(prevState => !prevState);

    return (
        <div className={css.wrapper}>
            <Field
                name={name}
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder='Пароль'
                className={clsx(css.input, css[inputClass], 'rounded border-0 mb-3 py-3 px-2 w-100')}
                value={password}
                onChange={handleSetPassword}
            />
            <svg onClick={switchIsPasswordVisible} className='svg'>
                <use href={sprite + `${isPasswordVisible ? '#icon-openEye' : '#icon-closeEye'}`}></use>
            </svg>
        </div>
    )
}

export default PasswordInput;