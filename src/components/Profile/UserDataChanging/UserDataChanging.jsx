import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import {update} from "../../../services/api";
import InputFloating from "../../InputFloating/InputFloating";
import React, {useState} from "react";
import BasicModalWindow from "../../modals/BasicModalWindow/BasicModalWindow";
import ChangeEmailModal from "../../modals/ChangeEmail/ChangeEmailModal";
import ChangePasswordModal from "../../modals/ChangePassword/ChangePasswordModal";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";

const UserDataChanging = ({userData}) => {
  const [isChangeEmailModal, setIsChangeEmailModal] = useState(false);
  const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);

  const {t} = useTranslation();

  const initialValues = {
    email: userData.email ?? '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('Validation.email'))
  })

  const onSubmit = () => {
    update(userData).then((data) => {
      console.log(data);
    }).catch(console.log)
  }

  const switchEmailModal = () => {
    setIsChangeEmailModal(prevState => !prevState);
  }

  const switchPasswordModal = () => {
    setIsChangePasswordModal(prevState => !prevState);
  }

  return (
    <AccordionWrapper id='collapseFour' title={{id: 'headingFour', text: t('UserDataChanging.title')}}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <InputFloating
            name='email'
            type='email'
            placeholder='Email'
            value={userData.email}
          />
          <div onClick={switchEmailModal}
               className='btn btn-link text-secondary'>{t('UserDataChanging.changeText')}
          </div>
          <InputFloating
            name='password'
            placeholder={t('UserDataChanging.inputPassword')}
            params={{disabled: true}}/>
          <div onClick={switchPasswordModal}
               className='btn btn-link text-secondary'>{t('UserDataChanging.changeText')}
          </div>
        </Form>
      </Formik>
      {isChangeEmailModal &&
        <BasicModalWindow onClose={switchEmailModal}>
          <ChangeEmailModal onClose={switchEmailModal}/>
        </BasicModalWindow>
      }
      {isChangePasswordModal &&
        <BasicModalWindow onClose={switchPasswordModal}>
          <ChangePasswordModal onClose={switchPasswordModal}/>
        </BasicModalWindow>
      }
    </AccordionWrapper>
  )
}

export default UserDataChanging;