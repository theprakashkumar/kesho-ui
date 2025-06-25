import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className="text-blue-600 border-amber-500 border" {...props} />
  );
};

export default Button;
