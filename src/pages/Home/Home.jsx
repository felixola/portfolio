import React from 'react'
import Header from '../../components/Header/Header';
import { 
  Box, 
  Grid, 
  Typography, 
  Button, 
  Stack,
  Divider,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/ThemeCustom';
import { styled } from '@mui/material/styles';
import portrait from '../../assets/images/Text-messages-[remix].gif';
import GitHubIcon from '@mui/icons-material/GitHub';
import Accord from '../../components/UI/AccordionStuff';
import smileys from '../../assets/images/icons8-smile-64.png';
import './Home.css';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '../../components/Footer/Footer';



const HireMe = styled(Button)({
  border: '1px solid #25316D',
  width: '100px',
  boxShadow: 'none',
  backgroundColor: '#354259',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const SendMsg = styled(Button)({
  border: '1px solid #25316D',
  width: '150px',
  boxShadow: 'none',
  backgroundColor: '#25316D',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const DownloadCv = styled(Button)({
  border: '1px solid #25316D',
  width: '150px',
  boxShadow: 'none',
  backgroundColor: '#151F28',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
});


const Home = () => {

  return (

    <ThemeProvider theme={theme}>


        <Header />

        <Divider />
       

        <Box sx={{ backgroundColor: '#FFFFFF'}}>

          <Grid container>

            <Grid item md={6}>

              <Stack spacing={2} direction='column' px='80px'>

                <Typography mt='90px' variant='h5'> Hi, I'm <br /> <span style={{fontSize:'50px', lineHeight: '70px', fontWeight: 800}}>Mobolaku Felix</span> <br />
                A Full stack web developer
                 </Typography>

                <Typography align='left' sx={{ marginTop: '20px !important'}}>Contrary to popular belief, 
                  Lorem Ipsum is not simply  <br /> random text.  
                  It has roots in a piece of classical   
                  Latin  <br /> literature from 45 BC,  
                  making it over 2000 years old.</Typography>

                  <Stack direction='row' spacing={2}>

                  <HireMe variant='contained'>Hire Me</HireMe>

                  <Button variant='text'  sx={{
                          color: '#D36B00', 
                          width: '100px', 
                          fontWeight: 700,
                          fontSize: '15px', 
                          textTransform: 'none',
                          }}>Connect</Button>
                  
                  </Stack>
                
                  <GitHubIcon />

                </Stack>

            </Grid>


            <Grid item md={6} align='center'>
         
              <img src={portrait} alt='portrait' style={{height: '350px', borderRadius: '20px', marginTop: '40px'}}/>

            </Grid>
          </Grid>

        </Box>

       {/* <Divider /> */}


       {/* Details */}
       <Box container sx={{ }} mt='40px'>

         <Typography align='center' variant='h4' fontWeight='800'>Specializations</Typography>
         <Typography align='center' variant='subtitle1' >
           Html, Css, Javascript, Reactjs, Python, Django, Node.
         </Typography>
         <Typography align='center' variant='subtitle1' >
          Delivering the best designs for your site <img src={smileys} alt='smileys' className='smiley' />
         </Typography>

       </Box>


       {/* Contact Me */}

       <Box container mt='40px' width='100%'>

         <Grid container>

           <Grid item md={6} align='center'> 

           <Accord />

           </Grid>

           {/* Address and info */}

           <Grid item md={6} align='center'>
             <Box width='450px' height='400px' border='1px solid #EEF2E6' borderRadius='10px'>
               <Typography align='center' variant='h5' fontWeight='800' mt='50px'>Personal Contact</Typography> 
                          
                          {/* Profilr Section */}
               <Stack direction='row' ml='50px'  mt='20px' spacing={4}>
               <Typography>Name:</Typography>
               <Typography>Mobolaku Felix</Typography>
               </Stack>

               <Stack direction='row' ml='50px'  mt='20px' spacing={4}>
               <Typography>Town:</Typography>
               <Typography>consectetur adipiscing elit. </Typography>
               </Stack>

               <Stack direction='row' ml='50px'  mt='20px' spacing={4}>
               <Typography>Email:</Typography>
               <Typography ml='10px'> adipiscing@gmail.com</Typography>
               </Stack>

               <Stack direction='row' ml='50px'  mt='20px' spacing={4}>
               <Typography>Team:</Typography>
               <Typography ml='10px'> R-dodgeQ Team</Typography>
               </Stack>
                          {/* Send Message button */}
               <SendMsg variant='contained' sx={{ marginTop: '40px'}}>Send Message</SendMsg>
             </Box>

           </Grid>
         </Grid>   
       </Box>


            {/* Download CV */}
       <Box width='100%' mt='50px' align='center' sx={{ display: 'flex', justifyContent: 'center'}}>
       <DownloadCv variant='outlined' endIcon={<DownloadIcon />}>Download CV</DownloadCv>
       </Box>


       <Divider  sx={{marginTop: '50px'}}/>

       {/* Footer */}
       <Footer />

    </ThemeProvider >
  )
}

export default Home