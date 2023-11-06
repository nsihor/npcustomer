import clsx from "clsx";
import css from "./Footer.module.scss";
import sprite from "../../images/sprite.svg";

const Footer = () => {
  return (
      <footer className={clsx(css.footer, "pt-4 pt-md-5 pb-4")}>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-4 text-center text-md-start">
                      <svg className="mb-4 mb-md-0"><use href={sprite + "#npLogo"}></use></svg>
                  </div>
                  <div className="col-12 col-md-8">
                      <nav className={clsx(css.menu, "w-100 d-flex justify-content-around mb-4 mb-md-0")}>
                          <a href="about">Хто ми</a>
                          <a href="advantages">Наші переваги</a>
                      </nav>
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                      <div className="copyright mt-3 mt-md-0 text-center text-md-start">
                          <div className="mb-1">© 2023 Shopping Усі права захищено</div>
                          <div>
                              <a href="https://about.np.shopping/policy/" target="_blank">Політика конфіденційності</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
