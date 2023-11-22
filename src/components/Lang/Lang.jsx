import clsx from "clsx";
import css from "../Lang/Lang.module.scss";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const Lang = () => {
    const [currentLanguage, setCurrentLanguage] = useLocalStorage("language", "")
    const {i18n, t} = useTranslation();

    const changeLanguage = language => i18n.changeLanguage(language)

    useEffect(() => {
        changeLanguage(currentLanguage)
    }, []);

    useEffect(() => {
        setCurrentLanguage(t("current"))
    }, [t]);

    return (
        <div className={clsx(css.lang, "d-flex gap-2")}>
            <button onClick={() => changeLanguage("pl")} className={clsx("bg-transparent border-0 p-0", currentLanguage === "pl" && "text-body-tertiary" )}>PL</button>
            <button onClick={() => changeLanguage("uk")} className={clsx("bg-transparent border-0 p-0", currentLanguage === "uk" && "text-body-tertiary" )}>UA</button>
        </div>
    );
};

export default Lang;