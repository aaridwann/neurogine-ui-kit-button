import React from 'react';

import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import styles from './Button.component.styles';
import Constants from '../../Constants/Constants';
import { Props, SizeType, TButtonWrapper, TContentButton, TLoadingButton, TypeType, VariantType } from '../../Types';

const { VARIANT, SIZE, TYPE } = Constants;

/**
 * gets the variant style
 * @param {VariantType} variant variant type
 * @returns {ViewStyle} variant style
 */
const getVariantStyle = (variant: VariantType): ViewStyle => {
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
const getSizeStyle = (size: SizeType): ViewStyle => {
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
const getTypeStyle = (type: TypeType, variant: VariantType): ViewStyle => {
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
const LoadingButton: React.FC<TLoadingButton> = ({ contentColor, loadingText, textStyle }) => {
    return (
        <View style={styles.loadingButtonWrapper}>
            <ActivityIndicator size="small" color={contentColor} />
            {loadingText && <Text style={[styles.loadingTextStyle(contentColor), textStyle]}>
                {loadingText}
            </Text>}
        </View>
    );
};

/**
 * content button component
 * @param {TContentButton} param0 content button
 * @returns {JSX.Element} content button component
 */
const ContentButton: React.FC<TContentButton> = ({
    iconLeft,
    iconRight,
    textStyle,
    contentColor,
    title,
}) => {
    return (
        <View style={styles.contentButtonWrapper}>
            {iconLeft && <View>{iconLeft}</View>}
            <Text style={[styles.contentButtonText(contentColor), textStyle]}>
                {title}
            </Text>
            {iconRight && <View>{iconRight}</View>}
        </View>
    );
};

/**
 * button wrapper component
 * @param {TButtonWrapper} param0 button wrapper component
 * @returns {JSX.Element} button wrapper component
 */
const ButtonWrapper: React.FC<TButtonWrapper> = ({
    size = SIZE.MEDIUM,
    type = TYPE.SOLID,
    variant = VARIANT.PRIMARY,
    style,
    paddingHorizontal,
    paddingVertical,
    borderRadius = 8,
    disabled = false,
    loading = false,
    onPress,
    children,
}) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.7}
        style={[
            styles.buttonWrapper(disabled, borderRadius),
            getSizeStyle(size),
            getTypeStyle(type, variant),
            paddingHorizontal !== undefined && { paddingHorizontal },
            paddingVertical !== undefined && { paddingVertical },
            style,
        ]}
    >
        {children}
    </TouchableOpacity>
)

/**
 * button component
 * @param {Props} param0 button component
 * @returns {JSX.Element} button component
 */
const ButtonComponent: React.FC<Props> = ({
    title, onPress,
    disabled = false, variant = VARIANT.PRIMARY, size = SIZE.MEDIUM, type = TYPE.SOLID,
    borderRadius = 8, loading = false, iconLeft, iconRight,
    style, textStyle, paddingHorizontal, paddingVertical, loadingText,
}) => {

    const isOutline: boolean = type === TYPE.OUTLINE;

    const contentColor: string | undefined = isOutline ? getVariantStyle(variant).backgroundColor as string : '#ffffff';

    return (
        <ButtonWrapper
            size={size}
            type={type}
            variant={variant}
            style={style}
            paddingHorizontal={paddingHorizontal}
            paddingVertical={paddingVertical}
            borderRadius={borderRadius}
            disabled={disabled}
            loading={loading}
            onPress={onPress}>
            {loading ?
                <LoadingButton
                    contentColor={contentColor}
                    loadingText={loadingText}
                    textStyle={textStyle}
                /> :
                <ContentButton
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    textStyle={textStyle}
                    contentColor={contentColor}
                    title={title}
                />
            }
        </ButtonWrapper>
    );
};

export default ButtonComponent;