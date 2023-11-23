import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import Statistic from "../../components/Statistic/Statistic";

const MainPage = () => {
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
