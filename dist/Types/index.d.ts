import { StyleProp, TextStyle, ViewStyle } from "react-native";
export declare const SIZE: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
}, TYPE: {
    OUTLINE: string;
    SOLID: string;
}, VARIANT: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly DANGER: "danger";
};
export type VariantType = typeof VARIANT[keyof typeof VARIANT] | string;
export type SizeType = typeof SIZE[keyof typeof SIZE] | string;
export type TypeType = typeof TYPE[keyof typeof TYPE] | string;
export interface Props {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    variant?: VariantType;
    size?: SizeType;
    type?: TypeType;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    borderRadius?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    loadingText?: string;
}
export type DynamicTextStyle = (contentColor: string) => StyleProp<TextStyle>;
export type DynamicWrapperStyle = (disabled: boolean, borderRadius: number) => StyleProp<ViewStyle>;
export interface ButtonModuleStyles {
    loadingButtonWrapper: StyleProp<ViewStyle>;
    contentButtonWrapper: StyleProp<ViewStyle>;
    loadingTextStyle: DynamicTextStyle;
    contentButtonText: DynamicTextStyle;
    buttonWrapper: DynamicWrapperStyle;
}
export type TLoadingButton = Pick<Props, 'loadingText' | 'textStyle'> & {
    contentColor: string;
};
export type TContentButton = Pick<Props, 'iconLeft' | 'iconRight' | 'textStyle'> & {
    contentColor: string;
    title: string;
};
export type TButtonWrapper = Partial<Omit<Props, 'onPress'>> & {
    onPress: () => void;
    children?: React.ReactNode;
};
//# sourceMappingURL=index.d.ts.map