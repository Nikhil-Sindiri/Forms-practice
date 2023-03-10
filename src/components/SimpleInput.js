import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { 
    value: enteredName,
    IsValid: enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameInputChangeHandler,
    inputBlurHandler:nameInputBlurHandler,
    reset:resetNameInput
  }= useInput(value=> value.trim() !== '');

  let formIsValid = false;
  
  if(enteredNameIsValid){
    formIsValid = true;
  }


  const formSubmissionHandler =(event) => {
    event.preventDefault();
    
    if(!enteredNameIsValid) {
      return;
    }
    console.log(enteredName)
    resetNameInput();
    
  }
  
  const nameInputClasses =nameInputHasError ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputHasError && <p className="error-text">Shouldn't be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
