import {useEffect, useState} from 'react';
import {profile, refreshUser} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    refreshUser().then();
    // profile().then(
    //   res => (
    //     setUserData(res.data.merchant)
    //   ),
    // );

  }, []);

  return (
    <>
      <Breadcrumbs currentPageName='Профіль компанії' />
      <Profile userData={userData} />
    </>
  );


};

export default ProfilePage;