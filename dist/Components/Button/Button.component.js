import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActivityIndicator, Text, TouchableOpacity, View, } from 'react-native';
import styles from './Button.component.styles';
import Constants from '../../Constants/Constants';
const { VARIANT, SIZE, TYPE } = Constants;
/**
 * gets the variant style
 * @param {VariantType} variant variant type
 * @returns {ViewStyle} variant style
 */
const getVariantStyle = (variant) => {
    switch (variant) {
        case VARIANT.SECONDARY:
            return { backgroundColor: '#6c757d' };
        case VARIANT.DANGER:
            return { backgroundColor: '#dc3545' };
        default:
            return { backgroundColor: '#007bff' };
    }
};
/**
 * gets the size style
 * @param {SizeType} size size type
 * @returns {ViewStyle} size style
 */
const getSizeStyle = (size) => {
    switch (size) {
        case SIZE.SMALL:
            return { paddingVertical: 6, paddingHorizontal: 12 };
        case SIZE.LARGE:
            return { paddingVertical: 14, paddingHorizontal: 20 };
        default:
            return { paddingVertical: 10, paddingHorizontal: 16 };
    }
};
/**
 * gets the button type style
 * @param {TypeType} type button type
 * @param {VariantType} variant button variant
 * @returns {ViewStyle} button type style
 */
const getTypeStyle = (type, variant) => {
    const baseColor = getVariantStyle(variant).backgroundColor || '#007bff';
    if (type === TYPE.OUTLINE) {
        return {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: baseColor,
        };
    }
    return { backgroundColor: baseColor };
};
/**
 * loading button component
 * @param {TLoadingButton} param0 loading button component
 * @returns {JSX.Element} loading button component
 */
const LoadingButton = ({ contentColor, loadingText, textStyle }) => {
    return (_jsxs(View, { style: styles.loadingButtonWrapper, children: [_jsx(ActivityIndicator, { size: "small", color: contentColor }), loadingText && _jsx(Text, { style: [styles.loadingTextStyle(contentColor), textStyle], children: loadingText })] }));
};
/**
 * content button component
 * @param {TContentButton} param0 content button
 * @returns {JSX.Element} content button component
 */
const ContentButton = ({ iconLeft, iconRight, textStyle, contentColor, title, }) => {
    return (_jsxs(View, { style: styles.contentButtonWrapper, children: [iconLeft && _jsx(View, { children: iconLeft }), _jsx(Text, { style: [styles.contentButtonText(contentColor), textStyle], children: title }), iconRight && _jsx(View, { children: iconRight })] }));
};
/**
 * button wrapper component
 * @param {TButtonWrapper} param0 button wrapper component
 * @returns {JSX.Element} button wrapper component
 */
const ButtonWrapper = ({ size = SIZE.MEDIUM, type = TYPE.SOLID, variant = VARIANT.PRIMARY, style, paddingHorizontal, paddingVertical, borderRadius = 8, disabled = false, loading = false, onPress, children, }) => (_jsx(TouchableOpacity, { onPress: onPress, disabled: disabled || loading, activeOpacity: 0.7, style: [
        styles.buttonWrapper(disabled, borderRadius),
        getSizeStyle(size),
        getTypeStyle(type, variant),
        paddingHorizontal !== undefined && { paddingHorizontal },
        paddingVertical !== undefined && { paddingVertical },
        style,
    ], children: children }));
/**
 * button component
 * @param {Props} param0 button component
 * @returns {JSX.Element} button component
 */
const ButtonComponent = ({ title, onPress, disabled = false, variant = VARIANT.PRIMARY, size = SIZE.MEDIUM, type = TYPE.SOLID, borderRadius = 8, loading = false, iconLeft, iconRight, style, textStyle, paddingHorizontal, paddingVertical, loadingText, }) => {
    const isOutline = type === TYPE.OUTLINE;
    const contentColor = isOutline ? getVariantStyle(variant).backgroundColor : '#ffffff';
    return (_jsx(ButtonWrapper, { size: size, type: type, variant: variant, style: style, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, borderRadius: borderRadius, disabled: disabled, loading: loading, onPress: onPress, children: loading ?
            _jsx(LoadingButton, { contentColor: contentColor, loadingText: loadingText, textStyle: textStyle }) :
            _jsx(ContentButton, { iconLeft: iconLeft, iconRight: iconRight, textStyle: textStyle, contentColor: contentColor, title: title }) }));
};
export default ButtonComponent;
