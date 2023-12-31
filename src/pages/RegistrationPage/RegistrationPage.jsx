import RegistrationSteps from "../../components/RegistrationSteps/RegistrationSteps";
import {useEffect, useState} from "react";

const RegistrationPage = ({updateCompany}) => {
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    firstRender && updateCompany()
    setFirstRender(false)
  }, [firstRender, updateCompany])

  return (
    <>
      <RegistrationSteps/>
    </>
  );
};

export default RegistrationPage;
