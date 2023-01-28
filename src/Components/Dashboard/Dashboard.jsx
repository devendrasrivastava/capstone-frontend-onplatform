import React, { useEffect, useState } from 'react';
import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';
import Gpay from '../Gpay/Gpay';

export default function Dashboard() {

  const [user, setUser] = useState({})

  useEffect(() => {

    fetch(`http://localhost:9090/api/users/6`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(data.id);
        setUser(data);
        // setUser({data: data});
      })

  }, [])


  return (
    <div className="container ">
      <div className="row">
        {


          // user.map((item) => <div className="card user-card col-12 col-sm-9 col-md-6 col-lg-3">
           
              
              <div className="card-body">
                <h5 className="card-title">User id: {user.id}</h5>
                <h5 className="card-title">Name: {user.name}</h5>
                <h5 className="card-title">Accountno: {user.accountno}</h5>
                <h5 className="card-title">balance: {user.balance}</h5>
                <h5 className="card-title">Address: {user.address}</h5>

                {/* <h1>test</h1> */}
                {/* <a href='#' className="btn btn-primary">Transfer Money</a> */}
              
              <AddContact/>
              <Gpay/>
            </div>
          // </div>)
        }
      </div>
    </div>
  )
}
