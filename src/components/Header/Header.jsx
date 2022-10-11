import React from 'react';
import { 
    AppBar,
    Toolbar,
    Stack,
    Button,
    Alert,
 } from '@mui/material';
 import { ThemeProvider } from '@mui/material';
 import Theme from '../ThemeCustom';
 import { styled } from '@mui/material/styles';
 import Logo from '../../assets/svgs/Logo.svg';
 import './Header.css';
 import celebration from '../../assets/images/icons8-celebration-64.png';
 import { Link } from 'react-router-dom';


//  const MainTabs = styled(Tab)({
//     borderBottom: 'none',
//     textTransform: 'none',
//     fontSize: '18px',
//     fontWeight: 500,
//     color: '#000000',
//     '&.MuiTabs-indicator': {
//       backgroundColor: '#000000',
//     },
//   });

  const HireMe = styled(Button)({
    width: '100px',
    backgroundColor: '#6246EA',
    border: 'none',
    textTransform: 'none',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 500,
  });


const Header = () => {

    // const [value, setValue] = useState();
    // const theme = useTheme();
    // console.log(theme);
    // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    // console.log(isMatch);

    // const routes = [ "/home", "/explore", "/profile", "/chat", "/latest"];

    return (

        <ThemeProvider theme={Theme}>
          {/* Alert Icon */}
             <Alert icon={false} severity="success" sx={{ color: '#000000',}}> 
                R-dodgeQ(info) — Contact before sending contract description!
                <img src={celebration} alt='celebration'className='celebration' />
            </Alert>

            <AppBar position='static' sx={{backgroundColor: '#FFFFFF', marginTop: '-0.5rem', width: '100%'}} elevation={0} className='appbar'>

                    <Toolbar>
                    
                            {/* Logo */}
                        <Link to='/'> <img src={Logo} alt='logo' className='logo'/> </Link>

                      

                        <Stack direction='row' spacing={2} sx={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
                                            
                        <HireMe variant='contained'>Hire Me</HireMe>

                        </Stack>
           
                     </Toolbar>
                     
            </AppBar>         

        </ThemeProvider>
    );
}
export default Header;