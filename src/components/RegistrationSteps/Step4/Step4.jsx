import css from "./Step4.scss";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import FinishedRegistrationModal from "../../modals/FinishedRegistrationModal/FinishedRegistrationModal";
import BasicModalWindow from "../../modals/BasicModalWindow/BasicModalWindow";

const Step4 = ({submitFunc, userData, prevStep}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>КРОК 04<span>/04</span></div>
            <h1 className="fw-600 mt-4">Дода ткова інформація</h1>
            <Formik
                initialValues={{
                    userName: userData.userName ?? '',
                    phone: userData.phone ?? '',
                    logo: userData.logo ?? '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string().required("Поле обов'язкове для заповнення"),
                    phone: Yup.string().required("Поле обов'язкове для заповнення"),
                    logo: Yup.string().required("Поле обов'язкове для заповнення"),
                })}
                onSubmit={ value => {
                    submitFunc(value);
                    setIsModalOpen(true);
                }
            }
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

                    <Btn text='Готово' styled='success' classes={["form-control"]}/>
                </Form>
            </Formik>
            {isModalOpen &&
                <BasicModalWindow onClose={()=>setIsModalOpen(false)}>
                    <FinishedRegistrationModal/>
                </BasicModalWindow>}
            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>Назад</span>
        </>
    )

}

export default Step4;