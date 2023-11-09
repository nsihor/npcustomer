import phoneImg from "../../images/Shopping/galaxy_s20.png";
import bannerImg from "../../images/Shopping/roll-up_standing_banner.png";
import sprite from "../../images/sprite.svg";
import css from "./Shopping.module.scss";

const Shopping = () => {
  return (
    <div className={css.shopping} id="advantages">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-3">Shopping</h2>
          <p className="fs-5 mt-2 mb-5">
            Безкоштовний сервіс електронної торгівлі від Nova Post.
            <br />
            Включає в себе розділ в мобільному додатку Nova Post та окремий
            маркетплейс{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img alt="phone" src={phoneImg} width={"546px"} />
            <h3 className="mb-4 fs-2">Додаток Nova Post</h3>
            <div className="list">
              <div className="mb-3 fs-6">
                <svg className={css.svg}>
                  <use href={sprite + "#icon-checkInCircle"}></use>
                </svg>{" "}
                має 7 мільйонів активних користувачів{" "}
              </div>
              <div className="fs-6">
                <svg className={css.svg}>
                  <use href={sprite + "#icon-checkInCircle"}></use>
                </svg>{" "}
                біля 1 мільярду взаємодій в місяць{" "}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5">
            <h3 className="mb-4 fs-2">Маркетплейс Shopping</h3>
            <div className="list">
              <div className="mb-3 fs-6">
                <svg className={css.svg}>
                  <use href={sprite + "#icon-checkInCircle"}></use>
                </svg>{" "}
                зручна платформа для керування товарами та обробки замовлень{" "}
              </div>
              <div className="mb-3 fs-6">
                <svg className={css.svg}>
                  <use href={sprite + "#icon-checkInCircle"}></use>
                </svg>{" "}
                унікальні інтеграції з Google, що забезпечують максимальну
                присутність у всіх рекламних каналах{" "}
              </div>
              <img alt="banner" src={bannerImg} width={"546px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
