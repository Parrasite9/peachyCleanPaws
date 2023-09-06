import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PetsIcon from '@mui/icons-material/Pets';
import '../../css/Home/FAQ.css'

export default function BasicAccordion() {
  return (
    <div className="faq__container">
        <div className="faq__header">
            <h3>Frequently Asked Questions</h3>
        </div>

        <div className='faq__subContainer'>
            <Accordion>
                <AccordionSummary
                expandIcon={<PetsIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='question'
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary
                expandIcon={<PetsIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary
                expandIcon={<PetsIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary
                expandIcon={<PetsIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>



        </div>
    </div>
  );
}
