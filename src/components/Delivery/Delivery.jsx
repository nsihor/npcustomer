import css from "./Delivery.module.scss";
import {useState} from "react";
import PostCountryList from "../PostCountryList/PostCountryList";

const Delivery = () => {
  const [sliderWidth, setSliderWidth] = useState({slide1:'wide', slide2:'tight'});
  const [nowOpen, setNowOpen] = useState('slide1')

  const handleSlider1Hover = () => {
    setSliderWidth({slide1:'wide', slide2:'tight'});
    setNowOpen('slide1')
  };

  const handleSlider2Hover = () => {
    setSliderWidth({slide2:'wide', slide1:'tight'});
    setNowOpen('slide2')
  };


  return (
    <div className={css.slider}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="mb-4">Nova Post - доставка майбутнього</h2>
          </div>
          <div className="col-12 col-lg-8 d-flex">
            <div className="slider-block d-flex flex-column flex-md-row">
              <PostCountryList openFunc={handleSlider1Hover} nowOpen={nowOpen} width={sliderWidth.slide1}  sliderName='slide1' title='Nova Post в Україні'/>
              <PostCountryList openFunc={handleSlider2Hover} nowOpen={nowOpen} width={sliderWidth.slide2} sliderName='slide2' title='Nova Post в Польщі'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
