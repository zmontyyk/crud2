import React, { useState } from 'react'
import { EDit_ROW_ID } from '../Actions/action'
import Remove_User from './RemoveUser'
import { useDispatch } from 'react-redux'
import 'animate.css';
import { employeeData } from '../models/models';


interface props {
  value: employeeData
  addNewRow: (value: boolean) => void
}


const ReadOnly = ({ value, addNewRow }: props) => {

  const [deleteID, setDeleteID] = useState<any>()


  const dispatch = useDispatch()

  //  DELETE ID Clean up function
  const cleanUp = () => {
    setDeleteID({})

  }

  const Edit = (value: employeeData) => {
    dispatch(EDit_ROW_ID(value))
    addNewRow(false)
  }


  return (
    <>
      <tr className='animate__animated  animate__fadeIn   ' >
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.age}</td>
        <td>{value.gender}</td>
        <td>

          <span
            data-tooltip-content="Delete !"
            className='with-tooltip'
          >
            <i
              onClick={() => setDeleteID(value)}
              className="fa-solid shadow red fa-trash-can"
            ></i>
          </span>

          <span 
            data-tooltip-content="Edit row!"
            className='with-tooltip'
          >
          <i
            onClick={() => Edit(value)}
            className="fa-solid shadow EDIT fa-pen-to-square"
          ></i>
          </span>
        </td>
      </tr>
      <Remove_User cleanUp={cleanUp} deleteID={deleteID} />
    </>
  )
}

export default ReadOnly
