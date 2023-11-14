import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import sprite from '../../../images/sprite.svg';
import css from './BasicModalWindow.module.scss';
import ReactDOM from 'react-dom'

const BasicModalWindow = ({ children, onClose}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
      <div className={css.backdrop} onClick={handleBackdropClick}>
        <div className={css.modal}>
          <button
              type='button'
              className={css.modalCloseBtn}
              onClick={onClose}
          >
            <svg className={css.modalCloseIcon}>
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
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
