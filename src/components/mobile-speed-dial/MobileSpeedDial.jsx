import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const actions = [
    { icon: <PictureAsPdfIcon />, name: 'Download CV', href: '/jacksonarsmith_resume.pdf' },
];

const MobileSpeedDial = () => {
  return (
    <Box
        sx={{
            boxShadow: 3
        }}
    >
        <SpeedDial
            ariaLabel="Resume speedial"
            sx={{ position: 'fixed', bottom: 25, right: 25 }}
            icon={<CloudDownloadIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    component="a"
                    download
                />
            ))}
        </SpeedDial>
    </Box>
  )
}

export default MobileSpeedDial;