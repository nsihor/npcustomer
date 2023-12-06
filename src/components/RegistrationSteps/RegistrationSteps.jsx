import React, {useEffect} from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import RegistrationStepsWrap from "./RegistrationStepsWrap/RegistrationStepsWrap";
import useLocalStorage from "../../hooks/useLocalStorage";

const RegistrationSteps = () => {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [openStep, setOpenStep] = useLocalStorage('stepNumber', 1);

  const submitUserData = (data) => {
    setUserData((prevData) => ({...prevData, ...data}));
    if (openStep < 4) {
      setOpenStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setUserData((prevData) => ({...prevData}));
    setOpenStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 submitFunc={submitUserData} userData={userData}/>;
      case 2:
        return <Step2 submitFunc={submitUserData} userData={userData} prevStep={prevStep}/>;
      case 3:
        return <Step3 submitFunc={submitUserData} userData={userData} prevStep={prevStep}/>;
      case 4:
        return <Step4 submitFunc={submitUserData} userData={userData} prevStep={prevStep}/>;
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
