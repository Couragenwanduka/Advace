"use client";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
