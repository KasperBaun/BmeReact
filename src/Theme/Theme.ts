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

// // context for color mode
// export const ColorModeContext = createContext({
//     toggleColorMode: () => { },
// });

// export const useMode = () => {
//     const [mode, setMode] = useState("dark");

//     const colorMode = useMemo(
//         () => ({
//             toggleColorMode: () =>
//                 setMode((prev) => (prev === "light" ? "dark" : "light")),
//         }),
//         []
//     );

const RallyGreenTheme = createTheme(themeSettings);
export default RallyGreenTheme;