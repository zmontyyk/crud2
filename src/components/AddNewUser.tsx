import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  gender: string,
};



function AddNewUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log()


  return (
  
      <tr className="animate__animated animate__fadeIn" >
        <td><input className="form-control" type="text" placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        </td>
        <td><input className="form-control" type="text" placeholder="last Name"
          {...register("lastName", { required: true })}
        /></td>
        <td><input className="form-control" type="text" placeholder="Email"
          {...register("email", { required: true })}
        /></td>
        <td><input className="form-control" type="number" placeholder="Age"
          {...register("age", { required: true })}
        /></td>
        <td>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineRadio1"
              {...register("gender", { required: true })} value="male"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineRadio2"
              {...register("gender", { required: true })} value="female" />
            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
          </div>
        </td>
        <td>


          {/* buttons  */}
          <i
            className="fa-solid shadow red fa-ban"
          ></i>

          <button className="bt" type="submit"  >  <i
            className="fa-solid shadow gren EDIT fa-floppy-disk"
          ></i></button>
        </td>
      </tr>




   
  )
}


export default AddNewUser