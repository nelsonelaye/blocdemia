import React from "react";

interface props {
  text: string;
}

const Button = ({ text }: props) => {
  return (
    <div>
      <button className="bg-purple-100 text-white rounded-3xl py-[19.5px] w-full leading-6">
        {text}
      </button>
    </div>
  );
};

export default Button;
