/// <reference types="react" />
declare type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    theme: "primary" | "secondary" | "tertiary";
    size: "small" | "medium" | "big";
    disabled?: boolean;
    width?: string | number;
};
declare const Button: {
    ({ children, onClick, theme, size, disabled, width }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
