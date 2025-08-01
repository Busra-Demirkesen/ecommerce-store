import { cn } from "@/lib/utils"; // Eğer `cn` fonksiyonu varsa
import { FC, MouseEventHandler, ReactNode } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon:React.ReactElement;
  className?:string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
