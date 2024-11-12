import './style/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';



function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
