import './index.css'
const classNames = require('classnames');

const Button = ({ children, href, secondary }) => {
   //action ?
   href ?
      <a href={href}>
         <button className={classNames('button', { 'secondary': secondary })}>{children}</button>
      </a>
      :
      <button className={classNames('button', { 'secondary': secondary })}>{children}</button>
}

export default Button
