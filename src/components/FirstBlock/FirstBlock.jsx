
import React from "react";
import macbook from "../../images/MainPage/macbook.png";
import Btn from "../Btn/Btn";

const FirstBlock = () => {
 return (
     <div className="container my-5 py-5 order" id="order">
         <div className="row align-items-center">
             <div className="col-12 col-md-7">
                 <h1 className="mb-3" style={{"font-size":"52px"}}>Shopping - маркетплейс польських товарів в Україні</h1>
                 <p className="fs-5">
                     Ставайте продавцем в найбільшому українському додатку, а логістику, технічну підтримку і знання
                     українського e-commerce ми беремо на себе. </p>
                 <Btn type="success" text="Стати партнером"/>
             </div>
             <div className="col-12 col-md-5">
                 <img src={macbook} alt="Macbook"/>
             </div>
         </div>
     </div>
 );
};

export default FirstBlock;