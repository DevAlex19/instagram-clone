export type ButtonType = {
  width?: string;
  children?: string;
  modifiers?: string;
};

function Button({ children, width, modifiers }: ButtonType) {
  return (
    <button className={modifiers} style={{ width: `${width}%` }}>
      {children}
    </button>
  );
}

export default Button;
