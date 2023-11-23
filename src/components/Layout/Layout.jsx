import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({openLoginModal, companyName}) => {
  return (
    <>
      <Header openLoginModal={openLoginModal} companyName={companyName}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
