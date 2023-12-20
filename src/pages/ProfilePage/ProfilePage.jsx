import {useEffect, useState} from 'react';
import {profile, refreshUser} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    // refreshUser().then();
    const fetchProfile = async () => {
      try {
        const data = await profile()
        setUserData(data);
        console.log(userData);
      } catch (e) {
        console.log(e)
      }
    };

    fetchProfile();
  }, [userData]);

  return (
    <>
      <Breadcrumbs currentPageName='Профіль компанії'/>
      <Profile userData={userData}/>
    </>
  );


};

export default ProfilePage;