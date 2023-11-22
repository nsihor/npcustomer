import css from './Step2.scss';
import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from '../../InputFloating/InputFloating';
import SelectFloating from '../../SelectFloating/SelectFloating';
import {useTranslation} from 'react-i18next';

const Step2 = ({submitFunc, userData, prevStep}) => {
  const {t} = useTranslation();

  return (
    <>
      <div
        className={clsx(css.formSmallText, 'formSmallText')}>{t('RegistrationSteps.step').toUpperCase()} 02<span>/04</span>
      </div>
      <h1 className='fw-600 mt-4'>{t('RegistrationSteps.Step2.title')}</h1>
      <Formik
        initialValues={{
          companyName: userData.companyName ?? '',
          countryCode: userData.countryCode ?? '',
          companyTIN: userData.companyTIN ?? '',
        }}
        validationSchema={Yup.object({
          companyName: Yup.string()
            .required('Поле обов\'язкове для заповнення')
            .matches(
              /^(?! )/,
              'Перший символ не відступ',
            )
            .matches(
              /^(?!.* $)/,
              'Останній символ не відступ',
            )
            .matches(
              /^(?!(?:.* ){2})/,
              'Заборонена послідовність декількох символів відступів підряд',
            ),
          countryCode: Yup.string().required('Поле обов\'язкове для заповнення'),
          companyTIN: Yup.string()
            .required('Поле обов\'язкове для заповнення')
            .matches(
              /^(?=.*[0-9]{10})/,
              'NIP складається з 10 цифр',
            )
            .test('NIP', 'NIP має розрахунок контрольної суми',
              function(value) {
                const сhecksum = (
                  (value[0] * 6 + value[1] * 5 + value[2] * 7 + value[3] * 2 + value[4] * 3 + value[5] * 4
                    + value[6] * 5 + value[7] * 6 + value[8] * 7 + value[9] * value[0]) % 11) === 7;

                return сhecksum ;
              }),
        })}
        onSubmit={value => submitFunc(value)}
      >
        <Form className={clsx(css.formRegistration, 'mt-4 formRegistration')}>
          <InputFloating
            name='companyName'
            placeholder={t('RegistrationSteps.Step2.inputFloatingCompanyPlaceholder')}
          />

          <SelectFloating
            value='PL'
            name='countryCode'
            options={t('constants.Countries', {returnObjects: true})}
            placeholder={t('RegistrationSteps.Step2.selectFloatingPlaceholder')}
          />

          <InputFloating
            name='companyTIN'
            placeholder='NIP'
            smallText={t('RegistrationSteps.Step2.inputFloatingNIPPlaceholder')}
          />

          <Btn text={t('RegistrationSteps.btnContinue')} styled='secondary' classes={['form-control']} />
        </Form>
      </Formik>

      <span onClick={prevStep} className='btn w-100 border-0 mt-3'>{t('RegistrationSteps.btnBack')}</span>
    </>
  );

};

export default Step2;