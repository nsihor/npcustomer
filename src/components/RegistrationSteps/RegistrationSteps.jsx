import React, { useEffect, useState } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import RegistrationStepsWrap from "./RegistrationStepsWrap/RegistrationStepsWrap";

const RegistrationSteps = () => {
    const [userData, setUserData] = useState({});
    const [openStep, setOpenStep] = useState(1);

    const submitUserData = (data) => {
        setUserData((prevData) => ({ ...prevData, ...data }));
        if (openStep < 5) {
            setOpenStep((prevStep) => prevStep + 1);
        }
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const renderStep = (step) => {
        switch (step) {
            case 1:
                return <Step1 submitFunc={submitUserData} />;
            case 2:
                return <Step2 submitFunc={submitUserData} />;
            case 3:
                return <Step3 submitFunc={submitUserData} />;
            case 4:
                return <Step4 submitFunc={submitUserData} />;
            default:
                return null;
        }
    };

    return (
        <RegistrationStepsWrap openStep={openStep}>
            {renderStep(openStep)}
        </RegistrationStepsWrap>
    );
};

export default RegistrationSteps;
