import './index.css'
const classNames = require('classnames');

const Button = ({ children, href, secondary, icon }) => {
   if (href) {
      return (
         <a href={href}>
            <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon })}>{children}</button>
         </a>
      )
   } else {
      return (
         <button className={classNames('button', { 'secondary': secondary }, { 'rounded': icon })}>{children}</button>
      )
   }
}


export default Button
