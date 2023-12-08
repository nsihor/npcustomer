import css from './Profile.module.scss';
import clsx from 'clsx';
import 'bootstrap/dist/js/bootstrap';

import ProfileNav from "./ProfileNav/ProfileNav";
import PayUSettings from "./PayUSettings/PayUSettings";
import DeliverySettings from "./DeliverySettings/DeliverySettings";
import BaseLinker from "./BaseLinker/BaseLinker";
import UserDataChanging from "./UserDataChanging/UserDataChanging";

const Profile = ({userData}) => {

  return (
    <div className={clsx(css.content)}>
      <div className='container d-flex'>
        <ProfileNav/>
        <div className={clsx(css.burgerWrapper, 'col-12 col-md-9')}>
          <div className={clsx(css.burger, 'accordion w-100 pb-5')} id='accorhdionProfile'>
            <PayUSettings userData={userData}/>
            <DeliverySettings userData={userData}/>
            <BaseLinker baselinkerToken={userData.baselinkerToken}/>
            <UserDataChanging userData={userData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
