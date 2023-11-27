import React, {useEffect, useState} from 'react';
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import {Toaster} from 'react-hot-toast';
import BasicModalWindow from './components/modals/BasicModalWindow/BasicModalWindow';
import LoginModal from './components/modals/LoginModal/LoginModal';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  useEffect(() => {
    !companyName && setCompanyName(localStorage.getItem('companyName'));
    console.log(companyName);
  }, [companyName]);
  const switchLoginModal = () => setIsLoginModalOpen(prevState => !prevState);
  const addCompanyName = (name) => setCompanyName(name);


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout openLoginModal={switchLoginModal} companyName={companyName} />}>
          <Route index element={<MainPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/policy' element={<PrivacyPolicyPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
      {isLoginModalOpen && (
        <BasicModalWindow onClose={switchLoginModal}>
          <LoginModal onClose={switchLoginModal} addCompanyName={addCompanyName}/>
        </BasicModalWindow>
      )}
    </>
  );
}

export default App;
