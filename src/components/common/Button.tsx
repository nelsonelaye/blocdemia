import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  withArrow?: boolean;
  variant?: "fit" | "normal";
}

const Button = ({ text, variant, withArrow, ...props }: props) => {
  return (
    <div>
      <button
        className={twMerge(
          "bg-purple-100 text-white font-medium rounded-3xl h-[50px] px-[24px] flex items-center justify-center w-full leading-6 my-[10px] gap-2 disabled:bg-[#323232] disabled:text-[#7e7e7e]",
          variant === "fit" && "w-fit"
        )}
        {...props}
      >
        {text}

        {withArrow && <FaArrowRightLong />}
      </button>
    </div>
  );
};

export default Button;
