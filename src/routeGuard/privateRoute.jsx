import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({company, component: Component }) => !company ? <Navigate to={'/'} /> : <Component />;
