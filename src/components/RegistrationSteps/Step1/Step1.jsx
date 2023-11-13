import css from "./Step1.scss";
import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";

const Step1 = ({submitFunc}) => {
    return (
        <>
            <div className={clsx(css.formSmallText, "formSmallText")}>КРОК 01<span>/04</span></div>
            <h1 className="fw-600 mt-4">Авторизація</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Некоректний email').required("Поле обов'язкове для заповнення"),
                    password: Yup.string().min(6, "Мінімум 6 символів").required("Поле обов'язкове для заповнення"),
                    passwordConfirmation: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Паролі мають співпадати')
                })}
                onSubmit={value => submitFunc(value)}
            >
                <Form className={clsx(css.formRegistration, "formRegistration mt-4")}>

                    <InputFloating name="email" placeholder="Email" type="email"/>

                    <InputFloating name='password' placeholder='Пароль'/>

                    <InputFloating name='passwordConfirmation' placeholder='Повторити пароль'/>

                    <Btn text='Продовжити' styled='secondary' classes="w-100 mt-5"/>
                </Form>
            </Formik>
        </>
    )

}

export default Step1;