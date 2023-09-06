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
                expandIcon={<PetsIcon className="faq__Icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='question'
                >
                <Typography className="faq__Title">Do you groom all types of pets?</Typography>
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
                expandIcon={<PetsIcon className="faq__Icon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography className="faq__Title">Can I stay with my pet during the grooming appointment?</Typography>
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
                expandIcon={<PetsIcon className="faq__Icon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography className="faq__Title">What services do you offer at your pet grooming salon?</Typography>
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
                expandIcon={<PetsIcon className="faq__Icon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className='question'
                >
                <Typography className="faq__Title">Do you offer any discounts or loyalty programs for regular customers?</Typography>
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
