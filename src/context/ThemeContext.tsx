//import React, { useState, createContext,FC } from 'react';

//// ...
//interface IThemeContext {
//    dark: boolean;
//    toggleDark?: () => void;
//}

//const defaultState = {
//    dark: false,
//};

//const ThemeContext = createContext<IThemeContext>({});

//export const ThemeProvider: FC = ({ children }) => {
//    const [dark, setDark] = useState(defaultState.dark);

//    const toggleDark = () => {
//        setDark(!dark);
//    };

//    return (
//        <ThemeContext.Provider value={{ dark, toggleDark }}>
//            {children}
//        </ThemeContext.Provider>
//    );
//};