import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import { Fetch_DATA } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { employeeData } from "../models/models";
import { Dispatch } from "redux";
import Remove_User from "./Remove_User";
import Edit_User from './Edit_User'
import ReadOnly from "./ReadOnly";

function Table() {
  const dispatch = useDispatch<any>();

  const [EditRowId, setEditRowId] = useState()




  useEffect(() => {
    dispatch(Fetch_DATA());
  }, []);




  //  All employee Data  from store
  const All_Employee_Data = useSelector((state: any) => {
    return state.FETCHING_DATA.userList;
  })


  return (
    <div className="">
      <form>
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
          {All_Employee_Data.userList < 0 ? (
            <h1>hello</h1>
          ) : (
            <tbody>
              {All_Employee_Data.map((value: employeeData) => {
                return (
                  <React.Fragment key={value.id}>
                    {EditRowId === value.id ? <Edit_User  /> : <ReadOnly value={value} />}
                  </React.Fragment>
                )
              })}
            </tbody>
          )}
        </table>
      </form>
    </div>
  );
}

export default Table;
