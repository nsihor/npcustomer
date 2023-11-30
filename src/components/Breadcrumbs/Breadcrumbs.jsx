import {Breadcrumb} from 'react-bootstrap';
import clsx from 'clsx';
import css from './Breadcrumbs.module.scss';
import {useTranslation} from "react-i18next"
    ;
const Breadcrumbs = ({currentPageName}) => {
    const {t} = useTranslation();

    return (
    <div className='container'>
      <Breadcrumb className={clsx(css.breadcrumbs, 'd-flex align-items-center')}>
        <Breadcrumb.Item href='/my/'>{t("Breadcrumbs")}</Breadcrumb.Item>
        <Breadcrumb.Item active>{currentPageName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default Breadcrumbs;