const mainColors = {
    yellow1: '#FAD448',
    dark1: '#2F3231',
    grey1: '#ACB0AE',
    grey2: '#E5E8E7',
    pink: '#F2D7D5',
    blue: '#EAF2F8',
    darkBlue : '#023052',
    greyBlue: '#c8e0e6',
    medBlue: '#58a5b8',
    black1: '#000000',
    black2: 'rgba(0,0,0,0.5)',
    red1: '#E06379',
    grey3: '#EDEEF0',
    grey4: '#B1B7C2'
};

export const colors = {
    primary: mainColors.yellow1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    pink: mainColors.pink,
    blue: mainColors.blue,
    darkBlue: mainColors.darkBlue,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        inactive: mainColors.dark1,
    },
    button: {
        primary: {
            background: mainColors.yellow1,
            text: 'white',
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1,
        },
    },
    border: mainColors.grey2,
    chat: {
        primary: mainColors.greyBlue,
        secondary: mainColors.medBlue,
    },
    loadingBackground: mainColors.black2,
    error: mainColors.red1,
    disable: {
        main: mainColors.grey3,
        text: mainColors.grey4,
    }
};
