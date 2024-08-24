import { Container, Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material'
import { useState } from 'react'

const steps = [
    {
        year: 'Current',
        label: 'Junior Developer @ Tomlinson Group of Companies',
        description: "Designed and enhanced internal applications and web interfaces leading to a 40% improvement in accessibility and user interaction across platforms. (HTML, CSS, Javascript) Spearheaded an initiative to elevate code quality and documentation standards by establishing standard version control practices and conducting systematic code refactorization. This effort resulted in a 30% increase in code readability, maintainability, and facilitated future extensibility. Responsible for transforming complex queries into core data services, facilitating the generation of SSRS reports. (SQL)"
    },
    {
        year: 'November 2023 - February 2024',
        label: 'Software Developer @ Imperial Contracting Ottawa',
        description: "Engineered a web application for a local contracting business specializing in comprehensive home renovations, establishing a competitive online presence. (React.js, Javascript, Node.js, Express.js) Migrated old application which included enhancements of responsive design, increased SEO performance and form integration resulting in an increase of 25%. Redesign successfully increased user activity, user experience and overall performance by 75%."
    },
    {
        year: 'May 2023 - Sept 2023',
        label: 'IT Support Student',
        description: 'I worked as a Software Engineer at a local startup, where I developed a web application using React and Node.js.'
    }
]

const Experience = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Container 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: 5
            }}
        >
            <Typography variant="h4">
                Work Experience
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography variant='subtext'>{step.year}</Typography>
                            <Typography>{step.description}</Typography>
                            <Box>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Container>
    )
}

export default Experience