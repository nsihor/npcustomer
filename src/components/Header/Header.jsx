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

    const linksT = t('header.links', {returnObjects: true});

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
                                    {linksT.map(link => <Link
                                        key={link.anchor}
                                        to={link.anchor}>
                                        {link.text}
                                    </Link>)}
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

// <header className={clsx(css.header, 'py-0 py-md-3 fixed-top')}>
//     <div className='container'>
//         <nav className='navbar navbar-expand-md'>
//             <div className={clsx('container-fluid justify-content-start p-0 gap-4')}>
//                 <button className={clsx(css.burgerIco, 'navbar-toggler border-0 px-0')} type='button' data-bs-toggle='collapse'
//                         data-bs-target='#navbarTopMenu' aria-controls='navbarTopMenu'
//                         aria-expanded='false' aria-label='Toggle navigation'>
//                     <span className='navbar-toggler-icon'></span>
//                 </button>
//                 <div className='text-md-start mb-md-0'>
//                     <Link to='/'>
//                         <svg width='155' height='29'>
//                             <use className='logo' href={sprite + '#npLogo'} />
//                         </svg>
//                     </Link>
//                 </div>
//                 <div className={clsx(css.authorizeWrap,"d-flex d-md-none")}>
//                     <Authorize openModalFunc={openLoginModal} companyName={companyName} />
//                 </div>
//
//                 <div className='collapse navbar-collapse justify-content-end' id='navbarTopMenu'>
//                     <div className={clsx(css.burgerMob, 'navbar-nav d-flex justify-content-between fs-6 gap-3 gap-md-5 d-flex d-md-none')}>
//                         <div className="d-flex justify-content-end"><Lang /></div>
//                         <Link to='/#about' className="border-bottom">{t('header.about')}</Link>
//                         <Link to='/#advantages' className="border-bottom">{t('header.advantages')}</Link>
//                     </div>
//                     <div className='navbar-nav d-flex justify-content-between fs-6 gap-3 gap-md-5 d-none d-md-flex'>
//                         <Link to='/#about'>{t('header.about')}</Link>
//                         <Link to='/#advantages'>{t('header.advantages')}</Link>
//                         <Lang />
//                         <Authorize openModalFunc={openLoginModal} companyName={companyName} />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     </div>
// </header>

export default Header;