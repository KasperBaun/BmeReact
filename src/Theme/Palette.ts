import { Palette, PaletteColor } from "@mui/material";
import { PaletteAugmentColorOptions } from "@mui/material/styles/createPalette";

export const RallyDarkPalette: Palette = {
    mode: "dark",
    contrastThreshold: 4.5,
    tonalOffset: 0,

    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    secondary: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    background: {
        default: '#344955',
        paper: "#344955"
    },
    
    error: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    warning: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    info: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    success: {
        main: '#045D56',
        light: "#045D56",
        dark: "#045D56",
        contrastText: "#fff"
    },
    grey: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        "A100": "#f3f3f3",
        "A200": "#eeeee",
        "A400": "#bdbdbd",
        "A700": "#616161"
    },
    text: {
        primary: "#000000",
        secondary: "#ffffff",
        disabled: "#045D56"
    },
    divider: "",
    action: {
        active: "#fff",
        hover: "rgba(255,255,255,0.08",
        hoverOpacity: 0.08,
        selected: "rgba(255,255,255,0.16",
        selectedOpacity: 0.16,
        disabled: "rgba(255,255,255, 0.3",
        disabledBackground: "rgba(255, 255, 255, 0.12",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24        
    },
    getContrastText: function (background: string): string {
        throw new Error("Function not implemented.");
    },
    augmentColor: function (options: PaletteAugmentColorOptions): PaletteColor {
        throw new Error("Function not implemented.");
    }
}

// export const RallyLightPalette: Palette = {
//     mode: "light",
    
//     primary: {
//         main : '#045D56',
//         "500" : '#1EB980',
//         "700": '#045D56'
//     },
//     secondary: {
//         main: '#0052cc',
//     },
//     background: {
//         default: '#344955',
//     },
// }