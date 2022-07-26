import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';



type props = {
  addRowFlag: any
  addNewRow: (value: boolean) => void
}

function AddNewUser({ addNewRow, addRowFlag }: props) {
  const { register, setValue, watch, reset, formState: { errors } }: any = useFormContext()



  //  function from table component setting the feilds empty for new entry
  useEffect(() => {
    setValue("firstName", '')
    setValue("lastName", '')
    setValue("email", '')
    setValue("age", '')
    setValue("gender", '')
    reset({
      data: 'test'
    })
  }, [])



  // Red color flag for Validate
  const getValuess = watch()
  const [red, setred] = useState(true)

  const check = () => {
    const isNullish = Object.values(getValuess).every(value => {
      // console.log(value)
      if (value !== undefined && value !== "") {
        setred(true)
        return true
      }
      setred(false)
    })
  }



  return (

    <tr className={"animate__animated  animate__fadeIn   " + (red ? "" : "redbox")} >
      <td><input className="form-control " type="text" placeholder="First Name"
        {...register("firstName", { required: true })}
      />
        {errors.firstName && <span className='text-danger'>required</span>}
      </td>


      <td><input className="form-control  " type="text" placeholder="last Name"
        {...register("lastName", { required: true })}
      />
        {errors.firstName && <span className='text-danger'>required</span>}
      </td>


      <td><input className="form-control  " type="text" placeholder="Email"
        {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
      />
        {errors.email?.type === 'required' && <span className="text-danger" >required </span>}
        {errors.email?.type === 'pattern' && <span className="text-danger" > Invalid e-mail</span>}
      </td>


      <td><input className="form-control  " type="number" placeholder="Age"
        {...register("age", { required: true })}
      />
        {errors.age && <span className='text-danger'>required</span>}

      </td>
      <td>


        <select {...register("gender", { required: true })}>
          <option value="">Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        {errors.gender?.type === 'required' && <span className='text-danger' >required</span>}
      </td>
      <td>


        {/* buttons  */}
        <i
          onClick={() => addNewRow(false)}
          className="fa-solid shadow red fa-ban"
        ></i>


        <button id='newRow' onClick={() => check()} className="bt" type="submit">  <i
          className="fa-solid shadow gren EDIT fa-floppy-disk"
        ></i></button>
        {/* <input type="submit" /> */}
      </td>
    </tr>





  )
}


export default AddNewUser