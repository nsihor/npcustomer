import clsx from "clsx";
import css from "./RegistrationStepsWrap.module.scss";
import {useTranslation} from "react-i18next";

const RegistrationStepsWrap = ({children, openStep, isMobile}) => {
  const {t} = useTranslation();

  return (
    <div className={`${!isMobile && 'container'} mb-5 py-md-5`}>
      <h1 className='ms-4 mb-3 fw-medium'>{t("RegistrationSteps.title")}</h1>

      <div className={clsx(css.registration, "d-flex flex-column flex-md-row mt-md-5")}>
        <div className={clsx(css.leftSide, "col-12 col-md-4 d-md-flex")}>
          <div className={clsx(css.stepsBlock, "row justify-content-start")}>
            <div className={clsx(openStep >= 1 ? css.active : '', "d-flex align-items-center gap-3 gap-lg-4")}>
              <div className={clsx(css.circleStep, "d-flex row")}>
                <span className={clsx(css.circleNumber)}>01</span>
                <span className={clsx(css.circleStepText)}>{t("RegistrationSteps.step")}</span>
              </div>
              <div className={css.title}>{t("RegistrationSteps.authorizationStep")}</div>
            </div>
            <div className={clsx(openStep >= 2 ? css.active : '', "d-flex align-items-center gap-3 gap-lg-4")}>
              <div className={clsx(css.circleStep, "d-flex row")}>
                <span className={clsx(css.circleNumber)}>02</span>
                <span className={clsx(css.circleStepText)}>{t("RegistrationSteps.step")}</span>
              </div>
              <div className={css.title}>{t("RegistrationSteps.aboutStep")}</div>
            </div>
            <div className={clsx(openStep >= 3 ? css.active : '', "d-flex align-items-center gap-3 gap-lg-4")}>
              <div className={clsx(css.circleStep, "d-flex row")}>
                <span className={clsx(css.circleNumber)}>03</span>
                <span className={clsx(css.circleStepText)}>{t("RegistrationSteps.step")}</span>
              </div>
              <div className={css.title}>{t("RegistrationSteps.addressStep")}</div>
            </div>
            <div className={clsx(openStep >= 4 ? css.active : '', "d-flex align-items-center gap-3 gap-lg-4")}>
              <div className={clsx(css.circleStep, "d-flex row")}>
                <span className={clsx(css.circleNumber)}>04</span>
                <span className={clsx(css.circleStepText)}>{t("RegistrationSteps.step")}</span>
              </div>
              <div className={css.title}>{t("RegistrationSteps.additionalStep")}</div>
            </div>
          </div>
        </div>
        <div className={clsx(css.rightSide, "col-12 col-md-8 mt-4 mt-md-0")}>
          <div className="">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationStepsWrap;