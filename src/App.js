import "./App.css";
import React, {useState} from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./pages/Registration/Registration";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Layout openLoginModal={() => setIsLoginModalOpen(true)} />}>
        <Route index element={<MainPage isLoginModalOpen={isLoginModalOpen} closeModal={() => setIsLoginModalOpen(false)} />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
