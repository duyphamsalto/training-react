import { useNavigate } from 'react-router-dom';

export default function useRedirectTo(to = '/login') {
  const navigate = useNavigate();
  return navigate(to);
}
