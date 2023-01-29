import React,{useEffect} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

export default function AddContact() {
    const navigate = useNavigate();
    const formik=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            city:"",
            phone:""
        },
        onSubmit:values =>{
            // console.log(values);
            fetch("http://localhost:3004/contacts",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch((e)=>console.log("Catch block executed"))
            .finally(console.log("Finally executed"))
        },
        validationSchema:yup.object().shape({
            firstname:yup.string()
            .min(3,"First name is too short")
            .max(10,"First name is too long")
            .required("Firstname cannot be left blank"),
            lastname:yup.string()
            .min(3,"Last name is too short")
            .max(10,"Last name is too long")
            .required("lastname cannot be left blank"),
            email:yup.string()
            .email("Invalid email address")
            .required("Email cannot be left blank"),
            city:yup.string()
            .required("City cannot be left blank"),
            phone:yup.string()
            .required("City cannot be left blank")
        })
    })

    useEffect(() => {
     fetch("http://localhost:9000/auth/isAuthenticated",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt_token")}`
        }
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        // if(data.status===401){
        //     navigate("/login")
        // }

        if(!data.isAuthenticated){
            navigate("/login")
        }
     })
    }, [])
    
  return (
    <>
   
    
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="bg-dark text-light py-3 mt-3 text-center rounded">
                    <h2>Add Payee</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-3">
                    <input id="firstname" name='firstname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} className="form-control form-control-sm" placeholder="First Name"/>
                    {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span>:null}
                    </div>
                    <div className="mt-3">
                    <input id="lastname" name='lastname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} className="form-control form-control-sm" placeholder="Last Name"/>
                    {formik.errors.lastname  && formik.touched.lastname? <span className='text-danger'>{formik.errors.lastname}</span>:null}
                    </div>
                    <div className="mt-3">
                    <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur}className="form-control  form-control-sm" value={formik.values.email} placeholder="Email"/>
                    {formik.errors.email && formik.touched.email? <span className='text-danger'>{formik.errors.email}</span>:null}
                    </div>
                    <div className="mt-3">
                    <input id="city" name='city' type="text" onChange={formik.handleChange}onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.city}placeholder="city"/>
                    {formik.errors.city && formik.touched.city? <span className='text-danger'>{formik.errors.city}</span>:null}
                    </div>
                    <div className="mt-3">
                    <input id="phone" name='phone' type="number" onChange={formik.handleChange}onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.phone} placeholder="Phone"/>
                    {formik.errors.phone && formik.touched.phone? <span className='text-danger'>{formik.errors.phone}</span>:null}
                    </div>
                    <div className="mt-4">
                    <button type="submit" className='btn user-button'> Add Customer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
