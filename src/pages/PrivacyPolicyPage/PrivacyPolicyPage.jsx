import PrivacyPolicyUK from '../../components/PrivacyPolicy/PrivacyPolicyUK';
import PrivacyPolicyPL from '../../components/PrivacyPolicy/PrivacyPolicyPL';
import i18n from 'i18next';

const PrivacyPolicyPage = () => {
  return (
      <>
          {i18n.language === "uk" && <PrivacyPolicyUK/>}
          {i18n.language === "pl" && <PrivacyPolicyPL/>}
      </>
  );
};

export default PrivacyPolicyPage;
