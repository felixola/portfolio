import React from 'react';
import { 
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Accord = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

    return (
        <Box sx={{border: '1px solid #EEF2E6', width: {xs: '350px', md: '600px'}}}>
        <Accordion sx={{boxShadow:'0',}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={0}
          >
            <Typography>Profile</Typography>
          </AccordionSummary>
          <AccordionDetails elevation={0} boxShadow='none'>
            <Typography>
                            I am a solution-driven web developer adept at contributing to highly collaborative
                work environment, finding solutions and determining customer satisfaction. Proven
                experience developing consumer-focused websites using HTML, CSS, JavaScript,
                ReactJS, Wordpress, Python, Django and PHP. Meeting highest standards for web
                design, user experience, best practices and speed. Designed and developed web
                applications across multiple APIs, third-party integrations and databases.
            </Typography>
          </AccordionDetails>
        </Accordion>

                {/* 2 */}
        <Accordion  sx={{boxShadow:'0',}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Skills</Typography>
          </AccordionSummary>
          <AccordionDetails  elevation={0} boxShadow='none'>
            <Typography align='left'>
            <b>Frontend</b>: HTML, CSS, Javascript, Bootstrap,
              React, Material-UI, SVGs <br />
              <br />
            <b>Backend</b>: 
            Django, MySql
            <br />
            <br />
            <b>Tools</b>: 
              Git, VSC

              <br />
              <br />

              <b>Ui/Ux design</b>: 
              Figma
              <br />
              <br />
             <b>Soft skills</b>:  
              Comminucation, Teamwork
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 3 */}

        <Accordion  sx={{boxShadow:'0',}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Education</Typography>
          </AccordionSummary>
          <AccordionDetails  elevation={0} boxShadow='none'>
            <Typography>
            <b>Bachelor of Science : Computer Science,</b>
            Federal University of Agriculture, Abeokuta (FUNAAB) <br /> April 2019 –
            present <br />
            Alabata Street,
            Abeokuta, Ogun
            State, Nigeria
            </Typography>
          </AccordionDetails>
        </Accordion>


        {/* 4 */}
        <Accordion  sx={{boxShadow:'0',}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Language</Typography>
          </AccordionSummary>
          <AccordionDetails  elevation={0} boxShadow='none'>
            <Typography align='center'>
              English
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
}

export default Accord;