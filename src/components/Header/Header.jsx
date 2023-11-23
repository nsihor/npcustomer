import sprite from "../../images/sprite.svg";
import clsx from "clsx";
import css from "../Header/Headeer.module.scss";
import Lang from "../Lang/Lang";
import Authorize from "./Authorize/Authorize";
import {useTranslation} from "react-i18next";

const Header = ({openLoginModal, companyName}) => {
    const { t} = useTranslation();

 return (
    <header className={clsx(css.header, "py-4 mb-4 fixed-top")}>
         <div className="container">
             <div className="row">
                 <div className="col-12 col-md-3 text-center text-md-start mb-4 mb-md-0">
                     <a href="/">
                         <svg width="155" height="29"><use className="logo" href={sprite + "#npLogo"}/></svg>
                     </a>
                 </div>
                 <div className="col-12 col-md-9 justify-content-end d-flex gap-5 align-items-center">
                     <nav className="menu d-flex justify-content-between fs-6 gap-5">
                         <a href="/#about">{t("header.about")}</a>
                         <a href="/#advantages">{t("header.advantages")}</a>
                     </nav>
                    <Lang/>
                    <Authorize openModalFunc={openLoginModal} companyName={companyName}/>
                 </div>
             </div>
         </div>
     </header>
 );
};

export default Header;