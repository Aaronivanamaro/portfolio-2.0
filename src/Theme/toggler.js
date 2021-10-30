import React, { useState, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = ({theme,  toggleTheme }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem('theme') === 'dark') {
            setIsDarkMode(true)            
        }
    }, [])

    return (
        <div onClick={toggleTheme} >
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={75}
            />
        </div>
    );
};

export default Toggle;