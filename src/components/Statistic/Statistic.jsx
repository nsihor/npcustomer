import css from "./Statistic.module.scss";
import sprite from "../../images/sprite.svg";
import {useTranslation} from "react-i18next";

const Statistic = () => {
    const {t} = useTranslation();

    return (<div className="container-sm position-relative" id="about">
        <div className={css.statSm}>
            <div className="d-flex align-items-start align-items-md-center">
                <div className="d-flex align-items-center flex-column flex-md-row">
                    <span className={css.statSmDigit}>40+</span>
                    <span>{t("Statistic.users")}</span>
                </div>
                <div className="mx-4 mt-4 mt-md-0">
                    <svg width="17" height="40">
                        <use href={sprite + "#icon-diagonalLines"}/>
                    </svg>
                </div>
                <div className="d-flex align-items-center flex-column flex-md-row">
                    <span className={css.statSmDigit}>11+</span>
                    <span>{t("Statistic.customers")}</span>
                </div>
            </div>
        </div>
    </div>)
};

export default Statistic;