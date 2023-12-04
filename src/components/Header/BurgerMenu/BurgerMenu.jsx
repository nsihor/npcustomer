import {Link} from "react-router-dom";
import {t} from "i18next";
import Lang from "../../Lang/Lang";
import clsx from "clsx";
import css from "./BurgerMenu.module.scss";
import sprite from "../../../images/sprite.svg";

const BurgerMenu = ({onClose}) => {
    const handleBackdropClick = (e) => e.target === e.currentTarget && onClose();

    return (
        <div onClick={handleBackdropClick} className={css.backdrop}>
            <div className='d-flex flex-column fs-6 h-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 bg-white d-flex justify-content-between pe-5'>
                            <button
                                onClick={onClose}
                                className='border-0 px-0 py-3'
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
                        <div className='d-flex flex-column'>
                            <Link to='/#about'>{t('header.about')}</Link>
                            <Link to='/#advantages'>{t('header.advantages')}</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BurgerMenu