import css from "./Step4.scss";
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { FileUploader } from "react-drag-drop-files";

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import FinishedRegistrationModal from "../../modals/FinishedRegistrationModal/FinishedRegistrationModal";
import BasicModalWindow from "../../modals/BasicModalWindow/BasicModalWindow";
import {useTranslation} from "react-i18next";
const fileTypes = ["JPG", "PNG"];

const Step4 = ({submitFunc, userData, prevStep}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {t} = useTranslation();
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>{t("RegistrationSteps.step").toUpperCase()} 04<span>/04</span></div>
            <h1 className="fw-600 mt-4">{t("RegistrationSteps.Step4.title")}</h1>
            <Formik
                initialValues={{
                    userName: userData.userName ?? '',
                    phone: userData.phone ?? '',
                    logo: userData.logo ?? '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string().required("Поле обов'язкове для заповнення").trim(),
                    phone: Yup.string().required("Поле обов'язкове для заповнення").trim(),
                    logo: Yup.string().required("Поле обов'язкове для заповнення"),
                })}
                onSubmit={ value => {
                    submitFunc(value);
                    setIsModalOpen(true);
                }
            }
            >
                <Form className={clsx(css.formRegistration,"formRegistration mt-4")}>

                    <label className={clsx(css.inputSmallText,"inputSmallText")} htmlFor="userName">
                        {t("RegistrationSteps.Step4.label")}
                    </label>
                    <InputFloating name='userName' placeholder={t("RegistrationSteps.Step4.inputFloatingNamePlaceholder")}/>

                    <InputFloating name='phone' placeholder={t("RegistrationSteps.Step4.inputFloatingPhonePlaceholder")}/>

                    <div className="mt-4 mb-4">
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            label={t("RegistrationSteps.Step4.inputFileUploader")}
                        />
                    </div>

                    <Btn text={t("RegistrationSteps.Step4.btn")} styled='success' classes={["form-control"]}/>
                </Form>
            </Formik>
            {isModalOpen &&
                <BasicModalWindow onClose={()=> setIsModalOpen(false)} navigateTo='/'>
                    <FinishedRegistrationModal/>
                </BasicModalWindow>}
            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>{t("RegistrationSteps.btnBack")}</span>
        </>
    )

}

export default Step4;