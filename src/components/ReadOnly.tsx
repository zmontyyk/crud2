import React, { useState } from 'react'
import { EDit_ROW_ID } from '../Actions/action'
import Remove_User from './Remove_User'
import { useDispatch } from 'react-redux'
import 'animate.css';

const ReadOnly = ({ value }: any) => {

  const [deleteID, setDeleteID] = useState<any>()
  const dispatch = useDispatch()

  //  DELETE ID Clean up function
  const cleanUp = () => {
    setDeleteID({});
  }

  const Edit = (value:any) => {
    dispatch(EDit_ROW_ID(value))

  }

  return (
    <>
      <tr className='animate__animated animate__fadeIn ' >
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.age}</td>
        <td>{value.gender}</td>
        <td>
          <i
            onClick={() => setDeleteID(value)}
            className="fa-solid shadow red fa-trash-can"
          ></i>
          <i
            onClick={() => Edit(value)}
            className="fa-solid shadow EDIT fa-pen-to-square"
          ></i>
        </td>
      </tr>
      <Remove_User cleanUp={cleanUp} deleteID={deleteID} />
    </>
  )
}

export default ReadOnly
