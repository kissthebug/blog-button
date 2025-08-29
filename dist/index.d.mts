import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare function Button({ children, variant, className, ...rest }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Button as default };
