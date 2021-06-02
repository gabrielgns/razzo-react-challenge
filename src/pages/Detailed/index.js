import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import ShoppingCar from '../../components/ShoppingCar';

import {
  Main,
  GridContainer,
  ItemsContainer,
  ShoppingCarContainer,
  PagesLocation,
  HomeText,
  CurrentPageText,
  ContinueButton,
  ConfirmButton
} from './styles';

const BusinessDetails = () => {
  return (
    <Main>
      <Link to='/'>
        <MdKeyboardArrowLeft />
      </Link>
      <GridContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer />
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer />
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer />
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer />
          </Grid>
        </Grid>
      </GridContainer>
      <ShoppingCarContainer>
        <PagesLocation>
          <HomeText>Home</HomeText>
          <MdKeyboardArrowRight />
          <CurrentPageText>Sacola</CurrentPageText>
        </PagesLocation>
        <ShoppingCar />
        <ContinueButton>Continuar comprando </ContinueButton>
        <ConfirmButton>Confirmar a compra</ConfirmButton>
      </ShoppingCarContainer>
    </Main>
  );
};

export default BusinessDetails;
