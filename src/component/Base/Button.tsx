interface ButtonProps {
  name: string;
  withoutBg?: boolean;
  withPrimaryBg?: boolean;
  bgColor?: string;
}

const Button = (props: ButtonProps) => {
  const dynamicStylesBg = {
    background: props.withoutBg
      ? ""
      : "linear-gradient(46deg, #7A3781 -49.92%, #CA2D5D 96.14%)",
  };

  return (
    <div
      className={`px-4 py-2.5 rounded-lg ${
        props.withoutBg
          ? "text-[#7A3781] border border-solid border-[#7A3781]"
          : "text-white"
      }`}
      style={dynamicStylesBg}
    >
      {props.name}
    </div>
  );
};

export default Button;
