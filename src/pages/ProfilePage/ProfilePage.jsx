import {useEffect, useRef, useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import {profile, refreshUser} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';
import {useTranslation} from "react-i18next";
import toast from "react-hot-toast";

const ProfilePage = ({addCompanyName}) => {
  const navigate = useNavigate ();

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
          try {
            const refreshData = await refreshUser();
            addCompanyName(refreshData.company_name)

            const data = await profile();
            setUserData(data);
          }
          catch (e) {
            console.log(e);
            navigate('/');
            addCompanyName('')
            toast.error('Помилка авторизації');
          }
        }
      };
      fetchProfile();

      isFirstRender.current = false;
    }
  }, [addCompanyName, navigate, userData]);

  return (
    <>
      <Breadcrumbs currentPageName={t('BreadcrumbsPages.profile')}/>
      <Profile userData={userData}/>
    </>
  );


};

export default ProfilePage;