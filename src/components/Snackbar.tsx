import React, { useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import {SnackMSg} from '../Actions/action'


function Snackbar() {

  
  const [show, setShow] = useState(false)
  // const dispatch = useDispatch()

  const name = useSelector((state: any) => {
    return state.SNACK_MSG.name
  })



  useMemo(()=>{
    if (name !== '') {
      setShow(true)
    }
    // setTimeout(() => {
    //  dispatch(SnackMSg(''))
    // }, 10000)
  },[name])


  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body> <b>{name}</b></Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}


export default Snackbar