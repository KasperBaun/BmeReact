
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import RallyGreenTheme from './Theme/Theme';
import { Navigation } from './Components/Navigation/Navigation';
import { NavigationModel } from './Models/NavigationModel';



function App() {

  const navElements: NavigationModel[] = [];
  navElements.push({ Href: "home", IconName: "LeftChevron", Id: 1, Key: "nav1" });

  return (
    <ThemeProvider theme={RallyGreenTheme}>
      <CssBaseline />
      <Navigation elements={navElements} drawerWidth={240} />
    </ThemeProvider>
  );
}

export default App;
