import React, { useState } from "react";
import { useEffect } from "react";
import { ADD_USER, EDit_ROW_ID, Fetch_DATA, UPDATE_USER } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { employeeData, Inputs, RootState } from "../models/models";
import Edit_User from './EditRows'
import ReadOnly from "./ReadOnly";
import { useForm, FormProvider } from "react-hook-form";
import AddNewUser from "./AddNewEntry";

function DataTable() {
  const dispatch = useDispatch<any>()

  const [showAddrow, setshowAddrow] = useState<boolean>(false)

  // new row add function
  const addNewRow = (value: boolean) => {
    setshowAddrow(value)
  }

  const addRowFlag = () => {

    setshowAddrow(true)
    dispatch(EDit_ROW_ID(null))
  }

  useEffect(() => {
    dispatch(Fetch_DATA());
  }, [])


  //  All employee Data  from store
  const All_Employee_Data = useSelector((state: RootState) => {
    return state.FETCHING_DATA.userList;
  })

  //  showing ediTtable table row 
  const show_Edit_Row = useSelector((state: RootState) => {
    return state.FETCHING_DATA.data
  })


  // getting id to update user for put method
  const editId = useSelector((state: RootState) => {
    return state.FETCHING_DATA.data?.id
  })

  //  useFrom onsubmit method ++++++++
  const methods = useForm({
  
  })
  const onSubmit = (data: Inputs, event: any) => {
    const newRow = event.nativeEvent.submitter.id

    if (newRow === 'newRow') {
      dispatch(ADD_USER(data))
      setshowAddrow(false)

    } else {
      dispatch(UPDATE_USER(data, editId))
      dispatch(EDit_ROW_ID(null))
    }
  }

 
          

  return (
    <div className="animate__animated  animate__fadeIn " >
      <button   className="button-17" onClick={() => addRowFlag()} >ADD</button>
      <FormProvider {...methods} >
        <form className="container-fluid" onSubmit={methods.handleSubmit(onSubmit)} >
          <table className="table table-striped table-hover  ">
            <thead >
              <tr >
                <th  scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {All_Employee_Data.map((value: employeeData) => {
                return (
                  <React.Fragment key={value.id}>
                    {show_Edit_Row?.id === value.id ? <Edit_User /> : <ReadOnly addNewRow={addNewRow} value={value} />}
                  </React.Fragment>
                )
              })}

              {showAddrow ? <AddNewUser addRowFlag={addRowFlag} addNewRow={addNewRow} /> : ''}
              {/* <AddNewUser/> */}
            </tbody>
          </table>
        </form>
      </FormProvider>
      <>      {All_Employee_Data.length > 0 ?""
      :<h1 className="NODATA" >NO DATA FOUND</h1>
      }
      </>

    </div>
  );
}

export default DataTable;
