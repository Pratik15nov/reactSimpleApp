import React from "react";
import { Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { StyledContentBox } from "./FallbackScreen.styles";

function FallbackScreen() {
  const history = useHistory();
  return (
    <StyledContentBox role="alert" id={'fallback_screen'}>
      <Typography variant="h3">
        Something went wrong. Please refresh.
      </Typography>
      <br />
      <Button variant="contained" color="primary" onClick={() => history.push('/')}>
        Refresh
      </Button>
    </StyledContentBox>
  );
}

export default FallbackScreen;
