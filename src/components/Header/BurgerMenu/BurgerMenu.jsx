import {Link} from "react-router-dom";
import Lang from "../../Lang/Lang";
import clsx from "clsx";
import css from "./BurgerMenu.module.scss";
import sprite from "../../../images/sprite.svg";
import {useTranslation} from "react-i18next";

const BurgerMenu = ({onClose}) => {
    const {t} = useTranslation()

    const handleBackdropClick = (e) => {
        e.target === e.currentTarget && onClose();
        console.log(e.target, e.currentTarget)
    }

    return (
        <div className={css.backdrop}>
            <div className='d-flex flex-column fs-6 h-100' onClick={handleBackdropClick}>
                <div className='row'>
                    <div className={clsx(css.top, 'col-12 bg-white px-4')}>
                        <div className='d-flex justify-content-between pe-5'>
                            <button
                                onClick={onClose}
                                className='border-0 px-0 py-3 bg-white'
                                type='button'
                                aria-controls='navbarTopMenu'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                                <svg width='17.2' height='12'>
                                    <use href={sprite + "#icon-arrowBack"}></use>
                                </svg>
                            </button>
                            <Lang/>
                        </div>
                    </div>
                </div>
                <div className={clsx(css.bottom, 'bg-white h-100')}>
                    <div className='container h-100'>
                        <div className='d-flex flex-column pt-3 fw-semibold'>
                            <Link
                                className={clsx('py-2 d-flex justify-content-between border-bottom')}
                                onClick={onClose}
                                to="/#about">
                                {t("header.about")}
                                <svg width='16' height='16'>
                                    <use href={sprite + "#icon-linkArrow"}></use>
                                </svg>
                            </Link>
                            <Link
                                className={clsx('py-2 d-flex justify-content-between border-bottom')}
                                onClick={onClose}
                                to="/#advantages">
                                {t("header.advantages")}
                                <svg width='16' height='16'>
                                    <use href={sprite + "#icon-linkArrow"}></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BurgerMenu