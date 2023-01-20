import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SignUp from './Components/SignUp/SignUp';
import ContactUs from './Components/ContactUs/ContactUs';
import Services from './Components/Services/Services';
import ActionAreaCard from './Components/AboutUs/AboutUs';
import Register from './Components/ForgetPassword/ForgetPassword';
import BSHeader from './Components/Header/BSHeader';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/LoginPage/LoginPage';





function App() {
  return (
    <div>
      
      <BrowserRouter>
        <BSHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<ActionAreaCard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<Register />} />
        </Routes>
          
          <Footer/>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
