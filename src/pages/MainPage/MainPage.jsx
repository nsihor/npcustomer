import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import BasicModalWindow from "../../components/modals/BasicModalWindow/BasicModalWindow";
import {useState} from "react";
import LoginModal from "../../components/modals/LoginModal/LoginModal";
import FinishedRegistrationModal from "../../components/modals/FinishedRegistrationModal/FinishedRegistrationModal";

const MainPage = ({isLoginModalOpen, closeModal}) => {
    return (
        <>
            <FirstBlock/>
            <NewOpportunities/>
            <Delivery/>
            <Shopping/>
            {isLoginModalOpen && (
                <BasicModalWindow onClose={closeModal}>
                    <FinishedRegistrationModal/>
                    {/*<LoginModal/>*/}
                </BasicModalWindow>
            )}
        </>
    );
}

export default MainPage;
