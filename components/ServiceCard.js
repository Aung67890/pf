import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {motion} from 'framer-motion'
import Image from 'next/image';


export default function ServiceCard({imageUrl,title,text,variants,transition}) {
  return (
    <motion.div 
     initial="hidden"
      animate="visible" variants={variants} transition={transition}
    >
      <Card className="card" sx={{ maxWidth: "100%" }}>
      
      <CardContent>
      <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Box className="serviceImage" sx={{width:{xs:"50px",md:"70px"},my:3}}>
            <Image  src={imageUrl}  alt=""/>
        </Box>
      </Box>
        
        <Typography  gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{my:2}} variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      
    </Card>
    </motion.div>
  );
}
