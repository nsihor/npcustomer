import clsx from "clsx";
import css from "../Modals.module.scss"
import img from "../../../images/Modal/login.png"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import {useState} from "react";
import {Link} from "react-router-dom";
import PasswordInput from "../../PasswordInput/PasswordInput";
import InputFloating from "../../InputFloating/InputFloating";

const LoginModal = () => {
    const [userData, setUserData] = useState({email: '', password: ''});

    const changeValue = ({ target: { name, value } }) => setUserData(() => ({...userData, [name]: value}));

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className='mb-4' src={img} alt='products'/>
                <h2 className={clsx(css.title, 'mb-4')}>Вхід</h2>
                <Formik
                    initialValues={{email: userData.email, password: userData.password}}
                    onSubmit={(values) => {
                        setUserData(values)
                        console.log(userData)
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <InputFloating name='email' type='email' value={userData.email} handleOnChange={changeValue} placeholder='Email' classes={["mb-3"]}/>
                        <PasswordInput password={userData.password} handleSetPassword={changeValue} classes={["mb-4", "mt-1"]}/>
                        {userData.email && userData.password ? (
                            <Btn text='Продовжити' styled='success' classes={["my-1"]}/>
                        ) : (
                            <Btn params={{disabled: true}} text='Продовжити' styled='secondary' classes={["my-1"]}/>
                        )}
                    </Form>
                </Formik>
                <Link to={'/registration'} className='btn btn-light text-nowrap bg-transparent border-0 py-3 px-4 w-100'>
                    Зареєструватися
                </Link>
            </div>
        </div>
    )
}

export default LoginModal;