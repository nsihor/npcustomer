import css from "./NewOpportunities.module.scss";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const NewOpportunities = () => {
    const {t} = useTranslation();

    return (
    <div className={css.stat}>
        <div className="container position-relative">
            <div className="py-5 my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className={clsx(css.wrapGeo, "mb-4 mt-5")}>
                            <svg width="36" height="36"><use href={sprite + "#icon-geo"}/></svg>
                        </div>
                        <h3 className="mb-3">{t("NewOpportunities.title")}</h3>
                        <p className="fs-6 mb-5">{t("NewOpportunities.description")}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className={clsx(css.statDigit, "")}>5+</div>
                            <div className="fs-6">
                                {t("NewOpportunities.turnover")}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className={css.statDigit}>37+</div>
                            <div className="stat fs-6">
                                {t("NewOpportunities.activeCards")}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <div className="stat-item">
                            <div className={css.statDigit}>150 €</div>
                            <div className="stat fs-6">
                                {t("NewOpportunities.customsClearance")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
};

export default NewOpportunities;