import css from "./Step4.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import {Link} from "react-router-dom";
import InputFloating from "../../InputFloating/InputFloating";

const Step4 = ({submitFunc}) => {
    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>КРОК 04<span>/04</span></div>
            <h1 className="fw-600 mt-4">Додаткова інформація</h1>
            <Formik
                initialValues={{
                    userName: '',
                    phone: '',
                    logo: '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string().required("Поле обов'язкове для заповнення"),
                    phone: Yup.string().required("Поле обов'язкове для заповнення"),
                    logo: Yup.string().required("Поле обов'язкове для заповнення"),
                })}
                onSubmit={ value => submitFunc(value) }
            >
                <Form className={clsx(css.formRegistration,"formRegistration mt-4")}>

                    <label className={clsx(css.inputSmallText,"inputSmallText")} htmlFor="userName">Контактна особа</label>
                    <InputFloating name='userName' placeholder="Ім'я та прізвище"/>

                    <InputFloating name='phone' placeholder='Номер телефону'/>

                    <Field
                        name='logo'
                        type='file'
                        placeholder='Номер телефону'
                        className="form-control mt-4"
                    />

                    <Btn text='Готово' styled='success' classes="form-control mt-5"/>
                </Form>
            </Formik>
            <Link to={'/registration'}  className='btn w-100 border-0 mt-3'>
                Назад
            </Link>
        </>
    )

}

export default Step4;