import { createContext, useReducer } from 'react';
import logoutReducer from './logoutReducer';

const initialState = {
    isMount: false,
};

export const LogoutContext = createContext(initialState);

const LogoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(logoutReducer, initialState);

    return (
        <LogoutContext.Provider
            value={{
                isMount: state.isMount,
                dispatch,
            }}
        >
            {children}
        </LogoutContext.Provider>
    );
};

export default LogoutContextProvider;
