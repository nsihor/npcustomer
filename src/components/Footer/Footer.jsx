// import sprite from "../../images/sprite.svg";
// import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src="https://merchant.np.shopping/static/images/logo.svg"
              alt="Logo"
              className="mb-4 mb-md-0"
            />
          </div>
          <div className="col-12 col-md-5">
            <nav className="menu w-100 d-flex justify-content-around mb-4 mb-md-0">
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
                <a
                  href="https://about.np.shopping/policy/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Політика конфіденційності
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    // <footer className={css.footer}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col">
    //         <svg className="col">
    //           <use href={sprite + "#icon-npLogo"}></use>
    //         </svg>
    //         <p>Shopping</p>
    //         <p>© 2023 ТОВ «Нова пошта» Усі права захищено</p>
    //         <a href="#www">Політика конфіденційності</a>
    //       </div>
    //       <div className="col ml-auto text-right">
    //         <a href="#www">Хто ми</a>
    //         <a href="#www">Наші переваги</a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
