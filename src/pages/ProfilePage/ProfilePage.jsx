import {useEffect, useState} from 'react';
import {profile} from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Profile from '../../components/Profile/Profile';
import {useTranslation} from "react-i18next";
import toast from "react-hot-toast";

const ProfilePage = ({updateCompany}) => {
  const [userData, setUserData] = useState({});
  const [firstRender, setFirstRender] = useState(true)

  const {t} = useTranslation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profile();
        setUserData(data);
      } catch (e) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          console.error(e);
        }
      }
    }

    firstRender && updateCompany(fetchProfile)
    setFirstRender(false)

  }, [firstRender, updateCompany]);

  return (
    <>
      <Breadcrumbs currentPageName={t('BreadcrumbsPages.profile')}/>
      <Profile userData={userData}/>
    </>
  );


};

export default ProfilePage;