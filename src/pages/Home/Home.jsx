import React from 'react'
// import Header from '../../components/Header/Header';
import { 
  Box, 
  Grid, 
  Typography, 
  Button, 
  Stack,
  TextField,
  Divider,
  Link,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/ThemeCustom';
import { styled } from '@mui/material/styles';
import portrait from '../../assets/images/imagee.png';
// import GitHubIcon from '@mui/icons-material/GitHub';
import Accord from '../../components/UI/AccordionStuff';
import smileys from '../../assets/images/icons8-smile-64.png';
import './Home.css';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '../../components/Footer/Footer';



const HireMe = styled(Button)({
  width: '100px',
  boxShadow: 'none',
  backgroundColor: '#6246EA',
  border: 'none',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4525E3',
  },
});

const SendMsg = styled(Button)({
  width: '300px',
  borderRadius: '20px',
  boxShadow: 'none',
  backgroundColor: '#6246EA',
  border: 'none',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4525E3',
  },
});

const DownloadCv = styled(Button)({
  width: '150px',
  boxShadow: 'none',
  backgroundColor: '#6246EA',
  border: 'none',
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4525E3',
  },
});


const CustomTextField = styled(TextField)({
  '&:focus': {
    borderColor: '#000000',
  },
});


const Home = () => {

  return (

    <ThemeProvider theme={theme}>

        <Box sx={{ backgroundColor: '#FFFFFF'}}>

          <Grid container>

            <Grid item md={6} xs={12}>

              <Stack spacing={2} direction='column' sx={{paddingLeft: {xs: 'none', md: '80px'}}}>

                <Typography mt='90px' variant='h5'sx={{textAlign: {xs: 'center', md: 'left'}}}> Hi, I'm <br /> <span style={{fontSize:'50px', lineHeight: '70px', fontWeight: 800}}>Mobolaku Felix</span> 
                 </Typography>

                <Typography sx={{ marginTop: '20px !important', textAlign: {xs: 'center', md: 'left'}}}>I'm a Fullstack web developer and UI/UX designer <br />
                          I enjoy creating user-friendly and responsive websites
                 </Typography>

                  <Stack direction='row' spacing={2} sx={{display: 'flex',justifyContent: {xs: 'center', md: 'left'}, alignItems: 'center', }}>

                  <Link href=' https://www.fiverr.com/felix_olamide' color='inherit'  underline="none" ><HireMe variant='contained'>Hire Me</HireMe></Link> 

                  <Button variant='text'  sx={{
                          color: '#D36B00', 
                          width: '100px', 
                          fontWeight: 700,
                          fontSize: '15px', 
                          textTransform: 'none',
                          }} href='https://www.linkedin.com/in/mobolaku-felix-2a0907244'>Connect</Button>
                  
                  </Stack>
                
                  {/* <GitHubIcon /> */}

                          </Stack>

            </Grid>


            <Grid item md={6} xs={12}align='center'>
         
              <img src={portrait} alt='portrait' style={{height: '400px', borderRadius: '20px', marginTop: '-70px', }}/>

            </Grid>
          </Grid>

        </Box>

       {/* <Divider /> */}


       {/* Details */}
       <Box container sx={{ }} mt='40px'>

         <Typography align='center' variant='h4' fontWeight='800'>Specializations</Typography>
         <Typography align='center' variant='subtitle1' >
           Html, Css, Javascript, Reactjs, Python, Django, PHP and MySql
         </Typography>
         <Typography align='center' variant='subtitle1' >
          Delivering the best designs for your site <img src={smileys} alt='smileys' className='smiley' />
         </Typography>

       </Box>


       {/* Contact Me */}

       <Box container mt='40px' width='100%'>

         <Grid container>

           <Grid item md={6} xs={12} align='center'> 

           <Accord />

           </Grid>


               {/* Download CV */}
       <Box width='100%' mt='50px' align='center' sx={{ display: {xs: 'flex', md: 'none'}, justifyContent: 'center'}}>
       <DownloadCv variant='outlined' endIcon={<DownloadIcon />}>Download CV</DownloadCv>
       </Box>

           {/* Address and info */}

           <Grid item md={6} xs={12} align='center'>
             <Box height='500px' border='1px solid #EEF2E6' borderRadius='5px' sx={{ width: {xs: '364px', md: '450px'}, marginTop: {xs: '80px', md: '0px'}}}>
               <Typography align='center' variant='h5' fontWeight='800' mt='70px'>Contact</Typography> 
                          
                          {/* Profile Section */}
               <Stack direction='row' ml='15px'  mt='20px' spacing={3}>
               <Typography>Name:</Typography>
               <CustomTextField id="standard-basic" variant="outlined" sx={{ width: {xs: "230px", md: '300px'}}} />

               </Stack>

               {/* <Stack direction='row' ml='50px'  mt='20px' spacing={4}>
               <Typography>City:</Typography>
               <Typography>Iyesi Ota, Ogun state </Typography>
               </Stack> */}

               <Stack direction='row' ml='20px'  mt='20px' spacing={3}>
               <Typography>Email:</Typography>
               <CustomTextField id="standard-basic"  variant="outlined" sx={{ width: {xs: "230px", md: '300px'}}} />
               </Stack>

               <Stack direction='row' ml='15px'  mt='20px' spacing={2}>
               <Typography>Details:</Typography>
               <CustomTextField
                    id="outlined-multiline-static"
                    
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    sx={{ width: {xs: "230px", md: '300px'}}}
                  />
               </Stack>
                          {/* Send Message button */}
               <SendMsg variant='contained' sx={{ marginTop: '40px'}}>Send Message</SendMsg>
             </Box>

           </Grid>
         </Grid>   
       </Box>


            {/* Download CV */}
       <Box width='100%' mt='50px' align='center' sx={{ display: {md: 'flex', xs: 'none'}, justifyContent: 'center'}}>
       <DownloadCv variant='outlined' endIcon={<DownloadIcon />}>Download CV</DownloadCv>
       </Box>


       <Divider  sx={{marginTop: '50px'}}/>

       {/* Footer */}
       <Footer />

    </ThemeProvider >
  )
}

export default Home