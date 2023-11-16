import React, {useState} from "react";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./pages/Registration/Registration";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {Toaster} from "react-hot-toast";

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    // const { lang } = useParams(); //EXAMPLE

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout openLoginModal={() => setIsLoginModalOpen(true)}/>}>
                    <Route index element={<MainPage isLoginModalOpen={isLoginModalOpen}
                                                    closeModal={() => setIsLoginModalOpen(false)}/>}/>
                    <Route path="/:lang" element={<MainPage isLoginModalOpen={isLoginModalOpen}
                                                            closeModal={() => setIsLoginModalOpen(false)}/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/:lang/registration" element={<Registration/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/:lang/profile" element={<ProfilePage/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
