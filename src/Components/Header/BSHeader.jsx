import React from 'react'
import { Link } from 'react-router-dom'
import './BSHeader.css'
import { useNavigate } from "react-router-dom";

export default function BSHeader() {

  const useremail = localStorage.getItem('userName');
  const navigate = useNavigate();


  //function to log out

  function logout() {
    localStorage.removeItem('jwt_token');
    navigate("/login")
  }


  //header starts here
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-light user-navbar ">
        <div class="container-fluid">
          <a class="navbar-brand img-fluid" href="/"><img src="./assets/nwlogo.png" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse user-navbar-navbtn" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {
                localStorage.getItem('jwt_token') ?
                  <>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/contactus">Contact us</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/aboutus">About us</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/services">Services</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/contactlist">Contact List</Link>
                    </li>

                  </>

                  :
                  <>
                    
                    
                    <li class="nav-item">
                      <Link class="nav-link active" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/signup">Sign Up</Link>
                    </li>

                    
                  </>
              }
            </ul>


            {localStorage.getItem('jwt_token') ?
              <div class="dropdown">
                <button class="btn dropdown-toggle" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {useremail}
                </button>

                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/login" onClick={logout}>Logout</a></li>
                </ul>
              </div>
              : null
            }
          </div>
        </div>
      </nav>



    </div>
  )
}
