import clsx from "clsx";
import css from "./Autauthorizeorize.module.scss";
import sprite from "../../../images/sprite.svg";
const Authorize = ({openModalFunc}) => {
 return (
     <div onClick={openModalFunc} className={clsx(css.authorize, "d-flex gap-2 align-items-center")}>
         <svg width="24" height="24"><use href={sprite + "#icon-exit"}/></svg>
         <span>Вхід</span>
     </div>
 );
};

export default Authorize;