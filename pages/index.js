import {
  Button,
  Box,
  Grid,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Array } from "../public/data/home";
import home from "../public/images/programmer.png";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { imageAnimation, headerAnimation } from "../components/Animation";
import { motion } from "framer-motion";
// import Cover from "../public/images/CV.png";

const TypedTitle = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Aung Myat Thu",
        "Full stack developer",
        "Front-end developer",
        "React Developer",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Typography variant="h4" component="div" color="primary">
      I am <span ref={el}></span>{" "}
    </Typography>
  );
};

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // backgroundColor:"blue"
      }}
    >
      <Head>
        <title>Aung Myat Thu</title>
        <meta name="author" content="Aung Myat Thu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid container spacing={3} sx={{ minHeight: "50vh" }}>
          <Grid item xs={12} md={6}>
            <motion.div
              style={{ width: "100%", height: "100%" }}
              initial="hidden"
              animate="visible"
              variants={headerAnimation}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: { xs: 5, md: 0 },
                }}
              >
                <h5>INTRODUCTION</h5>
                <TypedTitle />
                <p style={{ margin: "15px 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                </p>
                <Box sx={{ display: "flex", my: 1 }}>
                  <Button sx={{ mr: 1 }} variant="contained">
                    Hire me
                  </Button>
                  {/* <a href={Cover} style={{textDecoration:"none"}} download="Aung Myat Thu's Resume" target='_blank'> */}
                    <Button variant="outlined">
                      Download CV
                    </Button>

                  {/* </a> */}
                </Box>
                <Box sx={{ mt: 2 }}>
                  {Array.map((item, index) => (
                    <IconButton href={item.link} key={index}>
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                minHeight: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageAnimation}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              >
                <Box
                  sx={{
                    mb: { xs: 3, md: 0 },
                    width: { xs: "250px", md: "400px" },
                  }}
                >
                  <Image style={{}} src={home} alt="welcome" />
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
