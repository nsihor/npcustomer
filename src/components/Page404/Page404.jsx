import css from './Page404.scss';
import {useTranslation} from "react-i18next"
    ;
import Btn from "../Btn/Btn";
import {Link} from "react-router-dom";
import React from "react";
import clsx from 'clsx';

const Breadcrumbs = ({currentPageName}) => {
    const {t} = useTranslation();

    return (
        <div className="container">
            <div className={clsx(css.wrapper404,"row")}>
                <div className="col-sm-12 d-flex justify-content-center">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center ">404</h1>
                        </div>

                        <div className="contant_box_404">
                            <h3 className="h2">{t("Page404.title")}</h3>

                            <p>{t("Page404.p")}</p>

                            <Link to={'/'}>
                                <Btn styled="success" text={t("Page404.btn")}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Breadcrumbs;