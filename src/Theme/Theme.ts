import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from "@mui/material";

// mui theme settings
const themeSettings: ThemeOptions = {

    palette: {

        // palette values for dark mode
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#0052cc',
        },
        background: {
            default: '#0052cc',
        }
    },

    typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 14,
        },
    },
};

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

const defaultTheme = createTheme(themeSettings);
export default defaultTheme;