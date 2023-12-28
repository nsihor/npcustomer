import clsx from "clsx";
import css from "../Modals.module.scss"
import img from "../../../images/Modal/login.png"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import {Link} from "react-router-dom";
import PasswordInput from "../../PasswordInput/PasswordInput";
import InputFloating from "../../InputFloating/InputFloating";
import {login} from "../../../services/api";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import {t} from "i18next";

const LoginModal = ({onClose, addCompanyName}) => {
  const handleLogin = async (values) => {
    try {
      const company = await login(values)
      addCompanyName(company)
      onClose()
      toast.success(t('LoginModal.successToast'))
    } catch (e) {
      toast.error(t('LoginModal.errorToast'))
    }
  }

  return (
    <div className={css.main}>
      <div className={css.wrap}>
        <img className={clsx(css.img_warehouse, 'mb-sm-4 mb-3')} src={img} alt='products'/>
        <h2 className={clsx(css.title, 'mb-4')}>{t("LoginModal.title")}</h2>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(t('Validation.email'))
              .required(t('Validation.required')),
            password: Yup.string()
              .min(8, t('Validation.min8'))
              .required(t('Validation.required'))
          })}
          onSubmit={handleLogin}
        >
          <Form className='d-flex flex-column w-100'>
            <InputFloating
              name='email'
              type='email'
              placeholder='Email' classes={["mb-3"]}
            />
            <PasswordInput
              classes={["mb-4", "mt-sm-1"]}
            />
            <Btn text={t("LoginModal.btn")} styled='success' classes={["my-1"]}/>
            {/* Example disabled <Btn params={{disabled: true}} text='Продовжити' styled='secondary' classes={["my-1"]}/>*/}
          </Form>
        </Formik>
        <Link
          style={{height: '45px', color: '#475569'}}
          to={'/registration'}
          onClick={onClose}
          className='btn btn-light text-nowrap bg-transparent border-0 py-2 w-100'>
          {t("LoginModal.link")}
        </Link>
      </div>
    </div>
  )
}

export default LoginModal;