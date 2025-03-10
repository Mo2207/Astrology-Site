
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  const baseStyles = "py-2 px-6 rounded-xl font-semibold transition-all";
  const variants = {
    primary: "bg-[#ddbea9] hover:bg-[#ad9585] text-[#2c2c2c]",
    secondary: "bg-gray-400 hover:bg-[#ad9585] text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
