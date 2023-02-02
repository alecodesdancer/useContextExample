import { createContext } from 'react';

export const defaultUser = {auth: false, user: {}};
export const UserContext = createContext(defaultUser);
