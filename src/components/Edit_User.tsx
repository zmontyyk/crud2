import React from "react";

function Edit_User() {
  return (
    <>
      <tr>
        <td><input type="text" placeholder="First Name" />
        </td>
        <td><input type="text" placeholder="last Name" /></td>
        <td><input type="text" placeholder="Email" /></td>
        <td><input type="text" placeholder="Age" /></td>
        <td>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
          </div>
        </td>
        <td>
          <i
            className="fa-solid red fa-ban"
          ></i>
          <i
            className="fa-solid gren EDIT fa-floppy-disk"
          ></i>
        </td>
      </tr>
    </>
  );
}

export default Edit_User;

