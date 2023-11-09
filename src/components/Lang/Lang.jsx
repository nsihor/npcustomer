import clsx from "clsx";
import css from "../Lang/Lang.module.scss";
const Lang = () => {
 return (
     <div className={clsx(css.lang, "d-flex gap-2")}>
         <a href="/uk/">UK</a>
         <span className="active">PL</span>
     </div>
 );
};

export default Lang;