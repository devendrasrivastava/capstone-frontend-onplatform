import React from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'

export default function Contacts(props) {
  function GetId(id) {
    props.DeleteHandeller(id)
  }
  return (
    <div className="col-md-4 ho">
      <div className="card m-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <i className="bi bi-trash-fill text-danger float-end" onClick={GetId.bind(this, props.id)}></i>
          <h5 className="card-title">{props.fname} {props.lname}</h5>
          <h5 className="card-text">{props.email}</h5>
          <h5 className="card-text">{props.location}</h5>
          <h5 className="card-text">{props.mobile}</h5>
          <Link to='/currencyconverter' className="btn user-button">Transfer Money</Link>

        </div>
      </div>
    </div>
  )
}
