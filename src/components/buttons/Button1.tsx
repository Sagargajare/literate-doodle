import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button1: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className="button-outlined mr-4 mb-4" {...rest}>
      {children}
    </button>
  );
};

export default Button1;
