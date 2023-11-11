// interface ButtonProps {
//   name: string;
//   withoutBg?: boolean;
//   withPrimaryBg?: boolean;
//   bgColor?: string;
//   textColor?: string;
//   isRounded?: boolean;
// }

import { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  // name: string;
  withoutBg?: boolean;
  withPrimaryBg?: boolean;
  bgColor?: string;
  textColor?: string;
  isRounded?: boolean;
}

const Button = (props: ButtonProps) => {
  const dynamicStylesBg = {
    background: props.withoutBg
      ? ""
      : "linear-gradient(46deg, #7A3781 -49.92%, #CA2D5D 96.14%)",
  };

  return (
    <button
      {...props}
      className={`px-4 py-2.5 flex flex-col justify-center w-fit whitespace-nowrap ${
        props.withoutBg
          ? "text-[#7A3781] border border-solid border-[#7A3781]"
          : "text-white"
      } ${props.isRounded ? "rounded-full" : "rounded-lg"} ${
        props.bgColor ? props.bgColor : ""
      } ${props.textColor ? props.textColor : ""}`}
      style={dynamicStylesBg}
    >
      {props.name}
    </button>
  );
};

export default Button;
