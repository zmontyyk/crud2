import React, { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Remove_User({ deleteID,cleanUp }: any) {
 
  const [show, setShow] = useState(false) 
 
  const handleClose =()=>{
    setShow(false)
    cleanUp()
  }
 
  


  useMemo(()=>{
   if (deleteID?.firstName?.length > 0) {
    setShow(true)
   }
  },[deleteID])




  return (
    <div>


      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Delete User !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to delete <span style={{fontWeight: "bold"}} >{deleteID?.firstName}</span>  permanently</Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
           NO !
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            YES !
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Remove_User;
