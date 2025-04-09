import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  route: string;
}

const PageRedirect: FC<Props> = ({ route }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(route);
  }, []);

  return null;
};

export default PageRedirect;
