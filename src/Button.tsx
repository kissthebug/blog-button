import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium";
  const styles =
    variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
