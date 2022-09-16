import React from 'react';
import { 
    AppBar,
    Box,
    Toolbar,
    Tabs,
    Tab,
    Stack,
    Button,
    useMediaQuery,
    Alert,
    useTheme,
 } from '@mui/material';
 import { ThemeProvider } from '@mui/material';
 import Theme from '../ThemeCustom';
 import { styled } from '@mui/material/styles';
 import { useState } from 'react';
 import Logo from '../../assets/svgs/Logo.svg';
 import './Header.css';
 import celebration from '../../assets/images/icons8-celebration-64.png';


 const MainTabs = styled(Tab)({
    borderBottom: 'none',
    textTransform: 'none',
    fontSize: '18px',
    fontWeight: 500,
    color: '#000000',
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  });

  const HireMe = styled(Button)({
    border: '1px solid #25316D',
    width: '100px',
    backgroundColor: '#354259',
    textTransform: 'none',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 500,
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  });


const Header = () => {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    return (

        <ThemeProvider theme={Theme}>

             <Alert icon={false} severity="success" sx={{ color: '#000000',}}> 
            R-dodgeQ(info) — Contact before sending contract description!
            <img src={celebration} alt='celebration'className='celebration' />
            </Alert>

            <AppBar position='static' sx={{backgroundColor: '#FFFFFF', marginTop: '-0.5rem', width: '100%'}} elevation={0} className='appbar'>

                    <Toolbar>
                    
                            {/* Logo */}
                        <img src={Logo} alt='logo' className='logo'/>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center',}}>

                            <Tabs value={value}
                                  onChange={(e, value) => setValue(value)}>

                                <MainTabs label='Home'/>
                                <MainTabs label='Explore'/>
                                <MainTabs label='Profile'/>
                                <MainTabs label='Chat'/>
                                <MainTabs label='Latest '/>

                            </Tabs>

                        </Box>

                        <Stack direction='row' spacing={2} sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                            
                        <HireMe variant='contained'>Hire Me</HireMe>

                        </Stack>
           
                     </Toolbar>

            </AppBar>
        
        </ThemeProvider>
    );
}
export default Header;