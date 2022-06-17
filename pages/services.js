import React from "react";
import { Box, Container, Grid } from "@mui/material";
import UnderLined from "../components/Underline";
import MobileDevelopment from "../public/images/development.png";
import WebDevelopment from "../public/images/programming.png";
import UIUX from "../public/images/ux.png";
import ServiceCard from "../components/ServiceCard";
import unitTest from "../public/images/unittest.png";
import dataBase from "../public/images/deployment.png";
import hosting from "../public/images/hosting.png";
// import { useScroll } from "../utils/UseScroll";
import { headerAnimation, cardAnimation } from "../components/Animation";
import { motion } from "framer-motion";

const arr = [
  {
    title: "Web Development",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: WebDevelopment,
  },
  {
    title: "Mobile Development",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: MobileDevelopment,
  },
  {
    title: "Web Design",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: UIUX,
  },
  {
    title: "Unit Test",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: unitTest,
  },
  {
    title: "Hosting",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: hosting,
  },
  {
    title: "Database Management",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    imageUrl: dataBase,
  },
];

export default function Services() {
//   const [element, controls] = useScroll();

  return (
    <Box
      id="services"
      sx={{
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: 2 },
        // position: "relative",
      }}
    //   ref={element}
    >
      
      <Container>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={headerAnimation}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <h1>Services</h1>
            <UnderLined />
          </Box>
        </motion.div>
        <Grid container spacing={2} sx={{ minHeight: "60vh", my: 3 }}>
          {arr.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} sx={{}}>
              <Box sx={{ width: "100%", mt: { xs: 2, md: 0 } }}>
                <ServiceCard
                
                  variants={cardAnimation}
                  transition={{ delay: 0.2, type: "tween" }}
                  imageUrl={item.imageUrl}
                  text={item.text}
                  title={item.title}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
