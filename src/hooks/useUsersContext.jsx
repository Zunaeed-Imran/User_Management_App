import { useContext } from 'react';

import { UserContext } from '../context/UsersContext';

export const useUserContext = () => {
  return useContext(UserContext);
};
