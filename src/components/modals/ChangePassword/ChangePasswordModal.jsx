import clsx from "clsx";
import css from "../Modals.module.scss"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import PasswordInput from "../../PasswordInput/PasswordInput";
import {useTranslation} from "react-i18next";

const ChangeEmailModal = ({onClose}) => {
    const {t} = useTranslation();

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>{t("modal.changeTitle")} Email</h2>
                <Formik
                    initialValues={{oldPassword: '', newPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <PasswordInput name='oldPassword' classes={['mb-3']}/>
                        <PasswordInput name='newPassword' classes={['mt-1', 'mb-4']}/>
                        <Btn text={t("modal.successBtn")} styled='success' classes={['mb-1', 'mb-2']}/>
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