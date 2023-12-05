import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import clsx from "clsx";
import sprite from "../../../images/sprite.svg";
import css from "../Profile.module.scss";
import React from "react";
import toast from "react-hot-toast";

const BaseLinker = ({baselinkerToken}) => {
    const handleCopyText = () => {
        navigator.clipboard.writeText(baselinkerToken);
        toast('Код скопійовано!');
    };

    return(
        <AccordionWrapper id='collapseThree' title={{id: 'headingThree', text: 'Підключення BaseLinker'}}>
            <div className={clsx('form-control px-3 py-3 d-flex justify-content-between')}>
                <span>{baselinkerToken}</span>
                <svg width='24' height='24' onClick={handleCopyText} className='cursor-pointer'>
                    <use href={`${sprite}#icon-copy`}></use>
                </svg>
            </div>
            <div className={clsx(css.baselinkerTokenText, 'mt-1')}>
                Скопіюй цей ключ та встав його в кабінеті BaseLinker.
            </div>
        </AccordionWrapper>
    )
}

export default BaseLinker;