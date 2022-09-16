import React, { createContext } from 'react';

const AppContext = createContext<{}>({});

type props = {
    children: React.ReactNode
}

const AppProvider: React.FC<props> = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };