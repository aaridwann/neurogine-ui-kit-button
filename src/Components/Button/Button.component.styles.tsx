import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { ButtonModuleStyles } from '../../Types';

const staticStyles = StyleSheet.create({
    loadingButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    contentButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
});

const buttonModuleStyles: ButtonModuleStyles = {
    ...staticStyles,
    loadingTextStyle: (contentColor: string): TextStyle => ({
        fontSize: 14,
        fontWeight: '600',
        color: contentColor,
    }),

    contentButtonText: (contentColor: string): TextStyle => ({
        fontSize: 14,
        fontWeight: '600',
        color: contentColor,
    }),

    buttonWrapper: (disabled: boolean, borderRadius: number): ViewStyle => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.6 : 1,
        borderRadius,
    }),
};

export default buttonModuleStyles;