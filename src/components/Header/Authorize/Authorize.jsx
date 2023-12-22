import clsx from "clsx";
import css from "./Autauthorize.module.scss";
import sprite from "../../../images/sprite.svg";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {logOut} from "../../../services/api";
import toast from "react-hot-toast";

const Authorize = ({openModalFunc, company, isMobile, setCompany}) => {
  const {t} = useTranslation();

  return (
    <>
      {!company ? (
        <div onClick={openModalFunc}
             className={clsx(css.authorize, "d-flex gap-2 align-items-center cursor-pointer")}>
          <svg width="24" height="24">
            <use href={sprite + "#icon-entrance"}/>
          </svg>
          {!isMobile && <span>{t("header.authorize")}</span>}
        </div>
      ) : (
        <div className={clsx(css.authorize, "d-flex gap-2 align-items-center")}>
          <svg
            onClick={() => {
              setCompany('')
              logOut()
              toast.success(t('header.logoutToast'))
            }}
            width="24" height="24">
            <use href={sprite + "#icon-entrance"}/>
          </svg>
          <Link to="/profile">{company}</Link>
        </div>
      )}
    </>
  );
};

export default Authorize;