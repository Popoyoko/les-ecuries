import './index.css'
const classNames = require('classnames');

const Button = ({ children, href, secondary, icon, action }) => {
   if (href) {
      return (
         <a href={href}>
            <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon })}>{children}</button>
         </a>
      )
   } else {
      return (
         <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon })} onClick={action}>{children}</button>
      )
   }
}


export default Button
