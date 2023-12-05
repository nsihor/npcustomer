import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import {update} from "../../../services/api";
import InputFloating from "../../InputFloating/InputFloating";
import React, {useState} from "react";
import BasicModalWindow from "../../modals/BasicModalWindow/BasicModalWindow";
import ChangeEmailModal from "../../modals/ChangeEmail/ChangeEmailModal";
import ChangePasswordModal from "../../modals/ChangePassword/ChangePasswordModal";

const UserDataChanging = ({userData}) => {
    const [isChangeEmailModal, setIsChangeEmailModal] = useState(false);
    const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);

    const switchEmailModal = () => {
        setIsChangeEmailModal(prevState => !prevState);
    }

    const switchPasswordModal = () => {
        setIsChangePasswordModal(prevState => !prevState);
    }

    return(
        <AccordionWrapper id='collapseFour' title={{id: 'headingFour', text: 'Дані для входу в профіль компанії'}}>
            <Formik
                initialValues={{
                    email: userData.email ?? '',
                    password: '********',
                }}
                onSubmit={value => {
                    update(userData).then((data) => {
                        console.log(data);
                    }).catch(console.log)
                }}>
                <Form>
                    <InputFloating name='email' type='email' placeholder='Email'
                                   value={userData.email} readonly/>
                    <div onClick={switchEmailModal}
                         className='btn btn-link text-secondary'>Змінити
                    </div>
                    <InputFloating name='password' placeholder='Пароль' params='readonly'/>
                    <div onClick={switchPasswordModal}
                         className='btn btn-link text-secondary'>Змінити
                    </div>
                </Form>
            </Formik>
            {isChangeEmailModal &&
                <BasicModalWindow onClose={switchEmailModal}>
                    <ChangeEmailModal onClose={switchEmailModal}/>
                </BasicModalWindow>
            }
            {isChangePasswordModal &&
                <BasicModalWindow onClose={switchPasswordModal}>
                    <ChangePasswordModal onClose={switchPasswordModal}/>
                </BasicModalWindow>
            }
        </AccordionWrapper>
    )
}

export default UserDataChanging;