import {Breadcrumb} from 'react-bootstrap';
import clsx from 'clsx';
import css from './Breadcrumbs.module.scss';

const Breadcrumbs = ({currentPageName}) => {
  return (
    <div className='container'>
      <Breadcrumb className={clsx(css.breadcrumbs, 'd-flex align-items-center')}>
        <Breadcrumb.Item href='/'>Головна</Breadcrumb.Item>
        <Breadcrumb.Item active>{currentPageName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default Breadcrumbs;