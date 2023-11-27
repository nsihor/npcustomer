import clsx from "clsx";
import css from "./Footer.module.scss";
import sprite from "../../images/sprite.svg";
import {useTranslation} from "react-i18next"
import {Link} from 'react-router-dom';

const Footer = () => {
    const {t} = useTranslation();

    return (
      <footer className={clsx(css.footer, "pt-4 pt-md-5 pb-4 pb-md-5")}>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-4 text-center text-md-start">
                      <svg className="mb-4 mb-md-0" width="155" height="29"><use href={sprite + "#npLogo"}></use></svg>
                  </div>
                  <div className="col-12 col-md-8">
                      <nav className={clsx(css.menu, "w-100 d-flex justify-content-md-end justify-content-center mb-4 mb-md-0 gap-5")}>
                          <a className="px-5" href="/#about">{t("header.about")}</a>
                          <a className="px-5" href="/#advantages">{t("header.advantages")}</a>
                      </nav>
                  </div>
              </div>
              <div className="row mt-0 mt-md-5">
                  <div className="col">
                      <div className={clsx(css.copyright, "mt-3 mt-md-0 text-center text-md-start")}>
                          <div className="mb-1">© 2023 Shopping {t("footer.rights")}</div>
                          <div>
                              <Link to={"/policy"}>{t("footer.confidentiality")}</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
