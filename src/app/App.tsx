import './style/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/NavBar';



function App() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className={classNames('app',{},[theme,'cls2','cls3'])}>
      <button onClick={toggleTheme}>Сменить</button>
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
