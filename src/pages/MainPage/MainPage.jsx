import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import BasicModalWindow from "../../components/BasicModalWindow/BasicModalWindow";
import {useState} from "react";
import LoginModal from "../../components/LoginModal/LoginModal";

const MainPage = ({isLoginModalOpen, closeModal}) => {
    return (
        <>
            <FirstBlock/>
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
