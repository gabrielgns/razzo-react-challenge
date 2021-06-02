import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { GridContainer } from './styles';

const BusinessDetails = () => {
  return (
    <h1>
      <Link to='/'>
        <MdKeyboardArrowLeft />
      </Link>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} wrap='nowrap' />
        <GridContainer />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} wrap='nowrap' />
        <GridContainer />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} wrap='nowrap' />
        <GridContainer />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} wrap='nowrap' />
        <GridContainer />
      </Grid>
    </h1>
  );
};

export default BusinessDetails;
