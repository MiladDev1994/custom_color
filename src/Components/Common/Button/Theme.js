
import btnPallet from "./btnPallet";
// import { FillTypes } from "./Types";


export const ThemeHandler = {
    disable: {
        "--color": btnPallet.colorGrayLine,
        "--hover": btnPallet.colorGrayLine,
        "--borderColor": btnPallet.colorGrayLine,
        "--title": btnPallet.colorGrayText,
        "--titleHover": btnPallet.colorGrayText, 
        "--circle": btnPallet.colorGrayText,
        "--circleHover": btnPallet.colorGrayText,
        "--circleIconColor": btnPallet.colorSearchBox,
        "--circleIconHover": btnPallet.colorSearchBox,
        "--icon": btnPallet.colorGrayText,
        "--iconHover": btnPallet.colorGrayText,
    },
    
    outline: {
        primary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorBaseBlue,
            "--borderColor": btnPallet.colorBaseBlue,
            "--title": btnPallet.colorBaseBlue,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorBaseBlue,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorBaseBlue,
            "--icon": btnPallet.colorBaseBlue,
            "--iconHover": btnPallet.colorWhite,
        },
        secondary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorBaseOrange,
            "--borderColor": btnPallet.colorBaseOrange,
            "--title": btnPallet.colorBaseOrange,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorBaseOrange,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorBaseOrange,
            "--icon": btnPallet.colorBaseOrange,
            "--iconHover": btnPallet.colorWhite,
        },
        tertiary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorTertiary,
            "--borderColor": btnPallet.colorTertiary,
            "--title": btnPallet.colorTertiary,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorTertiary,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorTertiary,
            "--icon": btnPallet.colorTertiary,
            "--iconHover": btnPallet.colorWhite,
        },
        success: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorGreen,
            "--borderColor": btnPallet.colorGreen,
            "--title": btnPallet.colorGreen,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorGreen,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorGreen,
            "--icon": btnPallet.colorGreen,
            "--iconHover": btnPallet.colorWhite,
        },
        danger: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorRed,
            "--borderColor": btnPallet.colorRed,
            "--title": btnPallet.colorRed,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorRed,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorRed,
            "--icon": btnPallet.colorRed,
            "--iconHover": btnPallet.colorWhite,
        },
        gray: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorDarkGrayText,
            "--borderColor": btnPallet.colorDarkGrayText,
            "--title": btnPallet.colorDarkGrayText,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorDarkGrayText,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorDarkGrayText,
            "--icon": btnPallet.colorDarkGrayText,
            "--iconHover": btnPallet.colorWhite,
        },
    },

    info: {
        primary: {
            "--color": btnPallet.colorLightBlue,
            "--hover": btnPallet.colorBaseBlue,
            "--borderColor": btnPallet.colorWhite, //
            "--title": btnPallet.colorBaseBlue,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorBaseBlue,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorBaseBlue,
            "--icon": btnPallet.colorBaseBlue,
            "--iconHover": btnPallet.colorWhite,
        },
        secondary: {
            "--color": btnPallet.colorLightOrange,
            "--hover": btnPallet.colorBaseOrange,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorBaseOrange,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorBaseOrange,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorBaseOrange,
            "--icon": btnPallet.colorBaseOrange,
            "--iconHover": btnPallet.colorWhite,
        },
        tertiary: {
            "--color": btnPallet.colorLightTertiary,
            "--hover": btnPallet.colorTertiary,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorTertiary,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorTertiary,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorTertiary,
            "--icon": btnPallet.colorTertiary,
            "--iconHover": btnPallet.colorWhite,
        },
        success: {
            "--color": btnPallet.colorLightGreen,
            "--hover": btnPallet.colorGreen,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorGreen,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorGreen,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorGreen,
            "--icon": btnPallet.colorGreen,
            "--iconHover": btnPallet.colorWhite,
        },
        danger: {
            "--color": btnPallet.colorLightRed,
            "--hover": btnPallet.colorRed,
            "--borderColor": btnPallet.colorWhite, //
            "--title": btnPallet.colorRed,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorRed,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorRed,
            "--icon": btnPallet.colorRed,
            "--iconHover": btnPallet.colorWhite,
        },
        gray: {
            "--color": btnPallet.colorLightGrayText,
            "--hover": btnPallet.colorDarkGrayText,
            "--borderColor": btnPallet.colorWhite, //
            "--title": btnPallet.colorDarkGrayText,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorDarkGrayText,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorDarkGrayText,
            "--icon": btnPallet.colorDarkGrayText,
            "--iconHover": btnPallet.colorWhite,
        },
    },

    light: {
        primary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorBaseBlue,
            "--titleHover": btnPallet.colorBlueHover,
            "--circle": btnPallet.colorBaseBlue,
            "--circleHover": btnPallet.colorBlueHover,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorBaseBlue,
            "--iconHover": btnPallet.colorBlueHover,
        },
        secondary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorBaseOrange,
            "--titleHover": btnPallet.colorOrangeHover,
            "--circle": btnPallet.colorBaseOrange,
            "--circleHover": btnPallet.colorOrangeHover,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorBaseOrange,
            "--iconHover": btnPallet.colorOrangeHover,
        },
        tertiary: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorTertiary,
            "--titleHover": btnPallet.colorDarkTertiary,
            "--circle": btnPallet.colorTertiary,
            "--circleHover": btnPallet.colorDarkTertiary,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorTertiary,
            "--iconHover": btnPallet.colorDarkTertiary,
        },
        success: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorGreen,
            "--titleHover": btnPallet.colorDarkGreen,
            "--circle": btnPallet.colorGreen,
            "--circleHover": btnPallet.colorDarkGreen,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorGreen,
            "--iconHover": btnPallet.colorDarkGreen,
        },
        danger: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorRed,
            "--titleHover": btnPallet.colorDarkRed,
            "--circle": btnPallet.colorRed,
            "--circleHover": btnPallet.colorDarkRed,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorRed,
            "--iconHover": btnPallet.colorDarkRed,
        },
        gray: {
            "--color": btnPallet.colorWhite,
            "--hover": btnPallet.colorWhite,
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorGrayText,
            "--titleHover": btnPallet.colorDarkGrayText,
            "--circle": btnPallet.colorGrayText,
            "--circleHover": btnPallet.colorDarkGrayText,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorGrayText,
            "--iconHover": btnPallet.colorDarkGrayText,
        },
    },

    basic: {
        primary: {
            "--color": btnPallet.colorBaseBlue,
            "--hover": btnPallet.colorBlueHover,
            "--borderColor": btnPallet.colorBlueHover,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite,
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorBaseBlue,
            "--circleIconHover": btnPallet.colorBlueHover,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
        secondary: {
            "--color": btnPallet.colorBaseOrange,
            "--hover": btnPallet.colorOrangeHover,
            "--borderColor": btnPallet.colorOrangeHover,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorBaseOrange,
            "--circleIconHover": btnPallet.colorOrangeHover,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
        tertiary: {
            "--color": btnPallet.colorTertiary,
            "--hover": btnPallet.colorDarkTertiary,
            "--borderColor": btnPallet.colorDarkTertiary,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorTertiary,
            "--circleIconHover": btnPallet.colorDarkTertiary,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
        success: {
            "--color": btnPallet.colorGreen,
            "--hover": btnPallet.colorDarkGreen,
            "--borderColor": btnPallet.colorDarkGreen,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorGreen,
            "--circleIconHover": btnPallet.colorDarkGreen,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
        danger: {
            "--color": btnPallet.colorRed,
            "--hover": btnPallet.colorDarkRed,
            "--borderColor": btnPallet.colorDarkRed,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorRed,
            "--circleIconHover": btnPallet.colorDarkRed,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
        gray: {
            "--color": btnPallet.colorGrayText,
            "--hover": btnPallet.colorDarkGrayText,
            "--borderColor": btnPallet.colorDarkGrayText,
            "--title": btnPallet.colorWhite,
            "--titleHover": btnPallet.colorWhite, 
            "--circle": btnPallet.colorWhite,
            "--circleHover": btnPallet.colorWhite,
            "--circleIconColor": btnPallet.colorGrayText,
            "--circleIconHover": btnPallet.colorDarkGrayText,
            "--icon": btnPallet.colorWhite,
            "--iconHover": btnPallet.colorWhite,
        },
    },

    transparent: {
        primary: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorBaseBlue,
            "--titleHover": btnPallet.colorBlueHover,
            "--circle": btnPallet.colorBaseBlue,
            "--circleHover": btnPallet.colorBlueHover,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorBaseBlue,
            "--iconHover": btnPallet.colorBlueHover,
        },
        secondary: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorBaseOrange,
            "--titleHover": btnPallet.colorOrangeHover,
            "--circle": btnPallet.colorBaseOrange,
            "--circleHover": btnPallet.colorOrangeHover,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorBaseOrange,
            "--iconHover": btnPallet.colorOrangeHover,
        },
        tertiary: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorTertiary,
            "--titleHover": btnPallet.colorDarkTertiary,
            "--circle": btnPallet.colorTertiary,
            "--circleHover": btnPallet.colorDarkTertiary,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorTertiary,
            "--iconHover": btnPallet.colorDarkTertiary,
        },
        success: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorGreen,
            "--titleHover": btnPallet.colorDarkGreen,
            "--circle": btnPallet.colorGreen,
            "--circleHover": btnPallet.colorDarkGreen,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorGreen,
            "--iconHover": btnPallet.colorDarkGreen,
        },
        danger: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorRed,
            "--titleHover": btnPallet.colorDarkRed,
            "--circle": btnPallet.colorRed,
            "--circleHover": btnPallet.colorDarkRed,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorRed,
            "--iconHover": btnPallet.colorDarkRed,
        },
        gray: {
            "--color": "transparent",
            "--hover": "transparent",
            "--borderColor": btnPallet.colorWhite,
            "--title": btnPallet.colorGrayText,
            "--titleHover": btnPallet.colorDarkGrayText,
            "--circle": btnPallet.colorGrayText,
            "--circleHover": btnPallet.colorDarkGrayText,
            "--circleIconColor": btnPallet.colorWhite,
            "--circleIconHover": btnPallet.colorWhite,
            "--icon": btnPallet.colorGrayText,
            "--iconHover": btnPallet.colorDarkGrayText,
        },
    }
}
