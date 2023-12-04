import React from 'react';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import sprite from '../../../images/sprite.svg';
import css from './BasicModalWindow.module.scss';
import ReactDOM from 'react-dom'
import {useNavigate} from "react-router-dom";

const BasicModalWindow = ({children, onClose, navigateTo, showCloseBtn = true}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                onClose();
                navigateTo && navigate(navigateTo, {replace: true});
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate, navigateTo, onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
            navigateTo && navigate(navigateTo, {replace: true})
        }
    };
    return ReactDOM.createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            <div className={css.modal}>
                {showCloseBtn &&
                    <button
                        type='button'
                        className={css.modalCloseBtn}
                        onClick={() => {
                            onClose();
                            navigateTo && navigate(navigateTo, {replace: true});
                    }}>
                        <svg className={css.modalCloseIcon}>
                            <use href={sprite + '#icon-close'}></use>
                        </svg>
                    </button>}
                {children}
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    showCloseBtn: PropTypes.bool,
};
