import css from "./Step2.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';

const Step2 = ({submitFunc}) => {
    return (
        <>
            <div className={clsx(css.formSmallText,"")}>КРОК 01<span>/04</span></div>
            <h1 className="fw-600 mt-4">Авторизація</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Email не коректний').required('Required'),
                    password: Yup.string().required('Required'),
                    password2: Yup.string().required('Required'),
                })}
                onSubmit={ value => submitFunc(value) }
            >
                <Form className={clsx(css.formRegistration,"mt-4")}>
                    <Field
                        name='name'
                        type='text'
                        placeholder='Name'
                        className="form-control"
                    />

                    <Btn text='Продовжити' styled='secondary' classes="form-control mt-5"/>
                </Form>
            </Formik>
        </>
    )

}

export default Step2;