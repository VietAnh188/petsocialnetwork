import { createContext, useReducer } from 'react';
import renderReducer from './renderReducer';

const initialState = {
    isLoading: false,
};

export const RenderContext = createContext(initialState);

const RenderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(renderReducer, initialState);

    return (
        <RenderContext.Provider
            value={{
                isLoading: state.isLoading,
                dispatch,
            }}
        >
            {children}
        </RenderContext.Provider>
    );
};

export default RenderContextProvider;
