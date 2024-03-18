import './Button.css';

function Button() {

  return (
      <button className='button' type='button' >Label</button>
      // <button className='button__' type='sumbit' disabled={!props.isValid}>{props.buttonTitle}</button>
  )
}

export default Button;