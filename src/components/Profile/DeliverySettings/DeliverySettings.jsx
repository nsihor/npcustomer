import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
import {Countries, CountriesPl, PolandRegions} from "../../../const/Constants";
import Btn from "../../Btn/Btn";
import React from "react";
import {useTranslation} from "react-i18next";

const DeliverySettings = ({userData}) => {
  const {t, i18n} = useTranslation();

  const initialValues = {
    nip: userData.nip ?? '',
    companyName: userData.companyName ?? '',
    phone: userData.phone ?? '',
    name: userData.name ?? '',
    country_code: userData.country_code ?? '',
    region: userData.region ?? '',
    city: userData.city ?? '',
    street: userData.street ?? '',
    house: userData.building ?? '',
    office: userData.flat ?? '',
    externalLogoUrl: userData.externalLogoUrl ?? ''
  };

  const validationSchema = Yup.object().shape({
    nip: Yup.string()
      .matches(
        /^(?=.*[0-9]{10})/,
        t("Validation.nipSymbolCount"),
      )
      .test('NIP', t('Validation.controlSumNIP'),
        function (value) {
          const сhecksum = (
            ((value[0] * 6 + value[1] * 5 + value[2] * 7 + value[3] * 2 + value[4] * 3 +
              value[5] * 4 + value[6] * 5 + value[7] * 6 + value[8] * 7
            ) % 11) % 10) === value[9] * 1;

          return сhecksum;
        }).required(t('Validation.required')),
    companyName: Yup.string().trim().required(t('Validation.required')),
    phone: Yup.string().trim().required(t('Validation.required')),
    name: Yup.string().trim().required(t('Validation.required')),
    country_code: Yup.string().required(t('Validation.required')),
    region: Yup.string().required(t('Validation.required')),
    city: Yup.string().trim().required(t('Validation.required')),
    street: Yup.string().trim().required(t('Validation.required')),
    house: Yup.string().trim().required(t('Validation.required')),
    office: Yup.string().trim(),
    externalLogoUrl: Yup.string()
  });

  const onSubmit = (value) => {
    const filteredValues = Object.entries(value)
      .filter(([_, val]) => val !== '')
      .reduce((acc, [key, val]) => ({...acc, [key]: val}), {});

    console.log(filteredValues);
  };


  return (
    <AccordionWrapper id='collapseTwo' title={{id: 'headingTwo', text: t('DeliverySettings.title')}}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <InputFloating name='nip' placeholder='NIP'/>
          <InputFloating name='companyName' placeholder={t('DeliverySettings.inputCompanyName')}/>
          <InputFloating name='phone' placeholder={t('DeliverySettings.inputPhone')}/>
          <InputFloating name='name' placeholder={t('DeliverySettings.inputName')}/>
          <SelectFloating
            value='PL'
            name='countryCode'
            options={i18n.language === 'uk' ? Countries : CountriesPl}
            placeholder={t('DeliverySettings.selectCountryCode')}
          />
          <SelectFloating
            name='region'
            options={PolandRegions}
            placeholder={t('DeliverySettings.selectRegion')}/>
          <InputFloating name='city' placeholder={t('DeliverySettings.inputCity')}/>
          <InputFloating name='street' placeholder={t('DeliverySettings.inputStreet')}/>
          <div className='input-group gap-3 mb-4'>
            <InputFloating name='house' placeholder={t('DeliverySettings.inputHouse')}/>
            <InputFloating name='office' placeholder={t('DeliverySettings.inputOffice')}/>
          </div>
          <InputFloating name='externalLogoUrl' placeholder={t('RegistrationSteps.Step4.inputFloatingLogoPlaceholder')}/>
          <Btn text={t('DeliverySettings.saveBtn')} styled='success' classes={['form-control']}/>
        </Form>
      </Formik>
    </AccordionWrapper>
  )
}

export default DeliverySettings;