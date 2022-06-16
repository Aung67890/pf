import { LinearProgress } from '@mui/material';
import React from 'react'

const CustomProgress = ({ value, color }) => {
    return (
      <LinearProgress
        sx={{ height: "10px", ml: 2 }}
        variant="determinate"
        value={value}
        color={color}
      />
    );
  };


export default CustomProgress;