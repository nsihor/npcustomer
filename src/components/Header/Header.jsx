import nav from 'react-bootstrap/nav';
import sprite from "../../images/sprite.svg";
const Header = () => {
 return (
     <header className="border-bottom py-4 mb-4 fixed-top">
         <div className="container">
             <div className="row">
                 <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                     <svg width="155" height="29"><use className="logo" href={sprite + "#npLogo"}/></svg>
                 </div>
                 <div className="col-12 col-md-6 text-end">
                     <nav className="menu d-flex justify-content-between fs-6">
                         <a href="#about">O nas</a>
                         <a href="#advantages">Nasze atuty</a>
                         <a href="#partner">Zostań partnerem</a>
                         <div className="lang">
                             <span className="active">pl</span><span className="separator">|</span><a href="/uk/">uk</a>
                         </div>
                     </nav>
                 </div>
             </div>
         </div>
     </header>
 );
};

export default Header;