import React, { useState } from 'react'
import { DeleteID } from '../Actions/action'
import Remove_User from './Remove_User';


const ReadOnly = ({ value }: any) => {

  const [deleteID, setDeleteID] = useState<any>()
  console.log(deleteID);


  //  DELETE ID Clean up function
  const cleanUp = () => {
    setDeleteID({});
  };

  const Edit = () => {

  };

  return (
    <>
      <tr>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.age}</td>
        <td>{value.gender}</td>
        <td>
          <i
            onClick={() => setDeleteID(value)}
            className="fa-solid red fa-trash-can"
          ></i>
          <i
            onClick={() => Edit()}
            className="fa-solid EDIT fa-pen-to-square"
          ></i>
        </td>
      </tr>
      <Remove_User cleanUp={cleanUp} deleteID={deleteID} />
    </>
  )
}

export default ReadOnly
