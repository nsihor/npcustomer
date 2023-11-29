import phoneImg from "../../images/Shopping/galaxy_s20.png";
import bannerImg from "../../images/Shopping/roll-up_standing_banner.png";
import sprite from "../../images/sprite.svg";
import css from "./Shopping.module.scss";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

const Shopping = () => {
    const {t} = useTranslation();

    return (
        <div className={css.shopping} id="advantages">
            <div className="container">
                <div className="text-center">
                    <h2 className={css.title}>Shopping</h2>
                </div>
                <div className="row">
                    <div className={clsx('col-12 mb-5', css.npAppBlockContainer)}>
                        <div className='row'>
                            <div className='col-4 col-md-6 mt-5'>
                                <img className={css.imgPhone} alt="phone" src={phoneImg}/>
                            </div>
                            <div className="col-8 col-md-6 d-flex flex-column pe-0 ps-4">
                                <h3 className="mb-4 fw-semibold fs-5">{t("Shopping.app")} Nova Post</h3>
                                <ul className="px-0">
                                    <li className='d-flex'>
                                        <svg className={css.svg}>
                                            <use href={sprite + "#icon-checkInCircle"}></use>
                                        </svg>
                                        <p className="fs-6 w-100 px-2">
                                            {t("Shopping.p1")}
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <svg className={css.svg}>
                                            <use href={sprite + "#icon-checkInCircle"}></use>
                                        </svg>
                                        <p className="fs-6 w-100 px-2">
                                            {t("Shopping.p2")}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-md-5">
                        <div className="row">
                            <div className="col-11 col-md-6">
                                <h3 className="mb-4 fw-semibold fs-5">{t("Shopping.marketPlace")} Shopping</h3>
                                <ul className="px-0">
                                    <li className='d-flex w-75'>
                                        <svg className={css.svg}>
                                            <use href={sprite + "#icon-checkInCircle"}></use>
                                        </svg>
                                        <p className="fs-6 w-100 px-2">
                                            {t("Shopping.p3")}
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <svg className={css.svg}>
                                            <use href={sprite + "#icon-checkInCircle"}></use>
                                        </svg>
                                        <p className="fs-6 w-100 px-2">
                                            {t("Shopping.p4")}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1 col-md-6 position-relative">
                                <img className={css.imgBanner} alt="banner" src={bannerImg} width={"546px"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;
