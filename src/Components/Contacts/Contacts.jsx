import React from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'

export default function Contacts(props) {
  function GetId(id) {
    props.DeleteHandeller(id)
  }
  return (
    <div className="col-12 col-md-6 col-lg-4 ho">
      <div className="card m-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <h6 className="card-text">Name: {props.fname}</h6>
          <h6 className="card-text">Account Number: {props.accountnumber}</h6>
          <h6 className="card-text">Email: {props.email}</h6>
          <h6 className="card-text">IFSC: {props.ifsc}</h6>
          <h6 className="card-text">Mobile: {props.mobile}</h6>
          <Link to='/currencyconverter' className="btn bg-dark ho text-white mx-3">Pay</Link>
          <button  className="btn bg-dark ho text-white" onClick={GetId.bind(this, props.id)}>Delete</button>
        </div>
      </div>
    </div>

  )
}
