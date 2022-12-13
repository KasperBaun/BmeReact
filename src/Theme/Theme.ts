import { createTheme, ThemeOptions } from '@mui/material/styles';
import { RallyDarkPalette } from './Palette';
import RallyTypography from './Typography';

const ThemeSettings: ThemeOptions = {
    palette: RallyDarkPalette,
    typography: RallyTypography
};

const Theme = createTheme(ThemeSettings);
export default Theme;

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
