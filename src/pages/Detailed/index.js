import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import api from '../../services/api';
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
  const [itemImg, setItemImg] = useState('');
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [address, setAddress] = useState('');

  async function getBusinessInfo() {
    await api
      .get('/product/business/609efc6aa16e1fb123f9574c')
      .then((res) => {
        setItemImg(res.data.data[0].imgs[0].url);
        setName(res.data.data[0].name);
        // setAddress(res.data.data[0].address);
        // setDescription(res.data.data[0].description);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(`error ${error}`));
  }

  getBusinessInfo();

  return (
    <Main>
      <Link to='/'>
        <MdKeyboardArrowLeft />
      </Link>
      <GridContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer>
              <img src={itemImg} alt='Item' />
              <p>{name}</p>
            </ItemsContainer>
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer>
              <img src={itemImg} alt='Item' />
              <p>{name}</p>
            </ItemsContainer>
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer>
              <img src={itemImg} alt='Item' />
              <p>{name}</p>
            </ItemsContainer>
          </Grid>
          <Grid item xs={12} sm={4} wrap='nowrap'>
            <ItemsContainer>
              <img src={itemImg} alt='Item' />
              <p>{name}</p>
            </ItemsContainer>
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
