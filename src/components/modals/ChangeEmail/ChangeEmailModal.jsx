import clsx from "clsx";
import css from "../Modals.module.scss"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import InputFloating from "../../InputFloating/InputFloating";
import {useTranslation} from "react-i18next"
import * as Yup from "yup";

const ChangeEmailModal = ({onClose}) => {
    const {t} = useTranslation();

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>{t("modal.changeTitle")} Email</h2>
                <Formik
                    initialValues={{email: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                                .email(t('Validation.email'))
                                .required(t('Validation.required'))
                    })}
                    onSubmit={(values) => {
                      console.log(values)
                      onClose()
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <InputFloating name='email' type='email' placeholder='Email' classes={['mb-4']}/>
                        <Btn text={t("modal.successBtn")} styled='success' classes={['mb-1', 'mt-2']}/>
                        {/*Example disabled <Btn params={{disabled: true}} text={t("modal.successBtn")} styled='secondary' classes={['mb-1', 'mt-2']}/>*/}
                    </Form>
                </Formik>
                <button onClick={onClose} style={{color: '#475569', height: '45px'}}
                        className='btn btn-light text-nowrap bg-transparent border-0 w-100'>{t("modal.closeBtn")}
                </button>
            </div>
        </div>
    )
}

export default ChangeEmailModal;