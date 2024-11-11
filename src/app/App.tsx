import './style/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';



function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
      
    </div>
  );
}

export default App;
