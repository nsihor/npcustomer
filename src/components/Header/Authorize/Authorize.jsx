import clsx from "clsx";
import css from "./Autauthorizeorize.module.scss";
import sprite from "../../../images/sprite.svg";
import {Link} from "react-router-dom";

const Authorize = ({openModalFunc}) => {
    const companyName = localStorage.getItem("companyName");

 return (
     <>
         {!companyName ? (
             <div onClick={openModalFunc} className={clsx(css.authorize, "d-flex gap-2 align-items-center")}>
                 <svg width="24" height="24"><use href={sprite + "#icon-entrance"}/></svg>
                 <span>Вхід</span>
             </div>
         ) : (
             <div onClick={openModalFunc} className={clsx(css.authorize, "d-flex gap-2 align-items-center")}>
                 <svg width="24" height="24"><use href={sprite + "#icon-entrance"}/></svg>
                 <Link to="/profile">{companyName}</Link>
             </div>
         )}
     </>
 );
};

export default Authorize;