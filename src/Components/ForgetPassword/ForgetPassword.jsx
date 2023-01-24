import React from 'react';
import './ForgetPassword.css'
import { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


export default function Register() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmpassword, setConfirmPassword] = useState('')
   

   // vallidation used
   const PasswordHandeller = () => {
      var cout = 0;

      if (email === "") {
         document.getElementById("msg").innerHTML = "Email Can't be Empty";
      }
      else if (password === "") {
         document.getElementById("msg").innerHTML = "Password Can't be Empty";
      }
      else if (confirmpassword === "") {
         document.getElementById("msg").innerHTML = "Confirm Password Can't be Empty";
      }
      else if (password.length <= 6) {
         document.getElementById("msg").innerHTML = "Password is too Small";
      }
      else {
         // password entered should be same as confirmed password and fetching from json server
         if (password === confirmpassword) {
            fetch("http://localhost:3001/register")
               .then(res => res.json())
               .then(data => {
                  data.map(item => {

                     console.log(item.email);
                     console.log(item.password);

                     if (item.email === email) {
                        cout = cout + 1;
                        fetch(`http://localhost:3001/Register/${item.id}`, {
                           method: "PUT",
                           headers: {
                              "Content-Type": "application/json",
                           },
                           body: JSON.stringify({ email, password }),
                           
                        })
                           .then((res) => {
                              return res.json();
                           })
                           .then((data) => {
                              console.log(data);
                           })
                           .catch(err => console.error(err))
                     }
                  })

                  // if user is registered then password will be updated otherwise not
                  if (cout === 0) {
                     document.getElementById("msg").innerHTML = "Not a Registered User !";
                  }
                  else {
                     document.getElementById("msg").innerHTML = "Password Updated Successfully !";
                     
                  }
               })
               .catch(err => console.error(err))
         }
         else {
            document.getElementById("msg").innerHTML = "password and Confirm Password not Matched";
         }
      }
   }
   return (
      <>

         {/* ui part of the forget password */}
         <div className="container-fluid user-forget-password">
            <div className="row">
               <div className="col-sm-12 md-6 col-lg-6 mt-4">
                  <img src="./assets/forgo.jpeg" style={{ width: '100%' }} className="img-fluid"/>
               </div>
               <div className="col-sm-12 md-6 col-lg-5">
                  {/* <h1 className="mb-2 mt-4">Reset Password</h1> */}
                  <img src="./assets/nwlogo.png" alt="" className='img-fluid' id="nwlogo" />

                  <div className="mb-2" id="msg" style={{ color: 'red' }}>

                  </div>
                  {/* <div className="mb-2">
                     <label>UserName</label>
                     <input type="text" id="user" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                  </div> */}
                  <div className="mb-2">
                     <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                     <div class="input-group">
                        
                        <MDBInput label='User Email' type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                        <br />
                     </div>
                  </div>

                  <div className="mb-2">
                     <label class="visually-hidden" for="autoSizingInputGroup"></label>
                     <div class="input-group">
                        
                        <MDBInput label='Password' type="password" id="pass" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                     <br />
                     </div>
                  </div>


                  <div className="mb-4">

                     <label class="visually-hidden" for="autoSizingInputGroup"></label>
                     <div class="input-group">
                        
                        <MDBInput label='Confirm Password' id="confirm" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                     <br />
                     </div>
                  </div>

                  <div className="mb-2">
                     <button id="forgetPass" className="btn btn-info col-12" onClick={PasswordHandeller}>Reset Password</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
