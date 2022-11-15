
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import defaultTheme from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App/>
    </ThemeProvider>
  );
}

export default App;
