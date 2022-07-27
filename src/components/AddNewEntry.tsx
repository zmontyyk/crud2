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
  const [redBcg, setRedBgc] = useState(true)

  const check = () => {
    const isNullish = Object.values(getValuess).every(value => {
      if (value !== undefined && value !== "") {
        setRedBgc(true)
        return true
      }
      setRedBgc(false)
    })
  }
  // to Block "e" in  type='number ' input tag
    const blockInvalidChar = (e: { key: string; preventDefault: () => any; }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  return (
    <tr className={"animate__animated  animate__fadeIn   " + (redBcg ? "" : "redbox")} >
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


      <td><input onKeyDown={blockInvalidChar} className="form-control  " type="number" placeholder="Age"
        {...register("age", { required: true })}
      />
        {errors.age && <span className='text-danger'>required</span>}

      </td>
      <td>
      
        <select  defaultValue={'DEFAULT'} className="form-select"  {...register("gender", { required: true })} >
          <option disabled value="">Choose...</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        {errors.gender?.type === 'required' && <span className='text-danger' >required</span>}
      </td>
      <td>

        {/* buttons  */}
        <button data-tooltip-content="Discard Changes?" className="bt with-tooltip ">
          <i
            onClick={() => addNewRow(false)}
            className="fa-solid shadow red fa-ban"
          ></i>
        </button>

        <button id='newRow' data-tooltip-content="Save Data!" onClick={() => check()} className="bt with-tooltip " type="submit">  <i
          className="fa-solid shadow gren EDIT fa-floppy-disk "
        ></i></button>
        {/* <input type="submit" /> */}
      </td>
    </tr>





  )
}


export default AddNewUser