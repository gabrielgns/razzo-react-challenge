import React, { useState } from 'react';
import api from '../../services/api';
import {
  BusinessContainer,
  BusinessLogo,
  BusinessText,
  TextArea
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
        <TextArea>
          <BusinessText>{name}</BusinessText>
          <BusinessText>{address.street_name}</BusinessText>
          <BusinessText>{address.neighborhood}</BusinessText>,
          <BusinessText>{address.street_number}</BusinessText>
        </TextArea>
        {/* <BusinessText>{info[2].address.street_name}</BusinessText> */}
        {/* <BusinessText>{info.address.neighborhood}</BusinessText> */}
        {/* <BusinessText>{info.address.street_number}</BusinessText> */}
        {/* {businesscription}
      {business.address.street_name}
      {business.address.neighborhood}
      {business.address.street_number} */}
      </BusinessContainer>
    </div>
  );
};

export default Business;
