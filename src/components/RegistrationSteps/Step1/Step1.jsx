import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import PasswordInput from "../../PasswordInput/PasswordInput";

const Step1 = ({submitFunc, userData}) => {
    const [Passwords, setPasswords] = useState({password: '', passwordConfirmation: ''});

    const changeValue = ({target: {name, value}}) => setPasswords(() => ({...Passwords, [name]: value}));

    return (
        <>
            <div className="formSmallText">КРОК 01<span>/04</span></div>
            <h1 className="fw-600 mt-4">Авторизація</h1>
            <Formik
                initialValues={{
                    email: userData.email ?? '',
                    password: userData.password ?? '',
                    passwordConfirmation: userData.passwordConfirmation ?? ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Некоректний email').required("Поле обов'язкове для заповнення"),
                    // password: Yup.string().min(6, "Мінімум 6 символів").required("Поле обов'язкове для заповнення"),
                    // passwordConfirmation: Yup.string()
                    //     .oneOf([Yup.ref('password'), null], 'Паролі мають співпадати')
                    //     .required("Поле обов'язкове для заповнення")
                })}
                onSubmit={value => submitFunc(value)}
            >
                <Form className="formRegistration mt-4">

                    <InputFloating name="email" placeholder="Email" type="email"/>

                    <PasswordInput password={Passwords.password} handleSetPassword={changeValue} name="password"/>

                    <PasswordInput password={Passwords.passwordConfirmation} handleSetPassword={changeValue} name="passwordConfirmation"/>

                    <Btn text='Продовжити' styled='secondary' classes="w-100 mt-5"/>
                </Form>
            </Formik>
        </>
    )

}

export default Step1;