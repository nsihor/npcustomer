
import React from "react";
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom";
import clsx from "clsx";
import macbook from "../../images/MainPage/macbook.png";
import Btn from "../Btn/Btn";
import css from "./FirstBlock.module.scss"

const FirstBlock = () => {
    const {t} = useTranslation();

    return (
     <div className="container my-5 py-5 order" id="order">
         <div className="row align-items-center">
             <div className="col-12 col-md-7">
                 <h1 className={clsx(css.title, "mb-3 fw-bolder")}>Shopping - {t("FirstBlock.title")}</h1>
                 <p className="fs-5">{t("FirstBlock.text")}</p>
                 <Link to={'/registration'}  className='btn btn-light text-nowrap bg-transparent border-0 py-0 px-0'>
                     <Btn styled="success" text={t("FirstBlock.btn")}/>
                 </Link>
             </div>
             <div className="col-12 col-md-5">
                 <img src={macbook} alt="Macbook"/>
             </div>
         </div>
     </div>
 );
};

export default FirstBlock;