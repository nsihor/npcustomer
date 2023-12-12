
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
     <div className="container mb-4 py-4 mb-sm-5 my-md-5 py-sm-5 order" id="order">
         <div className="row align-items-center">
             <div className="col-12 col-md-7">
                 <h1 className={clsx(css.title, "mb-3 fw-bolder")}>Shopping - {t("FirstBlock.title")}</h1>
                 <p className="fs-5">{t("FirstBlock.text")}</p>
             </div>
             <div className="col-12 col-md-5 mb-4">
                 <img src={macbook} alt="Macbook"/>
             </div>
             <div className={clsx(css.btn, 'col-12 col-md-4 col-xl-3 col-xxl-2')}>
                 <Link to={'/registration'}
                       className='btn w-100 btn-light text-nowrap bg-transparent border-0 py-0 px-0'>
                     <Btn styled="success" text={t("FirstBlock.btn")} classes='w-100'/>
                 </Link>
             </div>
         </div>
     </div>
    );
};

export default FirstBlock;