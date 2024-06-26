import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import Statistic from "../../components/Statistic/Statistic";
import {useEffect, useState} from "react";

const MainPage = ({updateCompany}) => {
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    firstRender && updateCompany()
    setFirstRender(false)
  }, [firstRender, updateCompany]);
  
    return (
        <>
            <FirstBlock/>
            <Statistic/>
            <NewOpportunities/>
            <Delivery/>
            <Shopping/>
        </>
    );
}

export default MainPage;
