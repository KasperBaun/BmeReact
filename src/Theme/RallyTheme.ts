import { createTheme, ThemeOptions } from '@mui/material/styles';
import RallyTypography from './Typography';

const themeSettings: ThemeOptions = {
   
    palette: {

        primary: {
            main: '#045D56',
            "500": '#1EB980',
            "700": '#045D56'
        },
        secondary: {
            main: '#0052cc',
        },
        background: {
            default: '#344955',
        }
       
        // Background = R4A6572
        // Surface = 344955
        
    },

    typography: RallyTypography
}

const RallyGreenTheme = createTheme(themeSettings);
export default RallyGreenTheme;