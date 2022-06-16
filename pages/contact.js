import { Box, Container, Grid, TextField, useTheme ,Button} from "@mui/material";
import React,{useRef} from "react";
import { motion } from "framer-motion";
import UnderLined from "../components/Underline";
import CustomProgress from "../components/CustomProgress";
import Image from "next/image";
import { Array } from "../public/data/Contact";
import emailjs from '@emailjs/browser';
import { formUp, headerAnimation,textAnimation } from "../components/Animation";

export default function Contact() {
  const theme = useTheme();

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if(form.current){
      emailjs.sendForm('service_cosd1a9', 'template_cfpymzs', form.current, 'Ppo1gfs3nYPZy5eQU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    form.current.reset();
  };

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
        animate='visible'
        initial="hidden"
        variants={headerAnimation}
        transition={{ delay: 0.2, type: "tween" }}
        >
          <Box sx={{ mb: { xs: 5, md: 0 } }}>
            <h1>Get in Touch</h1>
            <UnderLined />
          </Box>
        </motion.div>
        <Grid container spacing={1} sx={{ minHeight: "60vh" }}>
          <Grid item xs={12} md={6} sx={{}}>
            <Box
              sx={{
                height: "100%",
                width:"100%",
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <motion.div animate='visible'
        initial="hidden"
        variants={formUp}
        transition={{ delay: 0.2, type: "tween" }} style={{width:"100%"}}>
                <h3
                
                >
                  Send me an email
                </h3>

                <Box
                  component="form"
                  ref={form} onSubmit={sendEmail}
                  sx={{width:"100%"}}
                  noValidate
                  autoComplete="off"
                >
                  
                  <Box>
                  <TextField
                    sx={{width:"70%",my:2,minWidth:"300px"}}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    type="text"
                    name="from_name"
                  />
                  </Box>
                  <Box>
                  <TextField
                    sx={{width:"70%",my:2,minWidth:"300px"}}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email" name="user_email"
                  />
                  </Box>
                  <Box>
                  <TextField
                    sx={{width:"70%",my:2,minWidth:"300px"}}
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    name="message" type="text"
                  />
                  </Box>
                  <Button type="submit" value="Send" variant="contained" sx={{mt:2}}>
                    Submit
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Box sx={{ width: "80%", mt: { xs: 5, md: 0 } }}>
                <motion.h3
                animate='visible'
                initial="hidden"
                variants={headerAnimation}
                transition={{ delay: 0.2, type: "tween" }}
                >
                  Social Contact
                </motion.h3>
                {Array.map((item, index) => (
                  <motion.div
                  animate='visible'
                  initial="hidden"
                  variants={headerAnimation}
                  transition={{ delay: 0.2, type: "tween" }}
                    key={index}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: '1rem',
                    }}
                  >
                    <Box
                      className="contactImage"
                      sx={{ width: "40px", marginRight: "2rem" }}
                    >
                      <Image src={item.image} alt="" />
                    </Box>

                    <a
                      href={item.link}
                      style={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </a>
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
