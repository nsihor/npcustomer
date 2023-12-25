import {useEffect, useRef, useState} from 'react';
import {profile, refreshUser} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';
import {useTranslation} from "react-i18next";

const ProfilePage = () => {
  const [userData, setUserData] = useState({});

  const {t} = useTranslation();

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log(userData)
    if (isFirstRender.current) {
      const fetchProfile = async () => {
        try {
          const data = await profile();
          setUserData(data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchProfile();

      isFirstRender.current = false;
    }
  }, [userData]);

  return (
    <>
      <Breadcrumbs currentPageName={t('BreadcrumbsPages.profile')}/>
      {userData && <Profile userData={userData}/>}
    </>
  );


};

export default ProfilePage;