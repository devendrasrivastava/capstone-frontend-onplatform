import React from 'react'

export default function Contacts(props) {
    function GetId(id) {
        // console.log(id);
        props.DeleteHandeller(id)
    }
  return (
    <div className="col-md-4">
    <div className="card m-4" style={{width: "18rem"}}>
  <div className="card-body">
  <i className="bi bi-trash-fill text-danger float-end" onClick={GetId.bind(this,props.id)}></i>
    <h5 className="card-title">{props.fname} {props.lname}</h5>
    <h4 className="card-text">{props.email}</h4>
    <h4 className="card-text">{props.location}</h4>
    <h4 className="card-text">{props.mobile}</h4>
    <a href='#' className="btn btn-primary">Transfer Money</a>
   
  </div>
</div>
</div>
  )
}
