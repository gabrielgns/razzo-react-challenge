import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import api from '../../services/api';
import {
  BusinessContainer,
  BusinessLogo,
  BusinessText,
  BusinessName,
  TextArea,
  BusinessCategory,
  BusinessAddress
} from './styles';

const Business = () => {
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  async function getBusinessInfo() {
    await api
      .get('/business')
      .then((res) => {
        setLogo(res.data.data[0].assets.logo);
        setName(res.data.data[0].name);
        setAddress(res.data.data[0].address);
        setDescription(res.data.data[0].description);
      })
      // eslint-disable-next-line no-alert
      .catch((error) => console.log(`error ${error}`));
  }

  getBusinessInfo();

  return (
    <div>
      <BusinessContainer>
        <BusinessLogo src={logo} alt='logo' />
        <TextArea>
          <BusinessName>
            <BusinessText>{name}</BusinessText>
          </BusinessName>
          <BusinessCategory>
            <BusinessText>{description}</BusinessText>
            <MdLocationOn />
          </BusinessCategory>
          <BusinessAddress>
            <BusinessText>{address.street_name},</BusinessText>
            <BusinessText>{address.street_number}</BusinessText>
            <BusinessText>{address.neighborhood}</BusinessText>
          </BusinessAddress>
        </TextArea>
      </BusinessContainer>
    </div>
  );
};

export default Business;
