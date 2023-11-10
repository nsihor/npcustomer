import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import RegistrationStepsWrap from "./RegistrationStepsWrap/RegistrationStepsWrap";
import {useEffect, useState} from "react";

const RegistrationSteps = () => {
    const [userData, setUserData] = useState({})
    const [openStep, setOpenStep] = useState(1)

    const submitUserData = (data) => {
        setUserData(prevState => {
            return {...prevState, ...data}
        })
        if (openStep < 4) {
            setOpenStep(prevState => prevState + 1)
        }
    }

    useEffect(() => {
        console.log(userData)
    }, [userData]);

    return (
        <RegistrationStepsWrap>
            {openStep === 1 && <Step1 submitFunc={submitUserData}/>}
            {openStep === 2 && <Step2 submitFunc={submitUserData}/>}
            {openStep === 3 && <Step1 submitFunc={submitUserData}/>}
            {openStep === 4 && <Step1 submitFunc={submitUserData}/>}
        </RegistrationStepsWrap>
    );
};

export default RegistrationSteps;