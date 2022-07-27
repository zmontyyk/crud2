import React, { useEffect, useState } from "react";
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
  const { register, setValue, reset, watch, formState: { errors } }: any = useFormContext();

  const hideRow = () => {
    dispatch(EDit_ROW_ID(null))
  }


  useEffect(() => {
    reset({
      data: 'test'
    })
  }, [])

  //  setting data into feilds
  useMemo(() => {
    setValue('firstName', editTableData.firstName)
    setValue('lastName', editTableData.lastName)
    setValue('email', editTableData.email)
    setValue('age', editTableData.age)
    setValue("gender.male", editTableData.gender)
    setValue("gender", editTableData.gender)

  }, [editTableData])


  // Red color flag for Validate

  const getValuess = watch()
  const [redBcg, setredBcg] = useState(true)


  const check = () => {
    const isNullish = Object.values(getValuess).every(value => {
      if (value !== undefined && value !== "") {
        setredBcg(true)
        return true
      }
      setredBcg(false)
    })
  }


  // to Block "e" in  type='number ' input tag
  const blockInvalidChar = (e: { key: string; preventDefault: () => any; }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();



  return (

    <>
      <tr className={"animate__animated  animate__fadeIn   " + (redBcg ? "" : "redbox")} >
        <td><input className="form-control" type="text" placeholder="First Name"
          {...register("firstName", { required: true })}
        />
          {errors.firstName && <span className='text-danger'>required</span>}
        </td>
        <td><input className="form-control" type="text" placeholder="last Name"
          {...register("lastName", { required: true })}
        />
          {errors.lastName && <span className='text-danger'>required</span>}
        </td>
        <td><input className="form-control" type="text" placeholder="Email"
          {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
        />
          {errors.email?.type === 'required' && <span className="text-danger" >required </span>}
          {errors.email?.type === 'pattern' && <span className="text-danger" > Invalid e-mail</span>}

        </td>
        <td><input onKeyDown={blockInvalidChar} className="form-control" type="number" placeholder="Age"
          {...register("age", { required: true })}
        />
          {errors.age && <span className='text-danger'>required</span>}
        </td>

        <td>
          <select  defaultValue={'DEFAULT'} className="form-select"  {...register("gender", { required: true })} required>
            <option  disabled value="">Choose...</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </td>
        <td>

          {/* buttons  */}

          <button data-tooltip-content="Discard Changes" className="bt with-tooltip "
            onClick={() => hideRow()}
          >
            <i
              className="fa-solid shadow red fa-ban"
            ></i>
          </button>


          <button data-tooltip-content="Save Data!" onClick={() => check()} className="bt with-tooltip " type="submit"  >  <i
            className="fa-solid shadow gren EDIT fa-floppy-disk"
          ></i></button>
        </td>
      </tr>
    </>
  )
}

export default Edit_User;

