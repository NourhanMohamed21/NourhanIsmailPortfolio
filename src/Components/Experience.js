import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
const steps = [
    {
    company :'YOMICEPA',
        label: 'JUNIOR FRONTEND ENGINEER ',
        description:
            [` part time job.`,
                ` Responsible for tasks in real projects using react.js,redux,react-form-hook.`,
                ` Working in two large-scale projects fixing bugs and adding new features.`,
                , `Meeting the client requirements and co-operating with my mentors and my team.`],
        year: 'October 2022 - November 2022'
    },
    {
        company: 'YOMICEPA INTERN',
        label:'FRONTEND TRAINEE',
        description:[
` Internship learning all about react , react‑redux , APIs connection.`,
` working on small scale projects.`,
` Presenting and reporting everything I learn to my mentors.`],
        year: 'July 2022 –October 2022'
    },
    {
        company:'BANK MISR',
        label: 'COMPUTER ENGINEERING TRAINEE',
        description: 
        [
        ` Explored the process of banking.`,
        `  Exposed to the softwares used in the bank.`],
        year: 'July 2021 –Aug 2021'
    },
];

export default function VerticalLinearStepper() {
    return (
        <Box >
            <Stepper orientation="vertical">
                {steps.map((step, index) => (
                    <Step active={true} key={step.label}  StepIconComponent={CodeRoundedIcon} >
                        <StepLabel StepIconComponent={CodeRoundedIcon} font>
                        <Typography variant="h6" className="experience">{step.company}</Typography> 
                        </StepLabel>
                        <StepContent>
                            <Typography variant="subtitle1">{step.label}</Typography> <br/>
                            <Typography variant="subtitle1">{step.year}</Typography> 
                            <Typography variant="body">
                           
                                {Array.isArray(step.description) ? step.description.map((des) =>
                                    (<li> {des} </li>)
                                ) : step.description
                                }
                            </Typography>
                        </StepContent>
                    </Step>
                    
                ))}
                <Step></Step>
            </Stepper>
        </Box >
    );
}