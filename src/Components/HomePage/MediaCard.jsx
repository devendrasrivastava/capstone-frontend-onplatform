import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './MediaCard.css';

export default function MediaCard() {
  return (

   <div className="container">
    <div className="row">
      <div className="col-12 col-sm-8 col-md-4 col-lg-4 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardMedia
        component="img"
        height="240"
        image="./assets/card1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Easy and Fast Payment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pay at any Malls, Cinema or any Merchant outlet form your mobile by just scanning a QR code. Payment gets done quicly and securely.
        </Typography>
      </CardContent>
      </Card>
      </div>

      <div className="col-12 col-sm-8 col-md-4 col-lg-4 my-4">
      <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardMedia
        component="img"
        height="240"
        image="./assets/card2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pay Online
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Order Food, medicine, Groceries online and pay at your doorstep online by using the app. it is fast and super secure and easy to use.
        </Typography>
      </CardContent>
      </Card>
      </div>

<div className="col-12 col-sm-8 col-md-4 col-lg-4 my-4">
<Card sx={{ maxWidth: 345 }} className='ho'>
      <CardMedia
        component="img"
        height="240"
        image="./assets/card3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Holidaying Abroad?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        No need to carry foreign currency. just pay from the app or use NatWest Debit or credit card instantly! with lowest Forex charges.
        </Typography>
      </CardContent>

    </Card>
    </div>
    </div>
    </div>
    
  );
}