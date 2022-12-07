import './index.css'
const classNames = require('classnames');

const Button = ({ children, href, secondary, icon, cubic, action }) => {
   if (href) {
      return (
         <a href={href}>
            <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon }, { 'cubic': cubic })}>{children}</button>
         </a>
      )
   } else {
      return (
         <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon }, { 'cubic': cubic })} onClick={action}>{children}</button>
      )
   }
}


export default Button
