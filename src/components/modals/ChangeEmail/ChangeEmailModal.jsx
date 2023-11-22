import clsx from "clsx";
import css from "../Modals.module.scss"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import {useState} from "react";
import InputFloating from "../../InputFloating/InputFloating";
import {useTranslation} from "react-i18next"

const ChangeEmailModal = ({onClose}) => {
    const [email, setEmail] = useState('');
    const changeValue = ({target: {value}}) => setEmail(value);

    const {t} = useTranslation();

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>{t("modal.changeTitle")} Email</h2>
                <Formik
                    initialValues={{email: email.email}}
                    onSubmit={(values) => {
                        setEmail(values)
                        console.log(email)
                        onClose()
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <InputFloating name='email' type='email' placeholder='Email' classes={['mb-4']}/>
                        {email ? (
                            <Btn text={t("modal.successBtn")} styled='success' classes={['mb-1', 'mt-2']}/>
                        ) : (
                            <Btn params={{disabled: true}} text={t("modal.successBtn")} styled='secondary' classes={['mb-1', 'mt-2']}/>
                        )}
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