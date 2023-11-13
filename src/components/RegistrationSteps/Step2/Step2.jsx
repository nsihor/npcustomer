import css from "./Step2.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import {Link} from "react-router-dom";
import {FormSelect} from "react-bootstrap";
import InputFloating from "../../InputFloating/InputFloating";

const Step2 = ({submitFunc, prevStep}) => {
    return (
        <>
            <div className={clsx(css.formSmallText, "formSmallText")}>КРОК 02<span>/04</span></div>
            <h1 className="fw-600 mt-4">Про компанію</h1>
            <Formik
                initialValues={{
                    companyName: '',
                    country: '',
                    nip: '',
                }}
                validationSchema={Yup.object({
                    companyName: Yup.string().required("Поле обов'язкове для заповнення"),
                    country: Yup.string(),
                    nip: Yup.string().required("Поле обов'язкове для заповнення"),
                })}
                onSubmit={ value => submitFunc(value) }
            >
                <Form className={clsx(css.formRegistration,"mt-4 formRegistration")}>
                    <InputFloating name='companyName' placeholder='Назва компанії'/>

                    <FormSelect name="country" className={clsx(css.select,"select mt-4")}>
                        <option value="">Країна місцезнаходження компанії</option>
                        <option value="">Польша</option>
                        <option value="">Україна</option>
                    </FormSelect>

                    <InputFloating name='nip' placeholder='NIP' />
                    <span className={clsx(css.inputSmallText,"inputSmallText")}>Вкажіть номер реєстрації бізнесу згідно законодавства країни</span>

                    <Btn text='Продовжити' styled='secondary' classes="form-control mt-5"/>
                </Form>
            </Formik>

            <Link to={'/registration'}  className='btn w-100 border-0 mt-3'>
                Назад
            </Link>
        </>
    )

}

export default Step2;