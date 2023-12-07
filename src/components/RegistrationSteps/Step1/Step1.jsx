import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Btn from '../../../components/Btn/Btn';
import InputFloating from '../../InputFloating/InputFloating';
import PasswordInput from '../../PasswordInput/PasswordInput';
import {useTranslation} from 'react-i18next';

const Step1 = ({submitFunc, userData}) => {
  const {t} = useTranslation();

  const initialValues = {
    email: userData.email ?? '',
    password: userData.password ?? '',
    passwordConfirmation: userData.passwordConfirmation ?? '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('Validation.email'))
      .required(t('Validation.required')),
    password: Yup.string()
      .min(8, t('Validation.min8'))
      .max(128, t('Validation.max128'))
      .required(t('Validation.required'))
      .matches(
        /^(?! )(?!.* $)(?!(?:.* ){1})/,
        t('Validation.matchesWithoutSpace'),
      )
      .matches(
        /^(?=.*[a-z])/,
        t('Validation.matchesLowerCase'),
      )
      .matches(
        /^(?=.*[A-Z])/,
        t('Validation.matchesUpperCase'),
      )
      .matches(
        /^(?=.*[0-9])/,
        t('Validation.matchesNumber'),
      )
      .matches(
        /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
        t('Validation.matchesSpecSymbol') + ' ~ ! ? @ # $ % ^ & * _ - + ( ) [ ] { } > < / \\ | " \' . , : ;',
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], t('Validation.repeatPassword'))
      .required(t('Validation.required')),
  });

  const onSubmit = value => submitFunc(value);

  return (
    <>
      <div className='formSmallText'>{t('RegistrationSteps.step').toUpperCase()} 01<span>/04</span></div>
      <h1 className='fw-600 mt-4'>{t('RegistrationSteps.Step1')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='formRegistration mt-4'>

          <InputFloating name='email' placeholder='Email' type='email'/>

          <PasswordInput name='password' classes={['mt-3']}/>

          <PasswordInput name='passwordConfirmation' classes={['mt-3']}/>

          <Btn text={t('RegistrationSteps.btnContinue')} styled='secondary'
               classes={['w-100 mt-5']}/>
        </Form>
      </Formik>
    </>
  );

};

export default Step1;