import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import BasicModalWindow from "../../components/modals/BasicModalWindow/BasicModalWindow";
import LoginModal from "../../components/modals/LoginModal/LoginModal";
import Statistic from "../../components/Statistic/Statistic";

const MainPage = ({isLoginModalOpen, closeModal}) => {
    return (
        <>
            <FirstBlock/>
            <Statistic/>
            <NewOpportunities/>
            <Delivery/>
            <Shopping/>
            {isLoginModalOpen && (
                <BasicModalWindow onClose={closeModal}>
                    <LoginModal/>
                </BasicModalWindow>
            )}
        </>
    );
}

export default MainPage;
