import { StyleSheet } from 'react-native';
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
        paddingVertical: 4,
    },
});
const buttonModuleStyles = {
    ...staticStyles,
    loadingTextStyle: (contentColor) => ({
        fontSize: 14,
        fontWeight: '600',
        color: contentColor,
    }),
    contentButtonText: (contentColor) => ({
        fontSize: 14,
        fontWeight: '600',
        color: contentColor,
    }),
    buttonWrapper: (disabled, borderRadius) => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.6 : 1,
        borderRadius,
    }),
};
export default buttonModuleStyles;
