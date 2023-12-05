import css from './Profile.module.scss';
import clsx from 'clsx';
import sprite from '../../images/sprite.svg';
import 'bootstrap/dist/js/bootstrap';
import InputFloating from '../InputFloating/InputFloating';
import {Form, Formik} from 'formik';
import Btn from '../Btn/Btn';
import React, {useState} from 'react';
import toast from 'react-hot-toast';
import SelectFloating from '../SelectFloating/SelectFloating';
import {Countries, PolandRegions} from '../../const/Constants';
import ChangeEmailModal from '../modals/ChangeEmail/ChangeEmailModal';
import BasicModalWindow from '../modals/BasicModalWindow/BasicModalWindow';
import ChangePasswordModal from '../modals/ChangePassword/ChangePasswordModal';
import {update} from '../../services/api';
import ProfileNav from "./ProfileNav/ProfileNav";
import AccordionWrapper from "./AccordionWrapper/AccordionWrapper";


const Profile = ({userData}) => {
    const [isChangeEmailModal, setIsChangeEmailModal] = useState(false);
    const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);

    const switchEmailModal = () => {
        setIsChangeEmailModal(prevState => !prevState);
    }

    const switchPasswordModal = () => {
        setIsChangePasswordModal(prevState => !prevState);
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(userData.baselinkerToken);
        toast('Код скопійовано!');
    };

    return (
        <div className={clsx(css.content)}>
            <div className='container d-flex'>
                <ProfileNav/>
                <div className={clsx(css.burgerWrapper, 'col-12 col-md-9')}>
                    <div className={clsx(css.burger, 'accordion w-100 pb-5')} id='accorhdionProfile'>
                        <AccordionWrapper id='collapseOne' title={{id: 'headingOne', text: 'Налаштування способу оплати PayU'}}>
                            <Formik
                                initialValues={{
                                    nip: userData.nip ?? '',
                                    phone: userData.phone ?? '',
                                    email: userData.email ?? '',
                                    name: userData.name ?? '',
                                }}
                                onSubmit={value => {
                                    console.log(1);
                                }}>

                                <Form>
                                    <InputFloating value='' name='oauth_client_id'
                                                   placeholder='oauth_client_id'/>
                                    <InputFloating value='' name='oauth_client_secret'
                                                   placeholder='oauth_client_secret'/>
                                    <InputFloating value='' name='merchant_pos_id'
                                                   placeholder='merchant_pos_id'/>
                                    <InputFloating value='' name='second_key' placeholder='second_key'/>
                                    <Btn text='Зберегти зміни' styled='success' classes={['form-control']}/>
                                </Form>
                            </Formik>
                        </AccordionWrapper>
                        <AccordionWrapper id='collapseTwo' title={{id: 'headingTwo', text: 'Налаштування способу доставки Nova Post'}}>
                            <Formik initialValues={{
                                nip: userData.nip ?? '',
                                companyName: userData.companyName ?? '',
                                phone: userData.phone ?? '',
                                email: userData.email ?? '',
                                name: userData.name ?? '',
                                country_code: userData.country_code ?? '',
                                region: userData.region ?? '',
                                city: userData.city ?? '',
                                street: userData.street ?? '',
                                building: userData.building ?? '',
                                flat: userData.flat ?? '',
                            }}
                                    onSubmit={value => {
                                        console.log(1);
                                    }}>

                                <Form>
                                    <InputFloating name='nip' placeholder='NIP'/>
                                    <InputFloating name='companyName' placeholder='Назва компанії'/>
                                    <InputFloating name='phone' placeholder='Номер телефону контактної особи'/>
                                    <InputFloating name='email' type='email' placeholder='Email'/>
                                    <InputFloating name='name' placeholder='Контактна особа'/>
                                    <SelectFloating
                                        value='PL'
                                        name='countryCode'
                                        options={Countries}
                                        placeholder='Країна місцезнаходження компанії'
                                    />
                                    <SelectFloating name='region' options={PolandRegions}
                                                    placeholder='Воєводство'/>
                                    <InputFloating name='city' placeholder='Місто'/>
                                    <InputFloating name='street' placeholder='Вулиця'/>
                                    <div className='input-group gap-3'>
                                        <InputFloating name='house' placeholder='Будинок'/>
                                        <InputFloating name='office' placeholder='Офіс (опціонально)'/>
                                    </div>

                                    <Btn text='Зберегти зміни' styled='success' classes={['form-control']}/>
                                </Form>
                            </Formik>
                        </AccordionWrapper>
                        <AccordionWrapper id='collapseThree' title={{id: 'headingThree', text: 'Підключення BaseLinker'}}>
                            <div className={clsx('form-control px-3 py-3 d-flex justify-content-between')}>
                                <span>{userData.baselinkerToken}</span>
                                <svg width='24' height='24' onClick={handleCopyText} className='cursor-pointer'>
                                    <use href={`${sprite}#icon-copy`}></use>
                                </svg>
                            </div>
                            <div className={clsx(css.baselinkerTokenText, 'mt-1')}>
                                Скопіюй цей ключ та встав його в кабінеті BaseLinker.
                            </div>
                        </AccordionWrapper>
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
                        </AccordionWrapper>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Profile;
