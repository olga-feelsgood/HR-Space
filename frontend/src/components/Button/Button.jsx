import './Button.css';

function Button() {

  return (
      <button className='button' type='button' >Далее</button>
      // <button className='button__' type='button' disabled={!props.isValid}>{props.buttonTitle}</button>
  )
}

export default Button;