import React, { useState, createContext } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';


export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
