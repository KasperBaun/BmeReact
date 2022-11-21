import { TypographyOptions } from "@mui/material/styles/createTypography"

const RallyTypography: TypographyOptions = {

    fontFamily: fontFamily(),
    fontSize: 12,
    h1: {
        fontFamily: fontFamily(),
        fontSize: 40,
        fontWeight: 100
    },
    h2: {
        fontFamily: fontFamily(),
        fontSize: 32,
        fontWeight: 200
    },
    h3: {
        fontFamily: fontFamily(),
        fontSize: 24,
        fontWeight: 400
    },
    h4: {
        fontFamily: fontFamily(),
        fontSize: 20,
        fontWeight: 500

    },
    h5: {
        fontFamily: fontFamily(),
        fontSize: 16,
        fontWeight: 700
    },
    h6: {
        fontFamily: fontFamily(),
        fontSize: 14,
        fontWeight: 400
    },
    body1: {
        fontFamily: fontFamily(),
        fontSize: 14,
        fontWeight: 400
    },
    body2: {
        fontFamily: fontFamily(),
        fontSize: 12,
        fontWeigt: 400
    }
};


function fontFamily(): string {
    return ["RobotoCondensed", "Roboto", "Helvetica", "Arial"].join(",")
}
export default RallyTypography;
