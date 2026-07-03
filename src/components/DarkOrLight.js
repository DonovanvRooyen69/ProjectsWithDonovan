import React, {useState, useEffect} from 'react';
import '../App.css';

const DarkOrLight = () => {
  const [darkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <button className='theme-toggle' onClick={() => setIsDarkMode(prev => !prev)}>
        {darkMode ? '🌙 Dark' :  '☀️ Light'}
    </button>  
    );
}

export default DarkOrLight;