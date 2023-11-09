import clsx from "clsx";
import css from "../Authorize/Autauthorizeorize.module.scss";
import sprite from "../../images/sprite.svg";
const Authorize = () => {
 return (
     <div className={clsx(css.authorize, "d-flex gap-2 align-items-center")}>
         <svg width="24" height="24"><use href={sprite + "#icon-exit"}/></svg>
         <span>Вихід</span>
     </div>
 );
};

export default Authorize;