import React, {useEffect, useState} from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import RegistrationStepsWrap from "./RegistrationStepsWrap/RegistrationStepsWrap";
import useLocalStorage from "../../hooks/useLocalStorage";

const RegistrationSteps = () => {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [openStep, setOpenStep] = useState( 1);
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 992)
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        return <Step2 submitFunc={submitUserData} userData={userData} prevStep={prevStep} isDesktop={isDesktop}/>;
      case 3:
        return <Step3 submitFunc={submitUserData} userData={userData} prevStep={prevStep}/>;
      case 4:
        return <Step4 submitFunc={submitUserData} userData={userData} prevStep={prevStep}/>;
      default:
        return null;
    }
  };

  return (
    <RegistrationStepsWrap isMobile={isMobile} openStep={openStep}>
      {renderStep(openStep)}
    </RegistrationStepsWrap>
  );
};

export default RegistrationSteps;
