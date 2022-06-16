import { AppBar, Toolbar, Container, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NavBarMenu from './NavbarMenu'
import Image from "next/image";
import logo from '../public/images/programmer.png'
export default function NavbarCom() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    

  return (
    <AppBar color="inherit" sx={{}} position="static">
      <Toolbar >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
        >
          <Box sx={{width:"50px"}}>
            <Image src={logo}/>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <a   style={{ margin: "0 20px" }}>Home</a>
            </Link>
            <Link href="/about">
              <a style={{ margin: "0 20px" }}>About</a>
            </Link>
            <Link href="/projects">
              <a style={{ margin: "0 20px" }}>Projects</a>
            </Link>
            <Link href="/services">
              <a style={{ margin: "0 20px" }}>Services</a>
            </Link>
            <Link href="/contact">
              <a style={{ margin: "0 20px" }}>Contact</a>
            </Link>
            
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleClick}>
                <MenuIcon color="primary"/>
            </IconButton>
            <NavBarMenu open={open}  handleClose={handleClose} anchorEl={anchorEl} />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
