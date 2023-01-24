import React from 'react';
import './Footer.css';
import { useNavigate } from "react-router-dom";
import Timer1 from '../../Timer';

export default function Footer() {

  const navigate = useNavigate();

  function logout() {
    navigate("/login")
    localStorage.removeItem('jwt_token');

  }



  if (localStorage.getItem('jwt_token')) {
    setTimeout(logout, 122000);
  }


  return (
    <div className='footermargin'>

<footer>
  <div class="social">
    
    <ul class="wrapper">
      <a href="#" target="_blank">
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span><i class="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">GitHub</span>
          <span><i class="fab fa-github"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span><i class="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span><i class="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span><i class="fab fa-twitter"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">CodePen</span>
          <span><i class="fab fa-codepen"></i></span>
        </li>
      </a>
    </ul>
  </div>
  <div class="final_text"></div>
  <p>Copyright &copy; All rights reserved, 2023
    <br/>Designed by Deepanker & Devendra 
  </p>
</footer>



    </div>
  )
}
