import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({company, children }) => !company ? <Navigate to={'/'} /> : <>{children}</>;
