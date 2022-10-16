import { Typography, InputLabel, OutlinedInput, Stack, Button } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material';
import theme from '../../components/ThemeCustom';
import { styled } from '@mui/material/styles';
import './Contact.css';


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


const Contact = () => {

  return (

      <ThemeProvider theme={theme}>

        {/* Contact form */}
          <formControl>

            {/* Contact Heading */}
            <Typography variant='h4' mt='20px' fontWeight='bold'>Contact</Typography>

                {/* Name */}
                <Stack direction='row' spacing={2} className='field'> 
                {/* Name input field */}
                <InputLabel htmlFor="name">Name:</InputLabel>
                <OutlinedInput placeholder="Enter your name" />
                </Stack>
       
                {/* Email */}
                  <Stack direction='row' spacing={2} className='field'>
                    {/* Email input field */}
                  <InputLabel htmlFor="email">Email:</InputLabel>
                  <OutlinedInput placeholder="Enter your email" />
                  </Stack>

                  {/* Details */}
                  <Stack direction='row' spacing={2} className='field'>
                    {/* Details input field */}
                  <InputLabel htmlFor="details">Detail:</InputLabel>
                  <OutlinedInput
                    id="outlined-multiline-static"          
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    sx={{ width: {xs: "230px", md: '270px'}}}
                    placeholder='Enter the details of the project' className='textfield'/>
                  </Stack>

                  {/* Send message button */}
                  <SendMsg variant='contained' sx={{ marginTop: '40px'}}>Send Message</SendMsg>
      </formControl>

    </ThemeProvider>
  )
}

export default Contact