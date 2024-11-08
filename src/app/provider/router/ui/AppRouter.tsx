import React from 'react'
import { Suspense, useContext, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routerConfig).map(({element,path})=>(
            <Route
                key={path}
                path={path}
                element={element}
            />
          ))}
        </Routes>
    </Suspense>
  )
}

export default AppRouter