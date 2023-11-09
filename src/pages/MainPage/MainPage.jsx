import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";

const MainPage = () => {
    return (
        <>
            <FirstBlock/>
            <NewOpportunities/>
            <Delivery/>
            <Shopping/>
        </>
    );
}

export default MainPage;
