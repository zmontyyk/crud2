import { useFormContext } from 'react-hook-form';



type props = {
  addRowFlag: any
  addNewRow: (value: boolean) => void
}

function AddNewUser({ addNewRow, addRowFlag }: props) {
  const { register, setValue } = useFormContext()


  //  function from table component setting the feilds empty for new entry
  addRowFlag(
    setValue("firstName", ''),
    setValue("lastName", ''),
    setValue("email", ''),
    setValue("age", ''),
    setValue("gender", ''),
  )


  return (

    <tr className="animate__animated animate__fadeInUp" >
      <td><input className="form-control " type="text" placeholder="First Name"
        {...register("firstName", { required: true })}
      />
      </td>
      <td><input className="form-control  " type="text" placeholder="last Name"
        {...register("lastName", { required: true })}
      /></td>
      <td><input className="form-control  " type="text" placeholder="Email"
        {...register("email", { required: true })}
      /></td>
      <td><input className="form-control  " type="number" placeholder="Age"
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
          onClick={() => addNewRow(false)}
          className="fa-solid shadow red fa-ban"
        ></i>

        <button id='newRow' className="bt" type="submit"  >  <i
          className="fa-solid shadow gren EDIT fa-floppy-disk"
        ></i></button>
      </td>
    </tr>





  )
}


export default AddNewUser