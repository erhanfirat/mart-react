export const MyButton = ({ children, className, ...rest }) => {
  return (
    <button className={"btn " + className} {...rest}>
      {children}
    </button>
  );
};
