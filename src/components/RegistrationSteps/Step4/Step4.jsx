import css from './Step4.scss';
import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from '../../InputFloating/InputFloating';
import FinishedRegistrationModal from '../../modals/FinishedRegistrationModal/FinishedRegistrationModal';
import BasicModalWindow from '../../modals/BasicModalWindow/BasicModalWindow';
import {useTranslation} from 'react-i18next';
import {register} from '../../../services/api';

const Step4 = ({submitFunc, userData, prevStep}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [baseLinkerToken, setBaseLinkerToken] = useState('');
    const {t} = useTranslation();

    return (
        <>
            <div className={clsx(css.formSmallText, 'formSmallText')}>
                {t('RegistrationSteps.step').toUpperCase()} 04<span>/04</span>
            </div>
            <h1 className='fw-600 mt-4'>{t('RegistrationSteps.Step4.title')}</h1>
            <Formik
                initialValues={{
                    name: userData.userName ?? '',
                    phone: userData.phone ?? '',
                    logo: userData.logo ?? '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required(t('Validation.required')).trim(),
                    phone: Yup.string().required(t('Validation.required')).trim(),
                })}
                onSubmit={value => {
                    submitFunc(value);
                    register(userData).then((data) => {
                        setBaseLinkerToken(data.data.baselinkerToken);
                    });
                    setIsModalOpen(true);
                }
                }
            >
                <Form className={clsx(css.formRegistration, 'formRegistration mt-4')}>

                    <label className={clsx(css.inputSmallText, 'inputSmallText')} htmlFor='userName'>
                        {t('RegistrationSteps.Step4.label')}
                    </label>
                    <InputFloating name='name'
                                   placeholder={t('RegistrationSteps.Step4.inputFloatingNamePlaceholder')} />

                    <InputFloating name='phone'
                                   placeholder={t('RegistrationSteps.Step4.inputFloatingPhonePlaceholder')} />

                    <InputFloating name='phone'
                                   placeholder={t('RegistrationSteps.Step4.inputFloatingPhonePlaceholder')} />

                    <InputFloating name='externalLogoUrl'
                                   placeholder={t('RegistrationSteps.Step4.inputFloatingLogoPlaceholder')} />

                    <Btn text={t('RegistrationSteps.Step4.btn')} styled='success' classes={['form-control']} />
                </Form>
            </Formik>
            {isModalOpen &&
                <BasicModalWindow onClose={() => setIsModalOpen(false)} navigateTo='/'>
                    <FinishedRegistrationModal code={baseLinkerToken} />
                </BasicModalWindow>}
            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>{t('RegistrationSteps.btnBack')}</span>
        </>
    );

};

export default Step4;