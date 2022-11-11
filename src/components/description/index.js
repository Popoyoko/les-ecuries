import './index.css'

const Description = ({children, className}) => {

	return <p className={className}>{children}</p>
}

export default Description


// const Description = ({children, className}) => {

// 	return <div className='description'><p className={className}>{children}</p></div>
// }

// export default Description