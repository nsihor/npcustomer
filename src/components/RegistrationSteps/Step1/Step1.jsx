import React, {useEffect, useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Btn from '../../../components/Btn/Btn';
import InputFloating from '../../InputFloating/InputFloating';
import PasswordInput from '../../PasswordInput/PasswordInput';
import {useTranslation} from "react-i18next";

const Step1 = ({submitFunc, userData}) => {
    const {t} = useTranslation();

  return (
    <>
      <div className='formSmallText'>{t("RegistrationSteps.step").toUpperCase()} 01<span>/04</span></div>
      <h1 className='fw-600 mt-4'>{t("RegistrationSteps.Step1").toUpperCase()}</h1>
      <Formik
        initialValues={{
          email: userData.email ?? '',
          password: userData.password ?? '',
          passwordConfirmation: userData.passwordConfirmation ?? '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Некоректний email')
            .required('Поле обов\'язкове для заповнення'),
          password: Yup.string()
            .min(8, 'Мінімум 8 символів')
            .trim()
            .required('Поле обов\'язкове для заповнення'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Паролі мають співпадати')
            .required('Поле обов\'язкове для заповнення'),
        })}
        onSubmit={value => submitFunc(value)}
      >
        <Form on className='formRegistration mt-4'>

          <InputFloating name='email' placeholder='Email' type='email' />

          <PasswordInput name='password' classes={['mt-3']} />

          <PasswordInput name='passwordConfirmation' classes={['mt-3']} />

          <Btn text={t("RegistrationSteps.btnContinue")} disabled={{/*hasError*/}} styled='secondary' classes={['w-100 mt-5']} />
        </Form>
      </Formik>
    </>
  );

};

export default Step1;