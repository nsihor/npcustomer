import clsx from "clsx";
import css from "../Modals.module.scss"
import {Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import {useState} from "react";
import InputFloating from "../../InputFloating/InputFloating";

const ChangeEmailModal = ({onClose}) => {
    const [email, setEmail] = useState('');

    const changeValue = ({target: {value}}) => setEmail(value);

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>Змінити Email</h2>
                <Formik
                    initialValues={{email: email.email}}
                    onSubmit={(values) => {
                        setEmail(values)
                        console.log(email)
                        onClose()
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <InputFloating name='email' type='email' placeholder='Email' value={email} handleOnChange={changeValue} classes={['mb-4']}/>
                        {email ? (
                            <Btn text='Зберегти' styled='success' classes={['mb-1', 'mt-2']}/>
                        ) : (
                            <Btn params={{disabled: true}} text='Зберегти' styled='secondary' classes={['mb-1', 'mt-2']}/>
                        )}
                    </Form>
                </Formik>
                <button onClick={onClose} style={{color: '#475569', height: '45px'}}
                        className='btn btn-light text-nowrap bg-transparent border-0 w-100'>Скасувати
                </button>
            </div>
        </div>
    )
}

export default ChangeEmailModal;