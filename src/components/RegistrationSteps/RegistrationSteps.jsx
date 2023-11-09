import clsx from "clsx";
import css from "../RegistrationSteps/RegistrationSteps.module.scss";
import sprite from "../../images/sprite.svg";
import {Formik} from "formik";
const RegistrationSteps = () => {
 return (
     <div className="container my-5 py-5" >
         <h1>Реєструйся всього за 4 кроки:</h1>

         <div className={clsx(css.registration, "d-flex mt-5")}>
             <div className={clsx(css.leftSide, "col-12 col-md-5")}>
                 <div className={clsx(css.stepsBlock, "row gap-4")}>
                     <div className={clsx(css.step, css.active,"d-flex align-items-center gap-3")}>
                         <svg width="49" height="46"><use href={sprite + "#circleStep"}></use></svg>
                         <div className="fw-bold fs-5">Авторизація</div>
                     </div>
                     <div className={clsx(css.step, css.active,"d-flex align-items-center gap-3")}>
                         <svg width="49" height="46"><use href={sprite + "#circleStep"}></use></svg>
                         <div className="fs-5">Авторизація</div>
                     </div>
                     <div className={clsx(css.step, css.active,"d-flex align-items-center gap-3")}>
                         <svg width="49" height="46"><use href={sprite + "#circleStep"}></use></svg>
                         <div className="fs-5">Авторизація</div>
                     </div>
                     <div className={clsx(css.step, css.active,"d-flex align-items-center gap-3")}>
                         <svg width="49" height="46"><use href={sprite + "#circleStep"}></use></svg>
                         <div className="fs-5">Авторизація</div>
                     </div>
                 </div>
             </div>
             <div className={clsx(css.rightSide, "col-12 col-md-7")}>
                 <div className={clsx(css.formWrapper, "")}>
                     <div>КРОК <span>01</span>/4</div>
                     {/*<Formik initialValues={} onSubmit={}/>*/}
                 </div>
             </div>
         </div>
     </div>
 );
};

export default RegistrationSteps;