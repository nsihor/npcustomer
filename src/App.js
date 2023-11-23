import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration/Registration';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import {Toaster} from 'react-hot-toast';
import BasicModalWindow from './components/modals/BasicModalWindow/BasicModalWindow';
import LoginModal from './components/modals/LoginModal/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const switchLoginModal = () => setIsLoginModalOpen(prevState => !prevState)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout openLoginModal={switchLoginModal} />}>
          <Route index element={<MainPage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
      {isLoginModalOpen && (
        <BasicModalWindow onClose={switchLoginModal}>
          <LoginModal onClose={switchLoginModal} />
        </BasicModalWindow>
      )}
    </>
  );
}

export default App;
