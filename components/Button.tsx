export type ButtonType = {
  width?: string;
  children?: string;
  modifiers?: string;
  onClick?: () => void;
};

function Button({ children, width, modifiers, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={modifiers}
      style={{ width: `${width}%` }}
    >
      {children}
    </button>
  );
}

export default Button;
