import { Platform, StyleSheet } from 'react-native';

import theme from './theme';

export default {
    container: {
        flex: 1,
        backgroundColor: theme.main.backgroundColor
    },
    splash: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        backgroundColor: theme.emphasis.backgroundColor
    },
    splashImage: {
        width: 128,
        height: 128
    },
};
