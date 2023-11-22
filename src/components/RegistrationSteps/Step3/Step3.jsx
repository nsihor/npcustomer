import css from "./Step3.scss";
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import Btn from '../../../components/Btn/Btn';
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
import {PolandRegions} from "../../../const/Constants"
import {useTranslation} from "react-i18next";

const Step3 = ({submitFunc, userData, prevStep}) => {
    const {t} = useTranslation();

    return (
        <>
            <div className={clsx(css.formSmallText,"formSmallText")}>{t("RegistrationSteps.step").toUpperCase()} 03<span>/04</span></div>
            <h1 className="fw-600 mt-4">{t("RegistrationSteps.Step3.title")}</h1>
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

                    <SelectFloating name="region" options={PolandRegions} placeholder={t("RegistrationSteps.Step3.selectFloatingRegionPlaceholder")}/>

                    <InputFloating name="city" placeholder={t("RegistrationSteps.Step3.inputFloatingCityPlaceholder")}/>

                    <InputFloating name='street' placeholder={t("RegistrationSteps.Step3.inputFloatingStreetPlaceholder")}/>

                    <div className="input-group gap-3">
                        <InputFloating name='house' placeholder={t("RegistrationSteps.Step3.inputFloatingHousePlaceholder")}/>
                        <InputFloating name='office' placeholder={t("RegistrationSteps.Step3.inputFloatingOfficePlaceholder")}/>
                    </div>

                    <Btn text={t("RegistrationSteps.btnContinue")} styled='secondary' classes={["form-control"]}/>
                </Form>
            </Formik>

            <span onClick={prevStep} className='btn w-100 border-0 mt-3'>{t("RegistrationSteps.btnBack")}</span>
        </>
    )
}

export default Step3;