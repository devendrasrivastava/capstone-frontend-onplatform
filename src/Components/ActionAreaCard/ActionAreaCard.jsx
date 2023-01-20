import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard1() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'} style={{color: "#42145F"}}>
            
          <h4> Check out our Exciting new Mobile App !</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
            
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="900"
          image="./assets/mobile.png"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}