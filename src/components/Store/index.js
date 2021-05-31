import React, { useState } from 'react';
import api from '../../services/api';
import { StoreContainer } from './styles';

const Store = () => {
  const [info, setInfo] = useState('');

  async function getStoreInfo() {
    await api
      .get('/business')
      .then((res) => {
        console.log(res.data.data[0].name);
        setInfo(res.data.data);
      })
      .catch((error) => console.error(`error ${error}`));
  }

  getStoreInfo();
  return (
    <div>
      <StoreContainer>
        {info[0].name}
        {info[0].description}
        {info[0].address.street_name}
        {info[0].address.neighborhood}
        {info[0].address.street_number}
        {/* {info[0].name}
        {info[0].description}
        {info[0].address.street_name}
        {info[0].address.neighborhood}
        {info[0].address.street_number} */}
      </StoreContainer>
    </div>
  );
};

export default Store;
