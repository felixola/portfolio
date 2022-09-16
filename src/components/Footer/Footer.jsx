import React from 'react';
import { 
    Box,
    Stack,
    Grid,
    Typography,
} from '@mui/material';
import Logo from '../../assets/svgs/Logo.svg';

const Footer = () => {

  return (

    <Box container width='100%' height='200px' mt='20px'>
         <Grid container  >
           <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
             <Stack direction='column' spacing={2}>

             <img src={Logo} alt='logo' />
             
             </Stack>
           </Grid>


           <Grid item md={4}  sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
           <Stack direction='column' spacing={2}>
             <Typography>Sponsors</Typography>
             <Typography>Contact: Lorem ipsum dolor sit amet, <br /> 
               consectetur adipiscing elit. Suspendisse <br /> malesuada lacus</Typography>
             <Typography>Licenses</Typography>
             
            
            </Stack>
            </Grid>


            <Grid item md={4}  sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
            <Stack direction='column' spacing={2}>
            <Typography>Login</Typography>
             <Typography>Team Members</Typography>
             <Typography>Coupons</Typography>
           
            </Stack>
            </Grid>
         </Grid>
       </Box>
  );
}

export default Footer;