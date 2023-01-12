import "./index.css";
const classNames = require("classnames");

const Button = ({ children, href, secondary, icon, action, ...rest }) => {
  if (href) {
    return (
      <a className="buttonlink" href={href} {...rest}>
        <button
          className={classNames(
            "button",
            { secondary: secondary },
            { rounded: icon }
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
          { rounded: icon }
        )}
        onClick={action}
      >
        {children}
      </button>
    );
  }
};

export default Button;
