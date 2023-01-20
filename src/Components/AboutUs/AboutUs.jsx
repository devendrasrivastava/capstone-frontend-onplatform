import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

export default function MultiActionAreaCard() {

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
            // if(data.status===401){
            //     navigate("/login")
            // }

            if (!data.isAuthenticated) {
                navigate("/login")
            }
        })
}, [])


  return (
    <div className='user-aboutus'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
    <Card sx={{ maxWidth: 500 }}>
    <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mobile App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Just download the NatWest Pay Wallet Mobile app and then forget about carrying cash or cards. Make all your transactions on the go with a single click.
          </Typography>
        </CardContent>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="./assets/mabout.png"
          alt="green iguana"
        />
        
      </CardActionArea>
      
    </Card>
    </div>


    <div className="col-12 col-md-6">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="./assets/mdesk.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Desktop App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We have the app for your laptops as well. just install and see how much faster it is from the conventional Net Banking and with added features. Try now.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>

    </div>
    </div>

<div className="container my-4">
  <div className="row">
    <div className="col">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./assets/abtt.gif"
          alt="green iguana"
        />
        
      </CardActionArea>
    </Card>
    </div>

    <div className="col">
    <Card sx={{ maxWidth: 500 }}>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/900x600/?bank,card"
          alt="green iguana"
        />
        
      </CardActionArea>
    </Card>

    </div>
    </div>
    </div>
    </div>
  );
}