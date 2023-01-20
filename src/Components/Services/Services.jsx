import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Services.css'
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

export default function ActionAreaCard() {

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
    <div className="container user-aboutus">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/transfer.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Online Transfer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Load money into your wallet, Transfer money to your friends, families on the go.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/forex.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Forex Transactions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Make forex transactions on the go at lowest exchange rates direct from your phone.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/online.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Online Shopping
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Buy stuff online and pay from the wallet or use your NatWest Debit or Credit Card on the go.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/medicine.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Buy Medicine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Order medicines from the app itself and pay online or at your doorstep using your mobile.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>

    <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/cinema.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Entertainment
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pay accross all multiplexes and get exciting discounts and offers. check now.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/retail.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Retails outlets
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Not just Online, you can pay offline as well at all leading retail stores and Malls.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/food.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Food and beverages
          </Typography>
          <Typography variant="body2" color="text.secondary">
          NatWest Pay is accepted at all leading Restaurants and food outlets.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/free.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          No Charges !!!
          </Typography>
          <Typography variant="body2" color="text.secondary">
          NatWest Pay is completely free to use, we dont charge any monthly or annual fee.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>
    </div>

    <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/rewards.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Exiciting Rewards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You earn Rewards points for each transaction you make on the wallet. which can be redeemed any time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/insur.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Buy Insurane
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Not just money service, you can also buy vehicle and health insurance in the app too.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/credit.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Check Credit Score
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check your credit score and apply for Credit Cards and Loans. No additional paperwork is required.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-3 col-xl-3 my-4">
    <Card sx={{ maxWidth: 345 }} className='ho'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/qr.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Download now
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Just scan the QR code above or visit <a href="https://www.natwest.com/" target={'_blank'}>www.natwest.com/nwpay</a> to download the app.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>


    </div>
  );
}