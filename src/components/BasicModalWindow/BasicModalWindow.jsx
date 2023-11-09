import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import css from './BasicModalWindow.module.scss';

const BasicModalWindow = ({ children, onClose, showCloseBtn = true }) => {
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

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          type='button'
          className={clsx(css.modalCloseBtn, {
            [css.modalCloseBtnHidden]: !showCloseBtn,
          })}
          onClick={onClose}
        >
          <svg className={css.modalCloseIcon}>
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  showCloseBtn: PropTypes.bool,
};
