import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
       className={cn(
        `
        w-auto 
        rounded-full
        bg-black
        px-4
        py-2
        text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
        font-semibold
        hover:opacity-75
        transition
        `,
        className
       )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
