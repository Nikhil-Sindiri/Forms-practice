import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    IsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset
  }=useInput(value => value.trim() !== '');
  const {
    value: enteredLastName,
    IsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset
  }=useInput(value => value.trim() !== '');
  const {
    value: enteredEMail,
    IsValid: eMailIsValid,
    hasError: eMailhasError,
    valueChangeHandler: eMailChangeHandler,
    inputBlurHandler: eMailInputBlurHandler,
    reset: eMailReset
  }=useInput((value) => value.includes('@'));

  let formIsValid=false;

  if(firstNameIsValid && lastNameIsValid && eMailIsValid){
    formIsValid=true;
  }

  const formSubmitHanlder = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log(enteredFirstName)
    firstNameReset();
    console.log(enteredLastName)
    lastNameReset();
    console.log(enteredEMail)
    eMailReset();
  }

  let firstNameClasses='form-control ' +(firstNameHasError?'invalid':'')
  let lastNameClasses='form-control ' +(lastNameHasError?'invalid':'')
  let eMailClasses='form-control ' +(eMailhasError?'invalid':'')


  return (
    <form onSubmit={formSubmitHanlder}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameInputBlurHandler}/>
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameInputBlurHandler} />
        </div>
      </div>
      <div className={eMailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEMail} onChange={eMailChangeHandler} onBlur={eMailInputBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
