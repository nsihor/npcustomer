import css from "./Step3.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import {FormSelect} from "react-bootstrap";
import {Link} from "react-router-dom";
import InputFloating from "../../InputFloating/InputFloating";

const Step3 = ({submitFunc}) => {
    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>КРОК 03<span>/04</span></div>
            <h1 className="fw-600 mt-4">Адреса</h1>
            <Formik
                initialValues={{
                    region: '',
                    city: '',
                    street: '',
                    house: '',
                    office: '',
                }}
                validationSchema={Yup.object({
                    region: Yup.string(),
                    city: Yup.string(),
                    street: Yup.string().required("Поле обов'язкове для заповнення"),
                    house: Yup.string().required("Поле обов'язкове для заповнення"),
                    office: Yup.string(),
                })}
                onSubmit={ value => submitFunc(value) }
            >
                <Form className={clsx(css.formRegistration,"mt-4 formRegistration")}>

                    <FormSelect name="region" className={clsx(css.select,"select mt-4")}>
                        <option value="">Воєводство</option>
                        <option value="1">Варшава</option>
                        <option value="2">Вроцлав</option>
                    </FormSelect>

                    <FormSelect name="city" className={clsx(css.select,"select mt-4")}>
                        <option value="">Місто</option>
                        <option value="11">Варшава</option>
                        <option value="22">Вроцлав</option>
                    </FormSelect>

                    <InputFloating name='street' placeholder='Вулиця'/>

                    <div className="input-group gap-3">
                        <InputFloating name='house' placeholder='Будинок'/>
                        <InputFloating name='office' placeholder='Офіс (опціонально)'/>
                    </div>

                    <Btn text='Продовжити' styled='secondary' classes="form-control mt-5"/>
                </Form>
            </Formik>

            <Link to={'/registration'}  className='btn w-100 border-0 mt-3'>
                Назад
            </Link>
        </>
    )

}

export default Step3;