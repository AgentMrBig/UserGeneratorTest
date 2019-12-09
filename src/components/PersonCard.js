import React from 'react';
import styled from 'styled-components';

const PersonContainer = styled.div`
  border: solid 1px red;
`;
const NameContainer = styled.div`
  border: solid 1px black;
`;

const PersonCard = props => {
  const personData = props;
  console.log('props in PersonCard', props);
  return (
    <PersonContainer>
      <img alt="person" src={personData.picture} />
      <NameContainer>{personData.gender}</NameContainer>
      <div>{props.first}</div>
    </PersonContainer>
  );
};

export default PersonCard;
