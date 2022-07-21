import React from 'react'
import { useEffect } from 'react'
import { Fetch_DATA, } from '../Actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { employeeData } from '../models/models'
import { Dispatch } from 'redux';

function Getting_Emp() {
  const dispatch = useDispatch<any>()





  useEffect(() => {
    dispatch(Fetch_DATA())
  }, [])

  //  All employee Data  from store
  const All_Employee_Data = useSelector((state: any) => {
    return state.FETCHING_DATA.userList
  })




  return (
    <div>
      <table className="table table-striped table-hover mt-5 ">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {All_Employee_Data.userList <0? <h1>hello</h1>:
        <tbody>
         
            {All_Employee_Data.map((value:any  ) => {
              return (
                <React.Fragment>
                   <tr>
                  <th>{value.firstName}</th>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>{value.age}</td>
                  <td>{value.gender}</td>
                  </tr>
                </React.Fragment>
              )
            })}

         

        </tbody>
        }
      </table>
    </div>
  )
}

export default Getting_Emp