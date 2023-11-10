import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({openLoginModal}) => {
  return (
    <>
      <Header openLoginModal={openLoginModal} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
