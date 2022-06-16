import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function BasicMenu({ anchorEl, handleClose, open }) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
            <HomeIcon/>
          <Link href="/">
            <a style={{ margin: "0 20px" }}>Home</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <PersonIcon/>
          <Link href="/about">
            <a style={{ margin: "0 20px" }}>About</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <CheckCircleOutlineIcon/>
          <Link href="/projects">
            <a style={{ margin: "0 20px" }}>Projects</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <MiscellaneousServicesIcon/>
          <Link href="/services">
            <a style={{ margin: "0 20px" }}>Services</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <EmailIcon/>
          <Link href="/contact">
            <a style={{ margin: "0 20px" }}>Contact</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
