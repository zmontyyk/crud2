import React from "react";
import { EDit_ROW_ID, UPDATE_USER } from "../Actions/action";
import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useMemo } from "react"
import 'animate.css';


function Edit_User() {
  const dispatch = useDispatch<any>()


  
  const editTableData = useSelector((state: any) => {
    return state.FETCHING_DATA.data
  })




  // retrieve all hook methods
  const { register, setValue } = useFormContext();

  const hideRow = () => {
    dispatch(EDit_ROW_ID(null))
  }


  //  setting data into feilds
  useMemo(() => {
    setValue('firstName', editTableData.firstName)
    setValue('lastName', editTableData.lastName)
    setValue('email', editTableData.email)
    setValue('age', editTableData.age)
    setValue("gender", editTableData.gender)
  }, [editTableData])

// submit updated values 


  return (

    <>
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
            onClick={() => hideRow()}
            className="fa-solid shadow red fa-ban"
          ></i>

          <button className="bt" type="submit"  >  <i
            className="fa-solid shadow gren EDIT fa-floppy-disk"
          ></i></button>
        </td>
      </tr>
    </>
  )
}

export default Edit_User;

