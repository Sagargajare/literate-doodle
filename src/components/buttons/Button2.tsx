import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button2: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className="button-filled m-3" {...rest}>
      {children}
    </button>
  );
};

export default Button2;
