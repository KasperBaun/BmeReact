
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import RallyGreenTheme from './Theme/Theme';
import { NavMenu } from './Components/Navigation/Navigation';
import { Navigation } from './Models/Navigation';



function App() {

  const navElements: Navigation[] = [];
  navElements.push({ Href: "home", IconName: "LeftChevron", Id: 1, Key: "nav1" });

  return (
    <ThemeProvider theme={RallyGreenTheme}>
      <CssBaseline />
      <NavMenu elements={navElements} />
    </ThemeProvider>
  );
}

export default App;
