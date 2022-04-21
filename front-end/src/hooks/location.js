import { useLocation, Navigate } from 'react-router-dom';

export default function useRedirect() {
  let location = useLocation();

  return <Navigate to="/login" state={{ from: location }} replace />;
}
