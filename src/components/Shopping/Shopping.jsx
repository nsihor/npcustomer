import phoneImg from "../../images/Shopping/galaxy_s20.png";
import bannerImg from "../../images/Shopping/roll-up_standing_banner.png";
import sprite from "../../images/sprite.svg";
import css from "./Shopping.module.scss";
import {useTranslation} from "react-i18next";

const Shopping = () => {
    const {t} = useTranslation();

    return (
        <div className={css.shopping} id="advantages">
            <div className="container">
                <div className="text-center">
                    <h2 className={css.title}>Shopping</h2>
                    {/*<p className="fs-5 mt-2 mb-5">*/}
                    {/*  Безкоштовний сервіс електронної торгівлі від Nova Post.*/}
                    {/*  Включає в себе розділ в мобільному додатку Nova Post та окремий*/}
                    {/*  маркетплейс*/}
                    {/*</p>*/}
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img alt="phone" src={phoneImg} width={"546px"}/>
                        <h3 className="mb-4 fs-2">{t("Shopping.app")} Nova Post</h3>
                        <div className="list">
                            <div className='d-flex'>
                                <svg className={css.svg}>
                                    <use href={sprite + "#icon-checkInCircle"}></use>
                                </svg>
                                <p className="mb-3 fs-6">
                                    {t("Shopping.p1")}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <svg className={css.svg}>
                                    <use href={sprite + "#icon-checkInCircle"}></use>
                                </svg>
                                <p className="fs-6">
                                    {t("Shopping.p2")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        <h3 className="mb-4 fs-2">{t("Shopping.marketPlace")} Shopping</h3>
                        <div className="list">
                            <div className='d-flex'>
                                <svg className={css.svg}>
                                    <use href={sprite + "#icon-checkInCircle"}></use>
                                </svg>
                                <p className="mb-3 fs-6">
                                    {t("Shopping.p3")}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <svg className={css.svg}>
                                    <use href={sprite + "#icon-checkInCircle"}></use>
                                </svg>
                                <p className="mb-3 fs-6">
                                    {t("Shopping.p4")}
                                </p>
                            </div>
                            <img alt="banner" src={bannerImg} width={"546px"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;
