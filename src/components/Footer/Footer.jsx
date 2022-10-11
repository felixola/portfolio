import React from 'react';
import { 
    Box,
    Stack,
    Grid,
    Typography,
} from '@mui/material';
import Logo from '../../assets/svgs/Logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const Footer = () => {

  return (

    <Box container width='100%' height='150px' mt='20px'>
         <Grid container  >
           <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
             <Stack direction='column' spacing={2}>

             <img src={Logo} alt='logo' style={{width: '100px'}} />
             
             </Stack>
           </Grid>


           <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
           <Stack direction='column' spacing={2}>
             <Typography>Sponsors</Typography>
            
             <Typography>Licenses</Typography>
             
            
            </Stack>
            </Grid>


            <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
            <Stack direction='column' spacing={2}>
              <Link href='https://github.com/felixola' color='inherit'  underline="none"> <GitHubIcon /> </Link>
            
             <Typography>Coupons</Typography>
           
            </Stack>
            </Grid>
         </Grid>

         <Typography align='center' mt='50px'>© Copyright - R-dodgeQ</Typography>
       </Box>
  );
}

export default Footer;