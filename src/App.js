import React, {lazy, Suspense, useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, {Toaster} from 'react-hot-toast';
import BasicModalWindow from './components/modals/BasicModalWindow/BasicModalWindow';
import Layout from "./components/Layout/Layout";
import LoginModal from "./components/modals/LoginModal/LoginModal";
import Loader from "./components/Loader/Loader";
import useLocalStorage from "./hooks/useLocalStorage";
import {PrivateRoute} from "./routeGuard/privateRoute";
import {refreshUser, updateToken} from "./services/api";
import {useTranslation} from "react-i18next";

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const PrivacyPolicyPage = lazy(() => import('pages/PrivacyPolicyPage/PrivacyPolicyPage'));

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [company, setCompany] = useLocalStorage('company', '');

  const {t} = useTranslation();
  const navigate = useNavigate();
  const {hash} = useLocation();

  useEffect(() => {
    updateToken()
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));

      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [hash]);

  const switchLoginModal = () => setIsLoginModalOpen(prevState => !prevState);

  const fetchCompany = async (f) => {
    if (company) {
      try {
        const company = await refreshUser();
        setCompany(company)

        f()
      } catch (e) {
        navigate('/');
        setCompany('')
        toast.error(t('toastUnauthorized'));
      }
    }
  };


return (
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Layout openLoginModal={switchLoginModal} company={company} setCompany={setCompany}/>}>
        <Route index element={<MainPage updateCompany={fetchCompany}/>}/>
        <Route path='/registration' element={<RegistrationPage updateCompany={fetchCompany}/>}/>
        <Route path='/profile' element={
          <PrivateRoute company={company}>
            <ProfilePage updateCompany={fetchCompany}/>
          </PrivateRoute>}/>
        <Route path='/policy' element={<PrivacyPolicyPage updateCompany={fetchCompany}/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Toaster/>
    {isLoginModalOpen && (
      <BasicModalWindow onClose={switchLoginModal}>
        <LoginModal onClose={switchLoginModal} addCompanyName={setCompany}/>
      </BasicModalWindow>
    )}
  </Suspense>
);
}

export default App;
