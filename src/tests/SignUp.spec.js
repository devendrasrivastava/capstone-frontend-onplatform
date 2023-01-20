import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../Components/SignUp/SignUp';



test('render of Sign Up field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByText("Sign Up");
  expect(usersignupField).toBeInTheDocument();
})

test('render of First name field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const userfnameField = screen.getByLabelText("First Name *");
  expect(userfnameField).toBeInTheDocument();
})

test('render of Last Name field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const userlnameField = screen.getByLabelText("Last Name *");
  expect(userlnameField).toBeInTheDocument();
})

test('render of City field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usercityField = screen.getByLabelText("City *");
  expect(usercityField).toBeInTheDocument();
})

test('render of Email field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const useremailField = screen.getByLabelText("Email Address *");
  expect(useremailField).toBeInTheDocument();
})



export default SignUp