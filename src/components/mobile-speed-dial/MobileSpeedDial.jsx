import { Box, SpeedDial, SpeedDialAction } from "@mui/material"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const actions = [
    { icon: <PictureAsPdfIcon />, name: 'Download CV' },
];

const MobileSpeedDial = () => {
  return (
    <Box
        sx={{
            boxShadow: 3
        }}
    >
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 25, right: 25 }}
            icon={<CloudDownloadIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    </Box>
  )
}

export default MobileSpeedDial