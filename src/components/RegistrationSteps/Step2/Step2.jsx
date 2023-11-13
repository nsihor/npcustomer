import css from "./Step2.scss";
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
const Step2 = ({submitFunc, prevStep}) => {
    const optionsCountry = [
        { value: 1, label: "Польща" },
        { value: 2, label: "Україна" },
    ]

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

                    <SelectFloating
                        name="country"
                        options={optionsCountry}
                        placeholder="Країна місцезнаходження компанії"
                    />

                    <span className={clsx(css.inputSmallText,"inputSmallText")}>Вкажіть номер реєстрації бізнесу згідно законодавства країни</span>
                    <InputFloating name='nip' placeholder='NIP'/>

                    <Btn text='Продовжити' styled='secondary' classes="form-control mt-5"/>
                </Form>
            </Formik>

            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>
                Назад
            </span>
        </>
    )

}

export default Step2;