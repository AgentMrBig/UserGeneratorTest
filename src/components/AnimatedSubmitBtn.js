import React from 'react';
import styled, { keyframes } from 'styled-components';

const Draw = keyframes`
    0% {
        stroke-dasharray: 10 10;
        stroke-dashoffset: -10;
        stroke-width: 10px;
    }
    100% {
        stroke-dasharray: 200;
        stroke-dashoffset: 0;
        stroke-width: 20px;
    }
`;

const Svg_wrapper = styled.div`
  height: 60px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
  &:hover Rect {
    -webkit-animation: 2s ${Draw} linear forwards;
    animation: 2s ${Draw} linear forwards;
    cursor: pointer;
  }
`;

const SVG = styled.svg`
  height: 60px;
  width: 320px;
`;

const Rect = styled.rect`
  height: 60px;
  width: 320px;
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: #19f6e8;
`;

const Text = styled.div`
  text-align: center;
  color: #fff;
  font-family: 'Roboto Condensed';
  font-size: 22px;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
  top: -52px;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
  &:active {
    transform: scale(1);
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const AnimatedSubmitBtn = props => {
  return (
    <Svg_wrapper>
      <SVG xmlns="http://www.w3.org/2000/svg">
        <Rect />
      </SVG>
      <Text onMouseDown={props.submitFunction}>SUBMIT</Text>
    </Svg_wrapper>
  );
};

export default AnimatedSubmitBtn;
