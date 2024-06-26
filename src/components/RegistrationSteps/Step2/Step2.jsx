import css from './Step2.scss';
import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from '../../InputFloating/InputFloating';
import SelectFloating from '../../SelectFloating/SelectFloating';
import {useTranslation} from 'react-i18next';

const Step2 = ({submitFunc, userData, prevStep, isDesktop}) => {
  const {t} = useTranslation();

  const initialValues = {
    companyName: userData.companyName ?? '',
    countryCode: userData.countryCode ?? '',
    companyTIN: userData.companyTIN ?? '',
    externalLogoUrl: userData.externalLogoUrl ?? '',
  };

  const validationSchema = Yup.object({
    companyName: Yup.string()
      .required(t('Validation.required'))
      .trim(),
    countryCode: Yup.string().required(t('Validation.required')),
    companyTIN: Yup.string()
      .required(t('Validation.required'))
      .matches(
        /^(?=.*[0-9]{10})/,
        'NIP складається з 10 цифр',
      )
      .test('NIP', t('Validation.controlSumNIP'),
        function (value) {
          return (
            ((value[0] * 6 + value[1] * 5 + value[2] * 7 + value[3] * 2 + value[4] * 3 +
              value[5] * 4 + value[6] * 5 + value[7] * 6 + value[8] * 7
            ) % 11) % 10) === value[9] * 1;
        }),
    externalLogoUrl: Yup.string()
  });

  const onSubmit = value => submitFunc(value)

  return (
    <>
      <div
        className={clsx(css.formSmallText, 'formSmallText')}>{t('RegistrationSteps.step').toUpperCase()} 02<span>/04</span>
      </div>
      <h1 className='fw-600 mt-4'>{t('RegistrationSteps.Step2.title')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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

          <InputFloating
            name='externalLogoUrl'
            placeholder={isDesktop? t('RegistrationSteps.Step4.inputFloatingLogoPlaceholder') : t('RegistrationSteps.Step4.inputFloatingLogoPlaceholderShort')}
          />

          <Btn text={t('RegistrationSteps.btnContinue')} styled='secondary' classes={['form-control']}/>
        </Form>
      </Formik>

      <span onClick={prevStep} className='btn w-100 border-0 mt-3'>{t('RegistrationSteps.btnBack')}</span>
    </>
  );

};

export default Step2;