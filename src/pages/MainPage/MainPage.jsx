import Delivery from "../../components/Delivery/Delivery";
import Shopping from "../../components/Shopping/Shopping";
import FirstBlock from "../../components/FirstBlock/FirstBlock";
import NewOpportunities from "../../components/NewOpportunities/NewOpportunities";
import BasicModalWindow from "../../components/BasicModalWindow/BasicModalWindow";
import {useState} from "react";
import LoginModal from "../../components/LoginModal/LoginModal";

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <FirstBlock/>
            <NewOpportunities/>
            <Delivery/>
            <Shopping/>
            {isModalOpen && (
                <BasicModalWindow onClose={handleClose}>
                    <LoginModal/>
                </BasicModalWindow>
            )}
        </>
    );
}

export default MainPage;
