import React from 'react'

function Remove_User({ deleteID }: any) {
    console.log(deleteID);

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            
                        </div>
                        {/* <div className="modal-body">
                            ...
                        </div> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">YES</button>
                            <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal" aria-label="Close">NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove_User