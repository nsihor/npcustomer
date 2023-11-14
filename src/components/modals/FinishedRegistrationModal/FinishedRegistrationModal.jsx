import css from "../Modals.module.scss";
import img from "../../../images/Modal/sandy-time.png";
import clsx from "clsx";
import sprite from "../../../images/sprite.svg"
import {Link} from "react-router-dom";

const FinishedRegistrationModal = () => {

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <img className='mb-4' src={img} alt='sandy-time'/>
                <h2 className={clsx(css.title, 'mb-3')}>Вітаємо</h2>
                <p className={clsx(css.text, 'mb-4')}>Для повного функціонування сервісу додай інформацію про оплату та доставку
                    в особистому кабінеті</p>
                <div className={clsx(css.input, 'rounded py-3 px-2 mb-1 position-relative')}>
                    5daf47f72ae20f7894155a1b66f85cb0
                    <svg className='svg'><use href={sprite + '#icon-copy'}></use></svg>
                </div>
                <p className={clsx(css.additionalText, 'mb-4')}>Ми згенерувати тобі токен. Скопіюй цей ключ та встав його
                    в кабінеті BaseLinker.</p>
                <Link to={'/profile'} className={clsx(css.link, 'btn btn-light text-nowrap border-0 py-3 px-4 w-100 text-white')}>
                    В кабінет компанії
                </Link>
            </div>
        </div>
    )
}

export default FinishedRegistrationModal;