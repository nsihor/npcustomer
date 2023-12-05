import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
import {Countries, CountriesPl, PolandRegions} from "../../../const/Constants";
import Btn from "../../Btn/Btn";
import React from "react";
import {useTranslation} from "react-i18next";

const DeliverySettings = ({userData}) => {
    const {t, i18n} = useTranslation()

    return (
        <AccordionWrapper id='collapseTwo' title={{id: 'headingTwo', text: t('DeliverySettings.title')}}>
            <Formik initialValues={{
                nip: userData.nip ?? '',
                companyName: userData.companyName ?? '',
                phone: userData.phone ?? '',
                email: userData.email ?? '',
                name: userData.name ?? '',
                country_code: userData.country_code ?? '',
                region: userData.region ?? '',
                city: userData.city ?? '',
                street: userData.street ?? '',
                building: userData.building ?? '',
                flat: userData.flat ?? '',
            }}
                    onSubmit={value => {
                        console.log(value);
                    }}>

                <Form>
                    <InputFloating name='nip' placeholder='NIP'/>
                    <InputFloating name='companyName' placeholder={t('DeliverySettings.inputCompanyName')}/>
                    <InputFloating name='phone' placeholder={t('DeliverySettings.inputPhone')}/>
                    <InputFloating name='email' type='email' placeholder='Email'/>
                    <InputFloating name='name' placeholder={t('DeliverySettings.inputName')}/>
                    <SelectFloating
                        value='PL'
                        name='countryCode'
                        options={i18n === 'uk' ? Countries : CountriesPl}
                        placeholder={t('DeliverySettings.selectCountryCode')}
                    />
                    <SelectFloating name='region' options={PolandRegions}
                                    placeholder={t('DeliverySettings.selectRegion')}/>
                    <InputFloating name='city' placeholder={t('DeliverySettings.inputCity')}/>
                    <InputFloating name='street' placeholder={t('DeliverySettings.inputStreet')}/>
                    <div className='input-group gap-3'>
                        <InputFloating name='house' placeholder={t('DeliverySettings.inputHouse')}/>
                        <InputFloating name='office' placeholder={t('DeliverySettings.inputOffice')}/>
                    </div>

                    <Btn text={t('DeliverySettings.saveBtn')} styled='success' classes={['form-control']}/>
                </Form>
            </Formik>
        </AccordionWrapper>
    )
}

export default DeliverySettings;