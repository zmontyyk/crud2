import React from 'react'
import { useEffect } from 'react'
import {Fetch_DATA,} from '../Actions/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {employeeData} from '../models/models'
import { Dispatch } from 'redux';

function Getting_Emp() {
   const dispatch = useDispatch<any>()
   const All_employes = useSelector((state:any)=>{
    return state
   })
// console.log(All_employes);



  useEffect(()=>{
    dispatch(Fetch_DATA())
  })





  return (
    <div>
      <table className="table table-striped table-hover mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Getting_Emp