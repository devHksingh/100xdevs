// import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setformData, prevStep,nextStep,resetForm } from '../features/form/formSlice'

function UserForm() {
  const CurrentFormStep = useSelector((state)=> state.form.currentStep)
  const formData = useSelector((state)=> state.form.FormData)
  const dispatch = useDispatch()

  function handleChange(e){
    const {name,value} = e.target
    dispatch(setformData({[name]:value}))
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log('form submitted',formData);
  }
  function handlePrevBtn(){
    // console.log(CurrentFormStep);
    dispatch(prevStep())
    console.log(CurrentFormStep);
  }

  const rederStep = (step)=>{
    switch(step){
      case 1:
        // console.log(CurrentFormStep);
        return (
          <div>
            <label >Name:</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
          </div>
        )
        
      case 2:
        // console.log(CurrentFormStep);
        return (
          <div>
            <label >Age:</label>
            <input type='text' name='age' value={formData.age} onChange={handleChange}/>
          </div>
        )
        case 3:
          // console.log(CurrentFormStep);
          return (
            <div>
              <label >email:</label>
              <input type='email' name='email' value={formData.email} onChange={handleChange}/>
            </div>
          )
          case 4:
            // console.log(CurrentFormStep);
            return (
              <div>
                <label >password:</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange}/>
              </div>
          ) 
          default:
            return(
              <div>Null</div>
            )
            

    }
  }
  // () => dispatch(prevStep())
  return (
    <form onSubmit={handleSubmit}>
      <h1>Step {CurrentFormStep}</h1>
      {rederStep(CurrentFormStep)}
      <button type="button" onClick={handlePrevBtn } disabled={CurrentFormStep === 1}>
        Previous
      </button>
      <button type="button" onClick={() => dispatch(nextStep())} disabled={CurrentFormStep === 4}>
        Next
      </button>
      {CurrentFormStep === 4 && (
        <button type="submit">
          Submit
        </button>
      )}
      {CurrentFormStep === 4 && (
        <button type="button" onClick={() => dispatch(resetForm())}>
          Reset
        </button>
      )}
    </form>
  )
}

export default UserForm