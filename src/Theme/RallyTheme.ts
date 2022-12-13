import { createTheme, ThemeOptions } from '@mui/material/styles';
import { RallyDarkPalette } from './Palette';
import RallyTypography from './Typography';

const RallyThemeSettings: ThemeOptions = {
    palette: RallyDarkPalette,
    typography: RallyTypography
};

const RallyGreenTheme = createTheme(RallyThemeSettings);
export default RallyGreenTheme;