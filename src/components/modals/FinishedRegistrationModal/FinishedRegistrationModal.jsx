import css from "../Modals.module.scss";
import img from "../../../images/Modal/sandy-time.png";
import clsx from "clsx";
import sprite from "../../../images/sprite.svg"
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";

const FinishedRegistrationModal = ({code = '5daf47f72ae20f7894155a1b66f85cb0'}) => {
    const {t} = useTranslation();

    const handleCopyText = () => {
        navigator.clipboard.writeText(code);
        toast(t("FinishedRegistrationModal.toast"))
    };

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className={clsx(css.img_sandy_time, 'mb-3 mb-sm-4')} src={img} alt='sandy-time'/>
                <h2 className={clsx(css.title, 'mb-3')}>{t("FinishedRegistrationModal.title")}</h2>
                <p className={clsx(css.text, 'mb-3 mb-sm-4')}>
                    {t("FinishedRegistrationModal.infoText")}
                </p>
                <div className={clsx(css.input, 'rounded py-3 px-2 p mb-1 position-relative w-100')}>
                    <p className={css.copy_input_p}>{code}</p>
                    <svg className='svg' onClick={handleCopyText}>
                        <use href={sprite + '#icon-copy'}></use>
                    </svg>
                </div>
                <p className={clsx(css.additionalText, 'mb-4')}>
                    {t("FinishedRegistrationModal.tokenText")}
                </p>
                <Link to={'/profile'}
                      className={clsx(css.link, 'd-flex justify-content-center align-items-center justify-content-center text-decoration-none rounded py-3 w-100')}
                >
                    {t("FinishedRegistrationModal.link")}
                </Link>
            </div>
        </div>
    )
}

export default FinishedRegistrationModal;