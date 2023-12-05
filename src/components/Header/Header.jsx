import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import css from '../Header/Headeer.module.scss';
import Lang from '../Lang/Lang';
import Authorize from './Authorize/Authorize';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {useTranslation} from "react-i18next";

const Header = ({openLoginModal, companyName}) => {
    const [isMobile, setIsMobile] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsMenuOpen(false)
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {t} = useTranslation()

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

    return (
        <header className={clsx(css.header, 'fixed-top')}>
            <div className='container'>
                <nav className='navbar navbar-expand-md p-0'>
                    <div className={clsx(css.navContainer, 'container-fluid p-0')}>
                        {isMobile &&
                            <button
                                onClick={toggleMenu}
                                className={clsx(css.burgerIco, 'navbar-toggler border-0 p-0 pe-3')}
                                type='button'
                                aria-controls='navbarTopMenu'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </button>}
                        <div className='text-md-start mb-md-0'>
                            <Link to='/'>
                                <svg className={clsx(css.logo)}>
                                    <use className='logo' href={sprite + '#npLogo'}/>
                                </svg>
                            </Link>
                        </div>
                        <div className={clsx(css.authorizeWrap, "d-flex d-md-none")}>
                            <Authorize openModalFunc={openLoginModal} companyName={companyName} isMobile={isMobile}/>
                        </div>

                        <div className='justify-content-end' id='navbarTopMenu'>
                            <div className='navbar-nav w-100 d-flex justify-content-between fs-6 gap-5 d-none d-md-flex'>
                                <div className='d-flex gap-5 pe-lg-5 fw-semibold'>
                                    <Link
                                        to="/#about">
                                        {t("header.about")}
                                    </Link>
                                    <Link
                                        to="/#advantages">
                                        {t("header.advantages")}
                                    </Link>
                                </div>
                                <div className='d-flex gap-5'>
                                    {!isMobile && <Lang/>}
                                    <Authorize openModalFunc={openLoginModal} companyName={companyName}/>
                                </div>
                            </div>
                        </div>
                        {isMenuOpen &&
                            <BurgerMenu onClose={toggleMenu}/>}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;