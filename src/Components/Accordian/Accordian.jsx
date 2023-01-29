import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Call Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#42145F"}}>
           <h4><strong>Personal Banking</strong> 1800 270 1818 </h4> 
           <h4><strong>NatWest Pay Wallet</strong> 1800 270 1919 </h4> 
           <h4><strong>Loan</strong> 1800 270 2020 </h4> 
           <h4><strong>Insurance</strong> 1800 270 2121 </h4> 
           <h4><strong>Credit Card</strong> 1800 270 2222 </h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Email Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#42145F"}}>
         <h5><strong> Personal Banking </strong>- support@natwest.com</h5>
<h5><strong> NatWest Pay Wallet </strong> - nwpaywallet@natwest.com</h5>
<h5><strong> Loan </strong>- lending@natwest.com</h5>
<h5><strong> Insurance</strong> - insurance@natwest.com</h5>
<h5><strong> Credit Card</strong>- creditcard@natwest.com</h5>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Chat with us</h5></Typography>
        </AccordionSummary>
        <Typography style={{color: "#42145F"}}>
        <Link to='/chatbot' className="btn user-button">Chat with us</Link>
          </Typography>
      </Accordion>
    </div>
  );
}
