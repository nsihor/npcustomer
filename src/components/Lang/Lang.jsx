import clsx from "clsx";
import css from "../Lang/Lang.module.scss";
const Lang = () => {
 return (
     <div className={clsx(css.lang, "d-flex gap-2")}>
         <a href="/ukpl/">PL</a>
         <span className="active">UA</span>
     </div>
 );
};

export default Lang;