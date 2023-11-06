import nav from 'react-bootstrap/nav';
const NewOpportunities = () => {
 return (
     <>
     <div className="container position-relative" id="about">
         <div className="stat-sm">
             <div className="d-flex align-items-start align-items-md-center">
                 <div className="d-flex align-items-center flex-column flex-md-row">
                     <span className="stat-sm-digit">40+</span>
                     <span className="stat-sm-text">мільйонів потенційних користувачів</span>
                 </div>
                 <svg><use href="#icon-diagonalLines"/></svg>
                 <img src="https://merchant.np.shopping/static/images/lines.png" className="mx-4 mt-4 mt-md-0"/>
                     <div className="d-flex align-items-center flex-column flex-md-row">
                         <span className="stat-sm-digit">11+</span>
                         <span className="stat-sm-text">мільйонів активних покупців через Інтернет</span>
                     </div>
             </div>
         </div>
     </div>

    <div className="stat">
        <div className="container position-relative">
            <div className="py-5 my-5">
                <div className="row">
                    <div className="col text-center">
                        <img src="https://merchant.np.shopping/static/images/globe.png" className="mb-4 mt-5"/>
                            <h3 className="mb-3">Відкрийте нові можливості для свого бізнесу в Україні</h3>
                            <p className="fs-6 mb-5">
                                Ми забезпечуємо доступ до мільйонів клієнтів, які хочуть купувати польські товари </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className="stat-digit">5+</div>
                            <div className="stat-desc fs-6">
                                мільярдів доларів становить обсяг електронної комерції
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="stat-item border-end mb-4">
                            <div className="stat-digit">37+</div>
                            <div className="stat-desc fs-6">
                                мільйонів активних банківських карток для онлайн-платежів
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4">
                        <div className="stat-item">
                            <div className="stat-digit">150 €</div>
                            <div className="stat-desc fs-6">
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