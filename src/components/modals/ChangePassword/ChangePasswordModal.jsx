import clsx from "clsx";
import css from "../Modals.module.scss"
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Btn from "../../Btn/Btn";
import PasswordInput from "../../PasswordInput/PasswordInput";
import {useTranslation} from "react-i18next";
import {changePassword} from '../../../services/api';

const ChangeEmailModal = ({onClose}) => {
    const {t} = useTranslation();

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>{t("modal.changeTitle")} Email</h2>
                <Formik
                    initialValues={{oldPassword: '', newPassword: ''}}
                    onSubmit={(values) => {
                        changePassword(values).then().catch(console.log)
                    }}
                    validationSchema={Yup.object( {
                        newPassword: Yup.string()
                            .min(8, t('Validation.min8'))
                            .max(128, t('Validation.max128'))
                            .required(t('Validation.required'))
                            .matches(
                                /^(?! )(?!.* $)(?!(?:.* ){1})/,
                                t('Validation.matchesWithoutSpace'),
                            )
                            .matches(
                                /^(?=.*[a-z])/,
                                t('Validation.matchesLowerCase'),
                            )
                            .matches(
                                /^(?=.*[A-Z])/,
                                t('Validation.matchesUpperCase'),
                            )
                            .matches(
                                /^(?=.*[0-9])/,
                                t('Validation.matchesNumber'),
                            )
                            .matches(
                                /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
                                t('Validation.matchesSpecSymbol') + ' ~ ! ? @ # $ % ^ & * _ - + ( ) [ ] { } > < / \\ | " \' . , : ;',
                            )
                    })}>
                    <Form className='d-flex flex-column w-100'>
                        <PasswordInput name='oldPassword' placeholder='old' classes={['mb-3']}/>
                        <PasswordInput name='newPassword' placeholder='new' classes={['mt-1', 'mb-4']}/>
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