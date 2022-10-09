export type ButtonType = {
  width?: string;
  children?: string;
  modifiers?: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ children, width, modifiers, onClick, disabled }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={modifiers}
      style={{ width: `${width}%` }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
