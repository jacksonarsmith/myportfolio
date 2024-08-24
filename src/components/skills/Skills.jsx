import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import PropTypes from "prop-types";
import { Container, Grid, Typography, Divider, Button } from "@mui/material";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const Skills = ({ iconSlugs }) => {

  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Container>
        <Grid container 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 5
            }}
        >
            <Grid item xs={6} md={6} spacing={2} sx={{ textAlign: 'center' }}>
                <Typography variant="h4">
                    Skills
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">
                    Here are some of the technologies I use:
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                    See Projects 
                </Button>
            </Grid>
            <Grid item xs={6} md={6} spacing={2} sx={{ textAlign: 'center' }}>
                <Cloud {...cloudProps}>
                    <>{renderedIcons}</>
                </Cloud>
            </Grid>
        </Grid>
    </Container>
  );
}

Skills.propTypes = {
    iconSlugs: PropTypes.array.isRequired,
  };

export default Skills