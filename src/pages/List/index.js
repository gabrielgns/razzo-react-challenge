import React from 'react';
import { Grid } from '@material-ui/core';
import Business from '../../components/Business';
import { GridContainer } from './styles';

const BusinessList = () => {
  return (
    <GridContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Business />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Business />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Business />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Business />
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default BusinessList;
