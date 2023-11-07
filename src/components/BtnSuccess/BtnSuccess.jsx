import css from "./BtnSuccess.module.scss";
import clsx from "clsx";

const BtnSuccess = () => {
    return (
        <button className={clsx(css.btnSuccess, "btn btn-success text-nowrap")} id="sendOrder">Стати партнером</button>
    );
};

export default BtnSuccess;