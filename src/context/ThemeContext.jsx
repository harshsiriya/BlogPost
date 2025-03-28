'use client';

import { createContext, useState ,useEffect} from "react";

const getFromLocalStroage = () => {
    if(typeof window !== "undefined"){
        const value =  localStorage.getItem('theme');
        return value || "light";
    }
}


export const ThemeContext = createContext();

export const ThemeContextProvidert = ({children}) => {
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStroage();
    });

    const toggle = () =>{
        setTheme(theme == "light" ? "dark" : "light");
    }
    useEffect(() => {
     localStorage.setItem("theme", theme)
    
     
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{theme , toggle}}>{children}</ThemeContext.Provider>
    )
}