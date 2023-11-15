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

const Step3 = ({submitFunc, userData, prevStep}) => {
    const optionsRegion = [
        { value: "PL-MZ", label: "Mazowieckie" },
        { value: "PL-DS", label: "Dolnośląskie" },
        { value: "PL-KP", label: "Kujawsko-Pomorskie" },
        { value: "PL-LU", label: "Lubelskie" },
        { value: "PL-LB", label: "Lubuskie" },
        { value: "PL-LD", label: "Łódzkie" },
        { value: "PL-MA", label: "Małopolskie" },
        { value: "PL-OP", label: "Opolskie" },
        { value: "PL-PK", label: "Podkarpackie" },
        { value: "PL-PD", label: "Podlaskie" },
        { value: "PL-PM", label: "Pomorskie" },
        { value: "PL-SK", label: "Świętokrzyskie" },
        { value: "PL-SL", label: "Śląskie" },
        { value: "PL-WP", label: "Wielkopolskie" },
        { value: "PL-WN", label: "Warmińsko-Mazurskie" },
        { value: "PL-ZP", label: "Zachodniopomorskie" },
    ]

    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>КРОК 03<span>/04</span></div>
            <h1 className="fw-600 mt-4">Адреса</h1>
            <Formik
                initialValues={{
                    region: userData.region ?? '',
                    city: userData.city ?? '',
                    street: userData.street ?? '',
                    house: userData.house ?? '',
                    office: userData.office ?? '',
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
                <Form className={clsx("mt-4 formRegistration")}>

                    <SelectFloating name="region" options={optionsRegion} placeholder="Воєводство"/>

                    <InputFloating name="city" placeholder="Місто"/>

                    <InputFloating name='street' placeholder='Вулиця'/>

                    <div className="input-group gap-3">
                        <InputFloating name='house' placeholder='Будинок'/>
                        <InputFloating name='office' placeholder='Офіс (опціонально)'/>
                    </div>

                    <Btn text='Продовжити' styled='secondary' classes="form-control mt-5"/>
                </Form>
            </Formik>

            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>Назад</span>
        </>
    )
}

export default Step3;