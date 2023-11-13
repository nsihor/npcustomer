import clsx from "clsx";
import css from "./RegistrationStepsWrap.module.scss";

const RegistrationStepsWrap = ({children, openStep}) => {
    return (
        <div className={clsx(css.registrationWrap, "container mb-5 py-5")}>
            <h1>Реєструйся всього за 4 кроки:</h1>

            <div className={clsx(css.registration, "d-flex mt-5 hide")}>
                <div className={clsx(css.leftSide, "col-12 col-md-4 d-md-flex d-none")}>
                    <div className={clsx(css.stepsBlock, "row justify-content-start")}>
                        <div className={clsx(openStep >= 1 ? css.active : '', "d-flex align-items-center gap-4")}>
                            <div className={clsx(css.circleStep, "d-flex row")}>
                                <span className={clsx(css.circleNumber)}>01</span>
                                <span className={clsx(css.circleStepText)}>крок</span>
                            </div>
                            <div className={clsx(css.title, "fs-5")}>Авторизація</div>
                        </div>
                        <div className={clsx(openStep >= 2 ? css.active : '', "d-flex align-items-center gap-4")}>
                            <div className={clsx(css.circleStep, "d-flex row")}>
                                <span className={clsx(css.circleNumber)}>02</span>
                                <span className={clsx(css.circleStepText)}>крок</span>
                            </div>
                            <div className={clsx(css.title, "fs-5")}>Про компанію</div>
                        </div>
                        <div className={clsx(openStep >= 3 ? css.active : '', "d-flex align-items-center gap-4")}>
                            <div className={clsx(css.circleStep, "d-flex row")}>
                                <span className={clsx(css.circleNumber)}>03</span>
                                <span className={clsx(css.circleStepText)}>крок</span>
                            </div>
                            <div className={clsx(css.title, "fs-5")}>Адреса</div>
                        </div>
                        <div className={clsx(openStep >= 4 ? css.active : '', "d-flex align-items-center gap-4")}>
                            <div className={clsx(css.circleStep, "d-flex row")}>
                                <span className={clsx(css.circleNumber)}>04</span>
                                <span className={clsx(css.circleStepText)}>крок</span>
                            </div>
                            <div className={clsx(css.title, "fs-5")}>Додаткова інформація</div>
                        </div>
                    </div>
                </div>
                <div className={clsx(css.rightSide, "col-12 col-md-8")}>
                    <div className={clsx(css.formWrapper, "mt-4")}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationStepsWrap;