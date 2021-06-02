import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import SearchBar from '../../components/SearchBar';
import ShoppingCar from '../../components/ShoppingCar';
import Business from '../../components/Business';
import {
  GridContainer,
  Main,
  ShoppingCarContainer,
  ContinueButton,
  ConfirmButton,
  PagesLocation,
  HomeText,
  CurrentPageText
} from './styles';

const BusinessList = () => {
  return (
    <Main>
      <GridContainer>
        <SearchBar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <Link to='/business'>
              <Business />
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <Link to='/business'>
              <Business />
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <Link to='/business'>
              <Business />
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <Link to='/bussiness'>
              <Business />
            </Link>
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

export default BusinessList;
