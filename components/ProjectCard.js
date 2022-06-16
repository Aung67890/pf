import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  imageUrl,
  title,
  text,
  projectDemoLink,
  gitHubLink,
//   animate,
  variants,
  transition,
}) {
  return (
    <motion.div
     initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      style={{ maxWidth: "100%" }}
    >
      <Card className="card" sx={{ maxWidth: "100%" }}>
        <Image src={imageUrl} />
        <CardContent>
          <h4>
            {title}
          </h4>
          
        </CardContent>
        <CardActions>
        <Button size="small">
            <a style={{}} href={gitHubLink}>
              GitHub
            </a>
          </Button>
          <Button size="small">
            <a style={{}} href={projectDemoLink}>
              Demo
            </a>
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
