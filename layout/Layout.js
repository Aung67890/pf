import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, useTheme, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingMenu from "../components/SettingMenu";
import React from 'react'

export default function Layout({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: "relative",
        
      }}
    >
      <Navbar />
      <Box sx={{ position: "absolute", top: 70, right: { xs: 30, md: 50 },zIndex:2 }}>
        <SettingMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
        <IconButton onClick={handleClick}>
          <SettingsIcon />
        </IconButton>
      </Box>
      {children}
      <Footer />
    </Box>
  );
}
