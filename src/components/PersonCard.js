import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const PersonContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 7.5 15px;
  margin-bottom: 7.5px;
  flex-direction: column;
  position: relative;

  border: solid 1px red;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 300px;
`;

const PersonImg = styled.img`
  width: 300px;
  height: 300px;
`;

const NameContainer = styled.div`
  border: solid 1px black;
  background-color: #c7ada7;
  position: absolute;
  width: 100%;
  top: 232px;
  left: -302px;
`;

const SexContainer = styled.div`
  border: solid 1px black;
  background-color: #c7ada7;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: -302px;
`;

const onButtonClick = () => {
  gsap.to('.hide', { x: 301, duration: 1 });
  gsap.from('.hide', { opacity: 0, duration: 2.5, delay: 0 });
};

const PersonCard = props => {
  const person = props.person;
  console.log('props in PersonCard', props);
  return (
    <PersonContainer onClick={onButtonClick}>
      <PersonImg alt="person" src={person.picture.large} />
      <NameContainer className="hide">
        {person.name.first} {person.name.last}{' '}
      </NameContainer>
      <SexContainer className="hide">{person.gender}</SexContainer>
    </PersonContainer>
  );
};

export default PersonCard;
