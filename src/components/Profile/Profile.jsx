import css from './Profile.module.scss';
import clsx from 'clsx';
import sprite from '../../images/sprite.svg';
import 'bootstrap/dist/js/bootstrap';
import InputFloating from '../InputFloating/InputFloating';
import {Form, Formik} from 'formik';
import Btn from '../Btn/Btn';
import React from 'react';
import toast from 'react-hot-toast';
import SelectFloating from '../SelectFloating/SelectFloating';
import {Countries, PolandRegions} from '../../const/Constants';


const Profile = ({userData}) => {
  const handleCopyText = () => {
    navigator.clipboard.writeText(userData.baselinkerToken);
    toast('Код скопійовано!');
  };

  return (
    <div className={clsx(css.content)}>
      <div className='container d-flex'>
        <div className={clsx(css.leftMenu, 'col-12 col-md-3')}>
          <nav>
            <a href='#'>
              <svg height='25' width='24'>
                <use href={sprite + '#icon-infoCompany'}></use>
              </svg>
              Інформація про компанію
            </a>
          </nav>
        </div>
        <div className={clsx(css.burgerWrapper, 'col-12 col-md-9')}>
          <div className={clsx(css.burger, 'accordion w-100')} id='accorhdionProfile'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingOne'>
                <button className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                >
                  Налаштування способу оплати PayU
                </button>
              </h2>
              <div id='collapseOne' className='accordion-collapse collapse'
                   aria-labelledby='headingOne' data-bs-parent='#accordionProfile'>
                <div className='accordion-body mb-3 pt-0'>
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
                      <InputFloating value='' name='oauth_client_id' placeholder='oauth_client_id' />
                      <InputFloating value='' name='oauth_client_secret' placeholder='oauth_client_secret' />
                      <InputFloating value='' name='merchant_pos_id' placeholder='merchant_pos_id' />
                      <InputFloating value='' name='second_key' placeholder='second_key' />
                      <Btn text='Зберегти зміни' styled='success' classes={['form-control']} />
                    </Form>
                  </Formik>
                </div>
              </div>
              <hr />
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                  Налаштування способу доставки Nova Post
                </button>
              </h2>
              <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo'
                   data-bs-parent='#accordionProfile'>
                <div className='accordion-body mb-3 pt-0'>
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
                      <InputFloating name='nip' placeholder='NIP' />
                      <InputFloating name='companyName' placeholder='Назва компанії' />
                      <InputFloating name='phone' placeholder='Номер телефону контактної особи' />
                      <InputFloating name='email' type='email' placeholder='Email' />
                      <InputFloating name='name' placeholder='Контактна особа' />
                      <SelectFloating
                        value='PL'
                        name='countryCode'
                        options={Countries}
                        placeholder='Країна місцезнаходження компанії'
                      />
                      <SelectFloating name='region' options={PolandRegions} placeholder='Воєводство' />
                      <InputFloating name='city' placeholder='Місто' />
                      <InputFloating name='street' placeholder='Вулиця' />
                      <div className='input-group gap-3'>
                        <InputFloating name='house' placeholder='Будинок' />
                        <InputFloating name='office' placeholder='Офіс (опціонально)' />
                      </div>

                      <Btn text='Зберегти зміни' styled='success' classes={['form-control']} />
                    </Form>
                  </Formik>
                </div>
              </div>
              <hr />
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThree'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                        data-bs-target='#collapseThree' aria-expanded='false'
                        aria-controls='collapseThree'>
                  Підключення BaseLinker
                </button>
              </h2>
              <div id='collapseThree' className='accordion-collapse collapse'
                   aria-labelledby='headingThree' data-bs-parent='#accordionProfile'>
                <div className='accordion-body mb-3 pt-0'>
                  <div className={clsx('form-control px-3 py-3 d-flex justify-content-between')}>
                    <span>{userData.baselinkerToken}</span>
                    <svg width='24' height='24' onClick={handleCopyText} className='cursor-pointer'>
                      <use href={`${sprite}#icon-copy`}></use>
                    </svg>
                  </div>
                  <div className={clsx(css.baselinkerTokenText, 'mt-1')}>
                    Скопіюй цей ключ та встав його в кабінеті BaseLinker.
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingFour'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                        data-bs-target='#collapseFour' aria-expanded='false'
                        aria-controls='collapseFour'>
                  Дані для входу в профіль компанії
                </button>
              </h2>
              <div id='collapseFour' className='accordion-collapse collapse'
                   aria-labelledby='headingFour' data-bs-parent='#accordionProfile'>
                <div className='accordion-body mb-3 pt-0'>
                  <Formik initialValues={{
                    email: '',
                    password: '********',
                  }}
                          onSubmit={value => {
                            console.log(1);
                          }}>

                    <Form>
                      <InputFloating name='email' type='email' placeholder='Email' value={userData.email} />
                      <div className='btn btn-link text-secondary'>Змінити</div>
                      <InputFloating name='password' placeholder='Пароль' />
                      <div className='btn btn-link text-secondary'>Змінити</div>
                    </Form>
                  </Formik>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
