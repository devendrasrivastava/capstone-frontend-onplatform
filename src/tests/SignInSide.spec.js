import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInSide from '../Components/LoginPage/SignInSide';
import { BrowserRouter } from 'react-router-dom';




test('render of email field should be correct',()=>{
  render(<SignInSide/>,{wrapper: BrowserRouter});
  const usernameField = screen.getByText("Email Address");
  expect(usernameField).toBeInTheDocument();
})

test('render of email field label should be correct',()=>{
  render(<SignInSide/>,{wrapper: BrowserRouter});
  const useremailField = screen.getByLabelText("Email Address *");
  expect(useremailField).toBeInTheDocument();
})

test('render of password field should be correct',()=>{
  render(<SignInSide/>,{wrapper: BrowserRouter});
  const userpassField = screen.getByText("Password");
  expect(userpassField).toBeInTheDocument();
})




export default SignInSide