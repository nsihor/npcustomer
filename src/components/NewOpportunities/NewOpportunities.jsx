import css from "./NewOpportunities.module.scss";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";

const NewOpportunities = () => {
 return (
     <>
     <div className="container position-relative" id="about">
         <div className={css.statSm}>
             <div className="d-flex align-items-start align-items-md-center">
                 <div className="d-flex align-items-center flex-column flex-md-row">
                     <span className={css.statSmDigit}>40+</span>
                     <span>мільйонів потенційних користувачів</span>
                 </div>
                 <div className="mx-4 mt-4 mt-md-0">
                     <svg width="17" height="40"><use href={sprite + "#icon-diagonalLines"}/></svg>
                 </div>
                 <div className="d-flex align-items-center flex-column flex-md-row">
                     <span className={css.statSmDigit}>11+</span>
                     <span>мільйонів активних покупців через Інтернет</span>
                 </div>
             </div>
         </div>
     </div>

    <div className={css.stat}>
        <div className="container position-relative">
            <div className="py-5 my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className={clsx(css.wrapGeo, "mb-4 mt-5")}>
                            <svg width="36" height="36"><use href={sprite + "#icon-geo"}/></svg>
                        </div>
                        <h3 className="mb-3">Відкрийте нові можливості для свого бізнесу в Україні</h3>
                        <p className="fs-6 mb-5">
                            Ми забезпечуємо доступ до мільйонів клієнтів, які хочуть купувати польські товари </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className={clsx(css.statDigit, "")}>5+</div>
                            <div className="fs-6">
                                мільярдів доларів становить обсяг електронної комерції
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className={css.statDigit}>37+</div>
                            <div className="stat fs-6">
                                мільйонів активних банківських карток для онлайн-платежів
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <div className="stat-item">
                            <div className={css.statDigit}>150 €</div>
                            <div className="stat fs-6">
                                для вартості &lt; 150 євро митне оформлення не вимагається
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
 );
};

export default NewOpportunities;