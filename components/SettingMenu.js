import { Menu, Box, IconButton } from "@mui/material";
import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { AppContext } from "../context/ThemeContext";
import { colorTheme } from "../public/data/home";

export default function SettingMenu({ anchorEl, open, handleClose }) {
  const { darkMode, setDarkMode, setPrimaryColor } = useContext(AppContext);

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box
        sx={{
          px: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <BedtimeIcon fontSize="small" />
            ) : (
              <LightModeIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
        <Box sx={{ display:"flex",flexDirection:"column" }}>
          {colorTheme.map((item, index) => (
            <IconButton
              key={index}
              onClick={() => setPrimaryColor(item.colorObj)}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  backgroundColor: item.colorObj.main,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginBottom: "3px",
                }}
              ></Box>
            </IconButton>
          ))}
        </Box>
      </Box>
    </Menu>
  );
}
