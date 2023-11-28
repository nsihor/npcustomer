import PrivacyPolicyUK from '../../components/PrivacyPolicy/PrivacyPolicyUK';
import PrivacyPolicyPL from '../../components/PrivacyPolicy/PrivacyPolicyPL';
import i18n from 'i18next';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import {useTranslation} from 'react-i18next';

const PrivacyPolicyPage = () => {
    const {t} = useTranslation();

    return (
      <>
          <Breadcrumbs currentPageName={t("PrivacyPolicy")}/>
          {i18n.language === "uk" && <PrivacyPolicyUK/>}
          {i18n.language === "pl" && <PrivacyPolicyPL/>}
      </>
  );
};

export default PrivacyPolicyPage;
