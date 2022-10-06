import React from 'react'
// import * as React from 'react';
// import AppBar from '@mui/mat/erial/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Accordion, AccordionDetails, AccordionSummary, Grid, MobileStepper, Paper, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import image from './src/WhatsApp Image 2022-10-06 at 12.23.51.jpeg';

const HomePage = () => {
  const pages = ['About Us', 'Insights', 'FAQs','Contact'];
  const [expanded, setExpanded] = React.useState('panel1');
  
  const images = [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
          'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bali, Indonesia',
        imgPath:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      },
      {
        label: 'Goč, Serbia',
        imgPath:
          'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ];
    
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  // function SwipeableTextMobileStepper() {
      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = images.length;
    
  
  
  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    }

  return (
    <div>
        <Grid container  justifyContent="space-between" >

<Grid item xs={3}  style={{backgroundColor:"#4593"}} >
           <Toolbar  >
               <img src={image}alt="logo" width={100px} height={100px} />
           </Toolbar>
</Grid>

<Grid item xs={9}>

    <Box style={{backgroundColor:"black"}} >
        <Box     style={{justifyContent:"right",marginRight:"80px", }}
                  sx={{  display: { xs: 'flex', md: 'flex' } }}
                 >
 {pages.map((page) => (
         <Button 
           sx={{ my: 2, color: 'white', display: 'flex' }}
   >
        {page}
   </Button>
))}
    </Box>

</Box>
</Grid>

<Grid container >
   <Grid item xs={12} >
           
       <Typography variant='h2'>
           WE ARE A TEACH CREATING COMPANY 
           ***************************
           ******************
{/* The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham */}
       </Typography>

   </Grid>

</Grid>


<Grid container >
   
   <Grid item xs={4} justify="space-between"  style={{backgroundColor:"#4733",height:"100px"}} >
       image 1
   </Grid>
   
   <Grid item xs={4} justify="space-between"  style={{backgroundColor:"#1163"}} >
       image 2
   </Grid>
   <Grid item xs={4} justify="space-between"  style={{backgroundColor:"#9263"}} >
       image 3
   </Grid>

</Grid>

<Grid container  >
   
   <Grid item xs={12} >
   <Typography >
           <h2>
           Area Of Expertisee
           </h2>
   </Typography>
   </Grid>

   <Grid item xs={12} >
   <Typography >
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
   </Typography>
   </Grid>


</Grid>
{/* accordian  */}
<Grid container>
<Grid item xs={4}   >
                                       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  >
                               <AccordionSummary style={{backgroundColor:"#80dfff"}} aria-controls="panel1d-content" id="panel1d-header">
                               <Typography  >Colapsible Group Item #1</Typography>
                               </AccordionSummary>
                               <AccordionDetails>
                               <Typography  >
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                   sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                   sit amet blandit leo lobortis eget.
                               </Typography>
                               </AccordionDetails>
                                   </Accordion>
                                   <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                       <AccordionSummary style={{backgroundColor:"#ffeb99"}} aria-controls="panel2d-content" id="panel2d-header">
                                       <Typography>Collapsible Group Item #2</Typography>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                       <Typography>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                           malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                           sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                           sit amet blandit leo lobortis eget.
                                       </Typography>
                                       </AccordionDetails>
                                   </Accordion>
                                   <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                       <AccordionSummary style={{backgroundColor:"#b3ffe0"}} aria-controls="panel3d-content" id="panel3d-header">
                                       <Typography>Collapsible Group Item #3</Typography>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                       <Typography>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                           malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                           sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                           sit amet blandit leo lobortis eget.
                                       </Typography>
                                       </AccordionDetails>
                                   </Accordion>

</Grid>

{/* <Grid item xs={8} style={{backgroundColor:""}} >

   <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
<Paper
square
elevation={0}
sx={{
display: 'flex',
alignItems: 'center',
height: 40,
pl: 2,
bgcolor: 'background.default',
}}
>
<Typography>{images[activeStep].label}</Typography>
</Paper>
<AutoPlaySwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={activeStep}
onChangeIndex={handleStepChange}
enableMouseEvents
>
{images.map((step, index) => (
<div key={step.label}>
{Math.abs(activeStep - index) <= 2 ? (
 <Box
   component="img"
   sx={{
     height: 255,
     display: 'block',
     maxWidth: 400,
     overflow: 'hidden',
     width: '100%',
   }}
   src={step.imgPath}
   alt={step.label}
 />
) : null}
</div>
))}
</AutoPlaySwipeableViews>
<MobileStepper
steps={maxSteps}
position="static"
activeStep={activeStep}
nextButton={
<Button
size="small"
onClick={handleNext}
disabled={activeStep === maxSteps - 1}
>
Next
{theme.direction === 'rtl' ? (
 <KeyboardArrowLeft />
) : (
 <KeyboardArrowRight />
)}
</Button>
}
backButton={
<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
{theme.direction === 'rtl' ? (
 <KeyboardArrowRight />
) : (
 <KeyboardArrowLeft />
)}
Back
</Button>
}
/>
</Box>
   </Grid> */}
</Grid>

<Grid xs={12} style={{backgroundColor:"#8765",height:"100px"}}>
<Typography>Become A PowerHouse L The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </Typography>
<Box style={{textAlign:"center"}} >
<Button>SUBSCRIBE</Button>
<Button>SEND</Button>
</Box>
</Grid>

<Grid container >
<Grid item xs={6} style={{backgroundColor:"#5738",height:"100px"}} >Product 1 </Grid>
<Grid item xs={6} style={{backgroundColor:"#9738"}} >Product 2</Grid>

</Grid>
{/* INSIGHTS */}
<Grid container>

<Grid item xs={11} >
<Box style={{textAlign:"center",}} >
   <Typography >INSIGHTS</Typography>
<Typography>Browse our Insights and see how climate change and sustainability are impacted by the consumer-centric industries and how brands are bringing in the change. Together, we can make a difference!</Typography>
</Box>
</Grid>

<Grid item xs={1}>
<Button variant='outlined'>View all</Button>
</Grid>

</Grid>

<Grid container >
<Grid item xs={4} style={{backgroundColor:"#287",height:"80px"}} >  
P1
</Grid>
<Grid item xs={4} style={{backgroundColor:"#1187",height:"80px"}} >  
P2
</Grid>
<Grid item xs={4} style={{backgroundColor:"#987",height:"80px"}} >  
P3
</Grid>

</Grid>
{/* footer */}
<Grid container>

<Grid item xs={12} >
<Box style={{backgroundColor:"black",height:"100px"}}>
   
   <Button   >about us</Button>
   <Button>privacy policy</Button>
   <Button>terms and condition</Button>
   <Button>contact</Button>
   </Box>

</Grid>

</Grid>

</Grid>
    </div>
  )
}

export default HomePage