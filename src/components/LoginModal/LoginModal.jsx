import clsx from "clsx";
import css from "./LoginModal.module.scss"
import img from "../../images/Modal/login.png"
import {Field, Form, Formik} from "formik";
import Btn from "../Btn/Btn";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const LoginModal = () => {
    const [userData, setUserData] = useState({email: '', password: ''});

    useEffect(() => {
        console.log(userData)
    }, [userData]);

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className='mb-4' src={img} alt='products'/>
                <h2 className={clsx(css.title, 'mb-4')}>Вхід</h2>
                <Formik
                    initialValues={{email: userData.email, password: ''}}
                    onSubmit={(values) => {
                        setUserData(values)
                        console.log(userData)
                }}>
                    <Form className='d-flex flex-column'>
                        <Field
                            name='email'
                            type='email'
                            placeholder='Email'
                            className={clsx(css.input, 'rounded border-0 mb-3 py-3 px-2')}
                            value={userData.email}
                            onChange={(e) => setUserData(() => ({ ...userData, email: e.target.value }))}
                            autoFocus
                        />
                        <Field
                            name='password'
                            type='password'
                            placeholder='Пароль'
                            className={clsx(css.input, 'rounded border-0 mb-3 py-3 px-2')}
                            value={userData.password}

                            onChange={(e) => setUserData(() => ({ ...userData, password: e.target.value }))}

                        />
                        {userData.email && userData.password ? (
                            <Btn text='Продовжити' styled='success' />
                        ) : (
                            <Btn params={{ disabled: true }} text='Продовжити' styled='secondary' />
                        )}
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