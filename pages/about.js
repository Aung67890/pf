import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import UnderLined from "../components/Underline";
import { Array, arr } from "../public/data/about";
import CustomProgress from "../components/CustomProgress";
import Image from "next/image";
import {
  imageAnimation ,
  
  headerAnimation,
} from "../components/Animation";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 5, md: 0 },
        // position: "relative",
      }}
      // ref={element}
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <h1>About Me</h1>
            <UnderLined />
          </Box>
        </motion.div>
        <Grid container spacing={1} sx={{ minHeight: "60vh" }}>
          <Grid item xs={12} md={6} sx={{}}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{}}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageAnimation}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                  >
                    <h3 style={{ marginBottom: "12px" }}>Hi There</h3>

                    <p style={{ marginBottom: "8px" }}>
                      I am Aung Myat Thu. I am MERN stack developer .I hope will
                      enjoy to visiting my portfolio.
                    </p>

                    <p>
                      In id nulla magna. Nullam posuere fermentum mattis. Nunc
                      id dui at sapien faucibus fermentum ut vel diam. Nullam
                      tempus, nunc id efficitur sagittis, urna est ultricies
                      eros, ac porta sem turpis
                    </p>

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                      {arr.map((item, index) => (
                        <Grid key={index} item xs={6}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}
                          >
                            <p style={{ color: theme.palette.primary.main }}>
                              {item.title}
                            </p>
                            <a href={item.href}>
                              <h3 style={{}}>{item.text}</h3>
                            </a>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "80%", mt: { xs: 5, md: 0 } }}>
                <motion.h3
                initial="hidden"
                    animate="visible"
                variants={headerAnimation}
                transition={{ delay: 0.2, type: "tween" }}
                >
                  Skills
                </motion.h3>
                {Array.map((item, index) => (
                  <motion.div
                  initial="hidden"
                    animate="visible"
                    key={index}
                    variants={headerAnimation}
                    transition={{ delay: item.delay, type: "tween" }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Box sx={{ width: "30px" }}>
                        <Image style={{}} src={item.image} alt="" />
                      </Box>
                      <div style={{ width: "90%" }}>
                        <CustomProgress value={item.value} color={item.color} />
                      </div>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
