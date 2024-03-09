import { CSSProperties, HTMLInputTypeAttribute } from "react";

type ClassNames = {
    container?: string;
    input?: string;
    label?: string;
    error?: string
}

type Styles = {
    container?: CSSProperties;
    input?: CSSProperties;
    label?: CSSProperties;
    error?: CSSProperties
}

export type InputProps = {
    label: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    focus?: boolean;
    error?: string;
    act?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isValid?: (inputValue: string, name: string) => void;
    classNames?: ClassNames;
    styles?: Styles
}

export const InputDefaultProps: InputProps = {
    label: "name",
    type: "text",
}