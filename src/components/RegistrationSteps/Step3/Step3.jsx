import css from "./Step3.scss";
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
import {PolandRegions} from "../../../const/Constants"

const Step3 = ({submitFunc, userData, prevStep}) => {
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
                    region: Yup.string().required(),
                    city: Yup.string().required(),
                    street: Yup.string().required("Поле обов'язкове для заповнення"),
                    house: Yup.string().required("Поле обов'язкове для заповнення"),
                    office: Yup.string(),
                })}
                onSubmit={ value => submitFunc(value) }
            >
                <Form className={clsx("mt-4 formRegistration")}>

                    <SelectFloating name="region" options={PolandRegions} placeholder="Воєводство"/>

                    <InputFloating name="city" placeholder="Місто"/>

                    <InputFloating name='street' placeholder='Вулиця'/>

                    <div className="input-group gap-3">
                        <InputFloating name='house' placeholder='Будинок'/>
                        <InputFloating name='office' placeholder='Офіс (опціонально)'/>
                    </div>

                    <Btn text='Продовжити' styled='secondary' classes={["form-control"]}/>
                </Form>
            </Formik>

            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>Назад</span>
        </>
    )
}

export default Step3;