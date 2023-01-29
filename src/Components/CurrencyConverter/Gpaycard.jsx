import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Gpay from '../Gpay/Gpay';

export default function Gpaycard() {
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../assets/gpay.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <Gpay/>
      </MDBCardBody>
    </MDBCard>
  );
}