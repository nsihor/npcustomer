import nav from 'react-bootstrap/nav';
const FirstBlock = () => {
 return (
     <div className="container my-5 py-5 order" id="order">
         <div className="row align-items-center">
             <div className="col-12 col-md-7">
                 <h1 className="mb-3">Shopping - маркетплейс польських товарів в Україні</h1>
                 <p className="fs-6">
                     Ставайте продавцем в найбільшому українському додатку, а логістику, технічну підтримку і знання
                     українського e-commerce ми беремо на себе. </p>
                 <button className="btn btn-success text-nowrap" id="sendOrder">Залишити заявку</button>
             </div>
             <div className="col-12 col-md-5">
                 <img src="../../images/MainPage/macbook.png" alt="Macbook"/>
             </div>
         </div>
     </div>
 );
};

export default FirstBlock;