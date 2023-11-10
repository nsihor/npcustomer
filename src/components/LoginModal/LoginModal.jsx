import clsx from "clsx";
import css from "./LoginModal.module.scss"
import img from "../../images/Modal/login.png"
import {Field, Form, Formik} from "formik";
import Btn from "../Btn/Btn";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const LoginModal = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        console.log(userData)
    }, [userData]);

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className='mb-4' src={img} alt='products'/>
                <h2 className={clsx(css.title, 'mb-4')}>Вхід</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, {resetForm}) => {
                        setUserData(values)
                        resetForm()
                }}>
                    <Form className='d-flex flex-column'>
                        <Field
                            name='email'
                            type='email'
                            placeholder='Email'
                            className={clsx(css.input, 'rounded border-0 mb-3 py-3 px-2')}
                        />
                        <Field
                            name='password'
                            type='password'
                            placeholder='Пароль'
                            className={clsx(css.input, 'rounded border-0 mb-3 py-3 px-2')}
                        />
                        <Btn text='Продовжити' styled='secondary'/>
                    </Form>
                </Formik>
                <Link to={'/registration'}  className='btn btn-light text-nowrap bg-transparent border-0 py-3 px-4'>
                    Зареєструватися
                </Link>
            </div>
        </div>
        // <div className=></div>

    )
}

export default LoginModal;