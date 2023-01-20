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





    </div>
  )
}
