import clsx from "clsx";
import css from "../Modals.module.scss"
import {Field, Form, Formik} from "formik";
import Btn from "../../Btn/Btn";
import {useState} from "react";

const ChangeEmailModal = () => {
    const [email, setEmail] = useState('');

    const changeValue = ({ target: {value} }) => setEmail(value);

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <h2 className={clsx(css.title, 'mb-4')}>Змінити Email</h2>
                <Formik
                    initialValues={{email: email.email}}
                    onSubmit={(values) => {
                        setEmail(values)
                        console.log(email)
                    }}>
                    <Form className='d-flex flex-column w-100'>
                        <Field
                            name='email'
                            type='email'
                            placeholder='Email'
                            className={clsx(css.input, 'rounded border-0 mb-2 py-3 px-2 w-100')}
                            value={email.email}
                            onChange={changeValue}
                            autoFocus
                        />
                        {email ? (
                            <Btn text='Зберегти' styled='success'/>
                        ) : (
                            <Btn params={{disabled: true}} text='Зберегти' styled='secondary' classes='mb-1'/>
                        )}
                    </Form>
                </Formik>
                <button style={{color: '#475569', height: '45px'}} className='btn btn-light text-nowrap bg-transparent border-0 w-100'>Скасувати</button>
                {/*<Btn text='скасувати' />*/}
                {/*<Btn to={'/registration'} className='btn btn-light text-nowrap bg-transparent border-0 py-3 px-4 w-100'>*/}
                {/*    Скасувати*/}
                {/*</Btn>*/}
            </div>
        </div>
    )
}

export default ChangeEmailModal;