import css from "./NewOpportunities.module.scss";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const NewOpportunities = () => {
    const {t} = useTranslation();

    return (
        <div className={css.stat}>
            <div className="container position-relative">
                <div className="row">
                    <div className="col text-center">
                        <div className={clsx(css.wrapGeo, "mb-4")}>
                            <svg width="36" height="36">
                                <use href={sprite + "#icon-geo"}/>
                            </svg>
                        </div>
                        <h3 className="mb-3">{t("NewOpportunities.title")}</h3>
                        <p className="fs-6 mb-0 mb-md-5">{t("NewOpportunities.description")}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className={clsx(css.border, "stat-item mb-md-4 pb-2 col-11 col-md-3")}>
                        <div className={css.statDigit}>5+</div>
                        <div className="fs-6 text-center">
                            {t("NewOpportunities.turnover")}
                        </div>
                    </div>
                    <div className={clsx(css.border, "stat-item mb-md-4 pb-2 col-11 col-md-3")}>
                        <div className={css.statDigit}>37+</div>
                        <div className="stat fs-6 text-center">
                            {t("NewOpportunities.activeCards")}
                        </div>
                    </div>
                    <div className="stat-item col-11 col-md-3">
                        <div className={css.statDigit}>150 €</div>
                        <div className="stat fs-6 text-center">
                            {t("NewOpportunities.customsClearance")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewOpportunities;