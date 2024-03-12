import './Form.css'

function Form() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"/>
        <button>Submit</button>
      </form>
      </div>
  )
}

export default Form;