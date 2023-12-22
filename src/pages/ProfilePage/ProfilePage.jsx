import {useEffect, useState} from 'react';
import {profile, refreshUser} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';
import {useTranslation} from "react-i18next";

const ProfilePage = () => {
  const [userData, setUserData] = useState({});

  const {t} = useTranslation();

  const fetchProfile = async () => {
    try {
      const data = await profile()
      setUserData(data);
      console.log(userData);
    } catch (e) {
      console.log(e)
    }
  };
  
  useEffect(() => {
    // refreshUser().then();
    fetchProfile();
  }, []);

  return (
    <>
      <Breadcrumbs currentPageName={t('BreadcrumbsPages.profile')}/>
      <Profile userData={userData}/>
    </>
  );


};

export default ProfilePage;