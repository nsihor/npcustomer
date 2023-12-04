import css from "./Statistic.module.scss";
import sprite from "../../images/sprite.svg";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import clsx from "clsx";

const Statistic = () => {
    const {t} = useTranslation();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <div className="container-sm position-relative" id="about">
        <div className={css.statSm}>
            <div className="d-flex align-items-center flex-column flex-sm-row">
                <div className="d-flex align-items-center me-3 me-sm-0 ps-4 ps-sm-0 text-start">
                    <span className={clsx(css.statSmDigit, "me-3")}>40+</span>
                    <span>{t("Statistic.users")}</span>
                </div>
                <div className={clsx(css.svgWrapper, "mx-4 mt-0 mx-sm-3")}>
                    {!isMobile ?
                        <svg width="17" height="40">
                            <use href={sprite + "#icon-diagonalLines"}/>
                        </svg> :
                        <svg className={css.mobileDiagonalLines}>
                            <use href={sprite + "#icon-mobileDiagonalLines"}/>
                        </svg>
                    }
                </div>
                <div className="d-flex align-items-center ps-4 ps-sm-0 text-start">
                    <span className={clsx(css.statSmDigit, "ms-2 ms-sm-0 me-3")}>11+</span>
                    <span>{t("Statistic.customers")}</span>
                </div>
            </div>
        </div>
    </div>)
};

export default Statistic;