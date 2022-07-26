import React, { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { REMOVE_USER } from "../Actions/action";
import { useDispatch } from "react-redux";
import { Remove_User_Props } from "../models/models";
import {SnackMSg} from '../Actions/action';



function Remove_User({ deleteID, cleanUp }: Remove_User_Props) {


  const dispatch = useDispatch<any>();
  const [show, setShow] = useState(false);

  const handleCloseNO = () => {
    setShow(false)
    cleanUp()
  };
  const handleCloseYES = (id: number) => {
    setShow(false)
    cleanUp()
    dispatch(REMOVE_USER(id))
    dispatch(SnackMSg(`${deleteID.firstName} Deleted successfully !`))

  };

  useMemo(() => {
    if (deleteID?.firstName?.length > 0) {
      setShow(true)
    }
  }, [deleteID])

  return (
    < >
    
      <Modal show={show}>
        <Modal.Header onClick={() => handleCloseNO()} closeButton>
          <Modal.Title>Delete User !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete{" "}
          <span style={{ fontWeight: "bold" }}>{deleteID?.firstName}</span>{" "}
          permanently
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="delete"
            variant="secondary"
            onClick={handleCloseNO}
          >
            NO !
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCloseYES(deleteID.id)}
          >
            YES !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Remove_User;
