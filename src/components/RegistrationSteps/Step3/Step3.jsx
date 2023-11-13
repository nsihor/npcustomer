import css from "./Step3.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import {FormSelect} from "react-bootstrap";
import {Link} from "react-router-dom";
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";

const Step3 = ({submitFunc}) => {
    const optionsRegion = [
        { value: 1, label: "Варминьско-Мазурское" },
        { value: 2, label: " Западно-Поморское" },
        { value: 3, label: " Свентокшиское воеводство" },
    ]

    const optionsCity = [
        { value: 1, label: "Варшава" },
        { value: 2, label: "Лодзь" },
        { value: 3, label: "Гданськ" },
    ]

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

                    <SelectFloating name="region" options={optionsRegion} placeholder="Воєводство"/>

                    <SelectFloating name="city" options={optionsCity} placeholder="Місто"/>

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