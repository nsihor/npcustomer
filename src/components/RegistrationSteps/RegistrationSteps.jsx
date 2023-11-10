import clsx from "clsx";
import css from "../RegistrationSteps/RegistrationSteps.module.scss";
import sprite from "../../images/sprite.svg";
import FormRegistration from "./FormRegistration/FormRegistration";
const RegistrationSteps = () => {
 return (
     <div className="container my-5 py-5" >
         <h1>Реєструйся всього за 4 кроки:</h1>

         <div className={clsx(css.registration, "d-flex mt-5 hide")}>
             <div className={clsx(css.leftSide, "col-12 col-md-5 d-md-flex d-none")}>
                 <div className={clsx(css.stepsBlock, "row justify-content-start")}>
                     <div className={clsx(css.active,"d-flex align-items-center gap-4")}>
                         <div className={clsx(css.circleStep, "d-flex row")}>
                             <span className={clsx(css.circleNumber)}>01</span>
                             <span className={clsx(css.circleStepText)}>крок</span>
                         </div>
                         <div className="fw-bold fs-5">Авторизація</div>
                     </div>
                     <div className={clsx("d-flex align-items-center gap-4")}>
                         <div className={clsx(css.circleStep, "d-flex row")}>
                             <span className={clsx(css.circleNumber)}>02</span>
                             <span className={clsx(css.circleStepText)}>крок</span>
                         </div>                         <div className="fs-5">Про компанію</div>
                     </div>
                     <div className={clsx("d-flex align-items-center gap-4")}>
                         <div className={clsx(css.circleStep, "d-flex row")}>
                             <span className={clsx(css.circleNumber)}>03</span>
                             <span className={clsx(css.circleStepText)}>крок</span>
                         </div>                         <div className="fs-5">Адреса</div>
                     </div>
                     <div className={clsx("d-flex align-items-center gap-4")}>
                         <div className={clsx(css.circleStep, "d-flex row")}>
                             <span className={clsx(css.circleNumber)}>04</span>
                             <span className={clsx(css.circleStepText)}>крок</span>
                         </div>                         <div className="fs-5">Додаткова інформація</div>
                     </div>
                 </div>
             </div>
             <div className={clsx(css.rightSide, "col-12 col-md-7")}>
                 <div className={clsx(css.formWrapper, "mt-4")}>
                     <FormRegistration/>
                 </div>
             </div>
         </div>
     </div>
 );
};

export default RegistrationSteps;