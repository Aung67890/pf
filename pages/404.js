import React from "react";
import { Box,Button } from "@mui/material";
import Image from "next/image";
import Pic404 from "../public/images/404.svg";
import { useRouter } from 'next/router'

export default function Page404() {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Image src={Pic404} alt="Picture of the 404" width={350} height={350} />
      <h4 style={{ color: "white",margin:"30px 0" }}>404 Page not found</h4>
      <Button onClick={()=>router.push('/')} variant="contained" color="primary">
          Back to Home
      </Button>
    </Box>
  );
}
