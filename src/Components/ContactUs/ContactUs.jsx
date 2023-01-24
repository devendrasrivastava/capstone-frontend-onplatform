import * as React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SimpleAccordion from '../Accordian/Accordian';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import './ContactUs.css'


const cards = [1];

const theme = createTheme();

export default function ContactUs() {

  const navigate = useNavigate();  //variable to protect the page

  useEffect(() => {                                         //coding start to protect the page
    fetch("http://localhost:9000/auth/isAuthenticated", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            

            if (!data.isAuthenticated) {
                navigate("/login")
            }
        })
}, [])


  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container user-contactus">
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Happy to Help!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            We’re here to help – get in touch with us using the contact details below
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" style={{backgroundColor:'#5E10B1'}}>Call Us</Button>
              <Button variant="outlined"style={{backgroundColor:'#5E10B1', color:'white', border:'purple'}}>Mail Us</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      
                    height: '60vh'
                    }}
                    image="./assets/contact1.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center', fontWeight:'bold'}}>
                    NatWest Group general enquiries

                    </Typography>
                    <Typography style={{textAlign:'center'}}>
                    For general enquiries please try our contact us page or call us on one of the numbers below.
                    </Typography>
    <Typography style={{textAlign:'center'}}>                
Call Telephone Banking Call us on: 03457 888 444. Overseas: 0345 030 3605. 
</Typography>
    <Typography style={{textAlign:'center'}}>
You can also write to us at 250 Bishopsgate, London, EC2M 4AA.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </div>
<div className="container">
<SimpleAccordion/>
</div>

    </ThemeProvider>
  );
}

