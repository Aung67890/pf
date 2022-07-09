import React from "react";
import { Box, Container, Grid } from "@mui/material";
import UnderLined from "../components/Underline";
import CryptoChecker from '../public/images/crypto-1.png'
import nextYote from '../public/images/next-yote-shin.png'
import color from '../public/images/color.png'
import ProjectCard from "../components/ProjectCard";
import {motion} from 'framer-motion'
import blog from '../public/images/blog.png'
// import { useScroll } from "../utils/UseScroll";
import { textAnimation,cardAnimation, headerAnimation } from "../components/Animation";

const arr = [
  {
    title: "CryptoChecker",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    gitHubUrl:"https://github.com/Aung67890/cryptoChecker",
    projectDemoUrl:"https://crypto-checker-by-amt.netlify.app",
    imageUrl: CryptoChecker,
    
  },
  {
    title: "Next yoteshin",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    gitHubUrl:"https://github.com/Aung67890/next-yote-shin",
    projectDemoUrl:"https://next-yote-shin.vercel.app/",
    imageUrl: nextYote,
  },
  {
    title: "Color Generator",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    gitHubUrl:"https://github.com/Aung67890/color-generator",
    projectDemoUrl:"https://color-generator22.netlify.app",
    imageUrl: color,
  },
  {
    title: "MERN stack blog app",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    gitHubUrl:"https://github.com/Aung67890/blog-frontend",
    projectDemoUrl:"https://blogmm2.netlify.app/",
    imageUrl: blog,
  }
  
];

export default function Projects() {

  // const [element, controls] = useScroll();

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt:{xs:5}
      }}
      // ref={element}
    >
      <Container>
      <motion.div
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Box sx={{ mb: { xs: 1, md: 0 } }}>
            <h1>Projects</h1>
            <UnderLined />
          </Box>
        </motion.div>
        <Grid container spacing={3} sx={{ minHeight: "60vh",my:3 }}>
          {arr.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} sx={{}}>
                <Box sx={{width:"100%",mt:{xs:2,md:0}}}>
                    <ProjectCard
                    
                    variants={cardAnimation}
                    transition={{ delay: 0.2, type: "tween" }} 
                    imageUrl={item.imageUrl} text={item.text} title={item.title} gitHubLink={item.gitHubUrl} projectDemoLink={item.projectDemoUrl} />
                </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
