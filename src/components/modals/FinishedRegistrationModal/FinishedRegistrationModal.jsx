import css from "../Modals.module.scss";
import img from "../../../images/Modal/sandy-time.png";
import clsx from "clsx";
import sprite from "../../../images/sprite.svg"
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

const FinishedRegistrationModal = ({code = '5daf47f72ae20f7894155a1b66f85cb0'}) => {
    const handleCopyText = () => {
        navigator.clipboard.writeText(code);
        toast('Код скопійовано!')
    };

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className={clsx(css.img_sandy_time, 'mb-3 mb-sm-4')} src={img} alt='sandy-time'/>
                <h2 className={clsx(css.title, 'mb-3')}>Вітаємо</h2>
                <p className={clsx(css.text, 'mb-3 mb-sm-4')}>Для повного функціонування сервісу додай інформацію про оплату та
                    доставку
                    в особистому кабінеті</p>
                <div className={clsx(css.input, 'rounded py-3 px-2 p mb-1 position-relative w-100')}>
                    <p className={css.copy_input_p}>{code}</p>
                    <svg className='svg' onClick={handleCopyText}>
                        <use href={sprite + '#icon-copy'}></use>
                    </svg>
                </div>
                <p className={clsx(css.additionalText, 'mb-4')}>Ми згенерувати тобі токен. Скопіюй цей ключ та встав
                    його
                    в кабінеті BaseLinker.</p>
                <Link to={'/profile'}
                      className={clsx(css.link, 'd-flex justify-content-center align-items-center justify-content-center text-decoration-none rounded py-3 w-100')}>
                    В кабінет компанії
                </Link>
            </div>
        </div>
    )
}

export default FinishedRegistrationModal;