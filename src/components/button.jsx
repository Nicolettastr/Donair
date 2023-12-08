/* eslint-disable react/prop-types */
const Button = ({
    className,
    message
}) => {
  return (
    <button className={className}>
        {message}
    </button>
  )
}

export default Button
