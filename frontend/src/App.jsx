import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';

const App = () => {
  return (
    <ThemeProvider>
      <HeroPage />
      
    </ThemeProvider>
  );
};

export default App;
