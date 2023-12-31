import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import InputFloating from "../../InputFloating/InputFloating";
import Btn from "../../Btn/Btn";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {update} from "../../../services/api";
import toast from "react-hot-toast";

const PayUSettings = ({userData}) => {
  const {t} = useTranslation()

  const [forceRerender, setForceRerender] = useState(false);

  useEffect(() => {
    setForceRerender(prevState => !prevState)
  }, [userData]);

  const initialValues = {
    oauthClientId: userData.oauthClientId ?? '',
    oauthClientSecret: userData.oauthClientSecret ?? '',
    merchantPosId: userData.merchantPosId ?? '',
    secondKey: userData.secondKey ?? '',
  };

  // const validationSchema = {
  //   // validationSchema
  // }

  const onSubmit = async (value) => {
    const filteredValues = Object.entries(value)
      .filter(([_, val]) => val !== '')
      .reduce((acc, [key, val]) => ({...acc, [key]: val}), {});

    try {
      await update(filteredValues)
      toast.success(t('toastUpdateSuccess'))
    }
    catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        console.error('Помилка:', e);
      }
    }
  };

  return (
    <AccordionWrapper id='collapseOne' title={{id: 'headingOne', text: t("PayUSettings.title")}}>
      {forceRerender && <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <InputFloating value='' name='oauthClientId'
                         placeholder='oauth_client_id'/>
          <InputFloating value='' name='oauthClientSecret'
                         placeholder='oauth_client_secret'/>
          <InputFloating value='' name='merchantPosId'
                         placeholder='merchant_pos_id'/>
          <InputFloating value='' name='secondKey' placeholder='second_key'/>
          <Btn text={t('PayUSettings.saveBtn')} styled='success' classes={['form-control']}/>
        </Form>
      </Formik>}
    </AccordionWrapper>
  )
}

export default PayUSettings;