import { Container, Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper, Divider, Avatar } from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

const steps = [
    {
        year: 'Current',
        label: 'Junior Developer @ Tomlinson Group of Companies',
        description: "Designed and enhanced internal applications and web interfaces leading to a 40% improvement in accessibility and user interaction across platforms. (HTML, CSS, Javascript) Spearheaded an initiative to elevate code quality and documentation standards by establishing standard version control practices and conducting systematic code refactorization. This effort resulted in a 30% increase in code readability, maintainability, and facilitated future extensibility. Responsible for transforming complex queries into core data services, facilitating the generation of SSRS reports. (SQL)",
        imgSrc: "https://tomlinsongroup.com/wp-content/uploads/2018/05/cropped-favicon-32x32.png"
    },
    {
        year: 'November 2023 - February 2024',
        label: 'Software Developer @ Imperial Contracting Ottawa',
        description: "Engineered a web application for a local contracting business specializing in comprehensive home renovations, establishing a competitive online presence. (React.js, Javascript, Node.js, Express.js) Migrated old application which included enhancements of responsive design, increased SEO performance and form integration resulting in an increase of 25%. Redesign successfully increased user activity, user experience and overall performance by 75%.",
        imgSrc: "/src/assets/ico-favicon.ico"
    },
    {
        year: 'May 2023 - Sept 2023',
        label: 'IT Support Student',
        description: 'Developed and implemented automation scripts in Python and PowerShell , streamlining IT operations and reducing manual efforts, which enhanced team productivity by 98% and facilitated efficient migration and operational processes. Utilized Microsoft Endpoint Configuration Manager to efficiently provide remote user assistance and troubleshooting. This approach significantly enhanced user satisfaction, reduced downtime, and improved overall system stability. Successfully managed and maintained Active Directory, including user account management, group policy administration, and security protocols. Leveraged IT Service Management (ITSM) tools to efficiently handle incident, problem, and change management, ensuring minimal disruption to business operations. Conducted 30+ onboarding and end-user training sessions on IT tools and best practices.',
        imgSrc: "https://tomlinsongroup.com/wp-content/uploads/2018/05/cropped-favicon-32x32.png"
    }
]

const Experience = ({ id }) => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Container id={id}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '75vh',
            }}
        >
            <Typography variant="h4">
                Work Experience
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical"
                sx={{
                    width: '100%',
                    mt: 3,
                }}
            >
                {steps.map((step, index) => (
                    <Step key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <Avatar src={step.imgSrc} alt={step.label} sx={{ width: 56, height: 56, boxShadow: 3, objectFit: 'cover'  }} />
                            <Typography variant='subtitle1' color='GrayText' align='left'>{step.year}</Typography>
                            <Divider sx={{ mb: 2, width: '15vw'}}/>
                            <Typography align='left'>{step.description}</Typography>
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

Experience.propTypes = {
    id: PropTypes.string.isRequired
}

export default Experience