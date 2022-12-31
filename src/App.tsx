
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import RallyGreenTheme from './Theme/RallyTheme';
import { NavigationMenu } from './Components/Navigation/NavigationMenu';
import Loading from './Components/Loading/Loading';
import Website from './Pages/Website/Website';
import AdminSite from './Pages/AdminSite/AdminSite';


function App() {

  return (
    <ThemeProvider theme={RallyGreenTheme}>
      <CssBaseline />
      <Website/>
      <AdminSite/>
    </ThemeProvider>
  );
}

export default App;
