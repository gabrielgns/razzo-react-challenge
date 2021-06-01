import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import api from '../../services/api';
import {
  BusinessContainer,
  BusinessLogo,
  BusinessText,
  BusinessName,
  BusinessAddress
} from './styles';

const Business = () => {
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  async function getBusinessLogo() {
    await api
      .get('/business')
      .then((res) => {
        setLogo(res.data.data[0].assets.logo);
      })
      // eslint-disable-next-line no-alert
      .catch((error) => console.log(`error ${error}`));
  }

  async function getBusinessName() {
    await api
      .get('/business')
      .then((res) => {
        setName(res.data.data[0].name);
      })
      // eslint-disable-next-line no-alert
      .catch((error) => console.log(`error ${error}`));
  }

  async function getBusinessAddress() {
    await api
      .get('/business')
      .then((res) => {
        setAddress(res.data.data[0].address);
      })
      // eslint-disable-next-line no-alert
      .catch((error) => console.log(`error ${error}`));
  }

  getBusinessAddress();
  getBusinessName();
  getBusinessLogo();

  return (
    <div>
      <BusinessContainer>
        <BusinessLogo src={logo} alt='logo' />
        <BusinessName>
          <BusinessText>{name}</BusinessText>
          <MdLocationOn />
        </BusinessName>
        <BusinessAddress>
          <BusinessText>{address.street_name} </BusinessText>
          <BusinessText>{address.street_number}</BusinessText>
          <BusinessText>{address.neighborhood}</BusinessText>,
        </BusinessAddress>
      </BusinessContainer>
    </div>
  );
};

export default Business;
