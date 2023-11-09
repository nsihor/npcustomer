import css from "./Delivery.module.scss";
import {useState} from "react";
import PostCountryList from "../PostCountryList/PostCountryList";

const Delivery = () => {
  const [sliderWidth, setSliderWidth] = useState({ua:'588px', pl:'155px'});
  const [nowOpen, setNowOpen] = useState('ua')

  const handleSliderUaHover = () => {
    setSliderWidth({ua:'588px', pl:'155px'});
    setNowOpen('ua')
  };

  const handleSliderPlHover = () => {
    setSliderWidth({pl:'588px', ua:'155px'});
    setNowOpen('pl')
  };


  return (
    <div className={css.slider}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="mb-4">Nova Post - доставка майбутнього</h2>
          </div>
          <div className="col-12 col-lg-8 d-flex justify-content-end">
            <div className="slider-block d-flex flex-column flex-md-row">
              <PostCountryList openFunc={handleSliderUaHover} nowOpen={nowOpen} width={sliderWidth.ua}  sliderName='ua' title='Nova Post в Україні'/>
              <PostCountryList openFunc={handleSliderPlHover} nowOpen={nowOpen} width={sliderWidth.pl} sliderName='pl' title='Nova Post в Польщі'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
