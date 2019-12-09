import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  font-family: 'Anton', sans-serif;
`;

const PersonList = props => {
  //{loading ? <div>Loading...</div> : <PersonCard personName={person} />}
  return (
    <ListContainer>
      <PersonCard {...props} />
    </ListContainer>
  );
};

export default PersonList;
