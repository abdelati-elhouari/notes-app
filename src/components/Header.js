import React from 'react';
import './Header.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


function Header(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeClass = theme === 'dark' ? 'light' : 'dark';
    return (
        
        <header id="header" className="header">
           <div>
            <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme}/>
            <label for="checkbox" className={`checkbox-label ${themeClass}`}>
                <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B" }} /> 
                <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B" }} />
                <span className={`ball ${themeClass}`}></span>
            </label>
            </div>
        </header>
    );
}




export default Header;