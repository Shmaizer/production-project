import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage} from 'pages/MainPage';
import { Suspense, useContext, useState } from 'react';
import './style/index.scss'
import { Theme, ThemeContext } from './provider/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './provider/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';


function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
    <button onClick={toggleTheme}>Сменить</button>
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
        </Suspense>
    
    </div>
  );
}

export default App;
