import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for the animation
const drawHexagon = keyframes`
  0% {
    stroke-dasharray: 0 400;
  }
  100% {
    stroke-dasharray: 400 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;
`;

const Hexagon = styled.path`
  stroke: currentColor;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke-dasharray: 0 400;
  animation: ${drawHexagon} 1.5s ease-in-out forwards; /* Adjust animation duration and timing function as needed */
`;

const LetterP = styled.g`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1.5s forwards; /* Adjust animation delay and duration as needed */
`;

const IconLoader = () => (
  <StyledSVG id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <Hexagon
        id="hexagon"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
      <LetterP id="P" transform="translate(30, 25)">
        <path
          d="M15,0 L25,0 C32,0 38,5 38,12 C38,19 32,24 25,24 L15,24 L15,48 L10,48 L10,0 L15,0 Z M15,4 L15,20 L25,20 C30,20 34,16 34,12 C34,8 30,4 25,4 L15,4 Z"
          fill="currentColor"
        />
      </LetterP>
    </g>
  </StyledSVG>
);

export default IconLoader;
