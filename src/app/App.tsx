import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import './style/index.scss'
import { Theme, ThemeContext } from './provider/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';



function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
      <button onClick={toggleTheme}>Сменить</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>Главная</Link>
      <AppRouter/>
    </div>
  );
}

export default App;
