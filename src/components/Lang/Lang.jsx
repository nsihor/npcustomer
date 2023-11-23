import clsx from "clsx";
import css from "../Lang/Lang.module.scss";
import {useTranslation} from "react-i18next";

const Lang = () => {
    const {i18n} = useTranslation();

    const changeLanguage = language => i18n.changeLanguage(language)

    return (
        <div className={clsx(css.lang, "d-flex gap-2")}>
            <button onClick={() => changeLanguage("pl")} className={clsx("bg-transparent border-0 p-0", i18n.language === "pl" && "text-body-tertiary" )}>PL</button>
            <button onClick={() => changeLanguage("uk")} className={clsx("bg-transparent border-0 p-0", i18n.language === "uk" && "text-body-tertiary" )}>UA</button>
        </div>
    );
};

export default Lang;