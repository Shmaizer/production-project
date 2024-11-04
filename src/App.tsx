import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import './style/index.scss'
import { Theme, ThemeContext } from './theme/ThemeContext';
import ThemeProvider from './theme/ThemeProvider'; 
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
    <button onClick={toggleTheme}>Сменить</button>
    
      <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync/>}/>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
        </Routes>
        </Suspense>
      </Layout>
    
    </div>
  );
}

export default App;
