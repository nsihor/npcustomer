import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({openLoginModal, company, setCompany}) => {
  return (
    <>
      <Header openLoginModal={openLoginModal} company={company} setCompany={setCompany}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
