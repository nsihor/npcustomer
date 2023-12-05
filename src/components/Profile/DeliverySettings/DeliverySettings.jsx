import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import {Form, Formik} from "formik";
import InputFloating from "../../InputFloating/InputFloating";
import SelectFloating from "../../SelectFloating/SelectFloating";
import {Countries, PolandRegions} from "../../../const/Constants";
import Btn from "../../Btn/Btn";
import React from "react";

const DeliverySettings = ({userData}) => {

    return (
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
                        console.log(value);
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
    )
}

export default DeliverySettings;