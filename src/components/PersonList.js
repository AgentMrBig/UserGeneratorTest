import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
import styled from 'styled-components';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  font-family: 'Anton', sans-serif;
`;

const PersonList = props => {
  return (
    <ListContainer>
      <PersonCard className="person-card" {...props} />
    </ListContainer>
  );
};

export default PersonList;
