import "./index.css";
const classNames = require("classnames");

const Button = ({
  children,
  href,
  secondary,
  icon,
  cubic,
  action,
  ...rest
}) => {
  if (href) {
    return (
      <a href={href} {...rest}>
        <button
          className={classNames(
            "button",
            { secondary: secondary },
            { rounded: icon },
            { cubic: cubic }
          )}
        >
          {children}
        </button>
      </a>
    );
  } else {
    return (
      <button
        {...rest}
        className={classNames(
          "button",
          { secondary: secondary },
          { rounded: icon },
          { cubic: cubic }
        )}
        onClick={action}
      >
        {children}
      </button>
    );
  }
};

export default Button;
