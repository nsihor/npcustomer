import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import InputFloating from "../../InputFloating/InputFloating";
import Btn from "../../Btn/Btn";
import React from "react";
import {useTranslation} from "react-i18next";

const PayUSettings = ({userData}) => {
    const {t} = useTranslation()

    return (
        <AccordionWrapper id='collapseOne' title={{id: 'headingOne', text: t("PayUSettings.title")}}>
            <Formik
                initialValues={{
                    nip: userData.nip ?? '',
                    phone: userData.phone ?? '',
                    email: userData.email ?? '',
                    name: userData.name ?? '',
                }}
                onSubmit={value => {
                    console.log(value);
                }}>

                <Form>
                    <InputFloating value='' name='oauth_client_id'
                                   placeholder='oauth_client_id'/>
                    <InputFloating value='' name='oauth_client_secret'
                                   placeholder='oauth_client_secret'/>
                    <InputFloating value='' name='merchant_pos_id'
                                   placeholder='merchant_pos_id'/>
                    <InputFloating value='' name='second_key' placeholder='second_key'/>
                    <Btn text={t('PayUSettings.saveBtn')} styled='success' classes={['form-control']}/>
                </Form>
            </Formik>
        </AccordionWrapper>
    )
}

export default PayUSettings;