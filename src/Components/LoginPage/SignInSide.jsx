import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './LoginPage.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { WidthNormal } from '@mui/icons-material';



const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {         //added for snackbar
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function SignInSide() {

  const [values, setValues] = React.useState({           //added for show password 
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
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log("submit");
      fetch("http://localhost:8765/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.jwt_token);
        console.log(data.email);
        console.log(data.status)
                  

        if (data.status === 200) {
        localStorage.setItem("jwt_token", data.jwt_token)  //use session storage to remove token on closure of browser
        localStorage.setItem("userName", data.email) //to get data of user in the state, we can now print user details when they log in
        
        navigate("/")

        }
      })
      .catch((error)=>{
        setOpen(true);
    });
  },

  
    validationSchema: yup.object().shape({
      email: yup.string()
        .email("Invalid email address")
        .required("Email cannot be left blank"),
      password: yup.string()
        .required("Password cannot be left blank"),

    })
  })

  const handleChange = (e) => {
    e.preventDefault();
  };


  return (
    <div data-testid="loginbodyclass" className="container user-SignInSide" >
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={false}
            md={7}

            sx={{
              backgroundImage: 'url(./assets/login2.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: '#40135C' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  onChange={formik.handleChange} onBlur={formik.blur}
                  value={formik.values.email}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
               

<FormControl fullWidth sx={{ mt: 1}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}>
                <InputLabel htmlFor="outlined-adornment-password" variant="outlined" >Password</InputLabel>
                <OutlinedInput
                  id="password"
                  required
                  fullWidth

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


                <Grid container>
                  <Grid item xs>
                    {/* <Link href="/forgetpassword" variant="body2">
                      Forgot password?
                    </Link>  */}
                    <Stack spacing={2} sx={{ width: '100%' }}>
                      <Button
                        sx={{ mt: 3, mb: 2, backgroundColor: "#40135C" }}
                        type="submit"
                        variant="contained"
                        onClick={handleClick}>
                        Sign In
                      </Button>
                      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                          You have entered an invalid username or password !
                        </Alert>
                      </Snackbar>
                    </Stack>

                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}