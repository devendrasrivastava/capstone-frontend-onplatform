import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'
import ActionAreaCard1 from '../ActionAreaCard/ActionAreaCard';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";



const theme = createTheme();


const Alert = React.forwardRef(function Alert(props, ref) {                 // 1 added for snack bar
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function SignUp() {


  const [values, setValues] = React.useState({        //for password show field
    password: "",
    showPassword: false
  });
  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 


  const [open, setOpen] = React.useState(false);   //2 added for snack bars
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
      name: "",
      email: "",
      accountno: "",
      address: "",
      mobile: "",
      password: ""
    },
    onSubmit: values => {
      // console.log(values);
      fetch("http://localhost:9090/api/v1/auth/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.id) {
            navigate("/login")
          }
          else if(data.status === 500){
            setOpen(true);
          }

          

        })
        // .catch((e) => {
        //   console.log("Catch block executed")
        //   setOpen(true)
        // })

        

        
    },

    
    validationSchema: yup.object().shape({
      name: yup.string()
        .min(3, "Name is too short")
        .max(40, "Name is too long")
        .matches(/^[a-z A-Z.]{2,}$/, "Please enter valid First Name")
        .required("Firstname cannot be left blank"),


      email: yup.string()
        .email("Invalid email address")
        .required("Email cannot be left blank"),

      address: yup.string()
        .min(5, "Address is too short")
        .required("Address cannot be left blank")
        .matches(/^[a-z A-Z.,]{2,}$/, "Please enter valid address"),

      accountno: yup.string()
      .required("account cannot be left blank")
      .matches(/^[0-9]{8}$/, "Please enter valid 8 digit account number"),

      mobile: yup.string()
        .required("Mobile cannot be left blank")
        .matches(/^[6-9][0-9]{9}$/, "Please enter valid 10 digit mobile number."),


      password: yup.string()
        .required("Password cannot be left blank")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."),

    
    })
  })

  const handleChange = (e) => {
    e.preventDefault();
  };


  return (
    <div className="container user-signup">

      <div className="row">
        <div className="col-12 col-md-6">
          <ActionAreaCard1 />

        </div>
        <div className="col-12 col-md-6">

          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}

                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        type="text"
                        autoFocus

                      />
                      {formik.errors.name && formik.touched.name ? <span className='text-danger'>{formik.errors.name}</span> : null}

                    </Grid>
                    

                    <Grid item xs={12}>
                      <TextField
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        type="text"


                      />
                      {formik.errors.address && formik.touched.address ? <span className='text-danger'>{formik.errors.address}</span> : null}
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.accountno}
                        required
                        fullWidth
                        id="accountno"
                        label="Account Number"
                        name="accountno"
                        type="text"


                      />
                      {formik.errors.accountno && formik.touched.accountno ? <span className='text-danger'>{formik.errors.accountno}</span> : null}
                    </Grid>
                    

                    <Grid item xs={12}>
                      <TextField
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile}
                        required
                        fullWidth
                        id="mobile"
                        label="Mobile"
                        name="mobile"
                        type="text"

                      />
                      {formik.errors.mobile && formik.touched.mobile ? <span className='text-danger'>{formik.errors.mobile}</span> : null}
                    </Grid>


                    <Grid item xs={12}>
                      <TextField
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"


                      />
                      {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                    </Grid>



                    <Grid item xs={12}>
                      <FormControl fullWidth sx={{ mt: 1 }} variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.password}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          fullWidth
                          required
                          onCopy={handleChange}
                          onPaste={handleChange}
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange1("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                    </Grid>
                  

                  </Grid>


                  <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ backgroundColor: "#42145F" }}
                    >
                      Sign Up
                    </Button>
                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Email address already exist !
                      </Alert>
                    </Snackbar>
                  </Stack>


                  <Grid container justifyContent="flex-start">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>

      </div>
    </div>
  );
}