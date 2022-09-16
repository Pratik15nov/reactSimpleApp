import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HelmetHandler from '../../components/Helment/Helmet';

function Home() {
  return (
    <Box id={'home_screen'}>
      <HelmetHandler
        title={'Home | React'}
        description={'This is Home Page'}
      />
      <Typography variant="h3">Home</Typography>
      <br />
    </Box>
  );
}

export default Home;
