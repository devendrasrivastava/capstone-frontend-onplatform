import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {         //added for snackbar
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function AddContact() {

    const [open, setOpen] = React.useState(false);   //added for snackbar
    const handleClick = () => { }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };





    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            city: "",
            phone: ""
        },
        onSubmit: values => {
            // console.log(values);
            fetch("http://localhost:3004/contacts", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setOpen(true);
                    // navigate("/contactlist")

                })
                .catch((e) => {
                    console.log("Catch block executed")
                    .finally(console.log("Finally executed"))
                    
                });
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, "Name is too short")
                .max(30, "Name is too long")
                .matches(/^[a-z A-Z.]{2,}$/, "Please enter valid Name")
                .required("Firstname cannot be left blank"),
            accountnumber: yup.string()
                .min(3, "Account Number is too short")
                .max(10, "Account Number is too long")
                .required("Account Number cannot be left blank")
                .matches(/^[0-9]{8}$/, "Enter valid 8 digit account number"),
            email: yup.string()
                .email("Invalid email address")
                .required("Email cannot be left blank"),
            ifsc: yup.string()
                .required("IFSC Code cannot be left blank")
                .matches(/^[0-9a-zA-Z.]{10}$/, "Please enter valid IFSC Code"),
            phone: yup.string()
                .matches(/^[6-9][0-9]{9}$/, "Add 10 digit Mobile Number")
                .required("Phone cannot be left blank"),

        })
    })

    useEffect(() => {
        fetch("http://localhost:9000/auth/isAuthenticated", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.status===401){
                //     navigate("/login")
                // }

                if (!data.isAuthenticated) {
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
                                <input id="firstname" name='firstname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} className="form-control form-control-sm" placeholder="Name" />
                                {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span> : null}
                            </div>
                            <div className="mt-3">
                                <input id="accountnumber" name='accountnumber' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.accountnumber} className="form-control form-control-sm" placeholder="Account Number" />
                                {formik.errors.accountnumber && formik.touched.accountnumber ? <span className='text-danger'>{formik.errors.accountnumber}</span> : null}
                            </div>
                            <div className="mt-3">
                                <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                                {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                            </div>
                            <div className="mt-3">
                                <input id="ifsc" name='ifsc' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.ifsc} placeholder="IFSC Code" />
                                {formik.errors.ifsc && formik.touched.ifsc ? <span className='text-danger'>{formik.errors.ifsc}</span> : null}
                            </div>
                            <div className="mt-3">
                                <input id="phone" name='phone' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.phone} placeholder="Phone" />
                                {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : null}
                            </div>
                            <div className="mt-2 my-4">
                                <button type="submit" className='btn user-button'> Add Customer</button>
                                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        Record Added Successfully
                                    </Alert>
                                </Snackbar>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
