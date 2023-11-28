import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import css from '../Header/Headeer.module.scss';
import Lang from '../Lang/Lang';
import Authorize from './Authorize/Authorize';
import {useTranslation} from 'react-i18next';

const Header = ({openLoginModal, companyName}) => {
    const {t} = useTranslation();

    return (
        <header className={clsx(css.header, 'py-0 py-md-4 fixed-top')}>
            <div className='container'>
                <nav className='navbar navbar-expand-md'>
                    <div className={clsx('container-fluid justify-content-start p-0 gap-4')}>
                        <button className={clsx(css.burgerIco, 'navbar-toggler border-0 px-0')} type='button' data-bs-toggle='collapse'
                                data-bs-target='#navbarTopMenu' aria-controls='navbarTopMenu'
                                aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='text-md-start mb-md-0'>
                            <a href='/'>
                                <svg width='155' height='29'>
                                    <use className='logo' href={sprite + '#npLogo'} />
                                </svg>
                            </a>
                        </div>
                        <div className={clsx(css.authorizeWrap,"d-flex d-md-none")}>
                            <Authorize openModalFunc={openLoginModal} companyName={companyName} />
                        </div>

                        <div className='collapse navbar-collapse justify-content-end' id='navbarTopMenu'>
                            <div className={clsx(css.burgerMob, 'navbar-nav d-flex justify-content-between fs-6 gap-3 gap-md-5 d-flex d-md-none')}>
                                <div className="d-flex justify-content-end"><Lang /></div>
                                <a href='/#about' className="border-bottom">{t('header.about')}</a>
                                <a href='/#advantages' className="border-bottom">{t('header.advantages')}</a>
                            </div>
                            <div className='navbar-nav d-flex justify-content-between fs-6 gap-3 gap-md-5 d-none d-md-flex'>
                                <a href='/#about'>{t('header.about')}</a>
                                <a href='/#advantages'>{t('header.advantages')}</a>
                                <Lang />
                                <Authorize openModalFunc={openLoginModal} companyName={companyName} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;