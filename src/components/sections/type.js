import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const StyledTypewriter = styled.div`
  .typewriter-text {
    font-size: 50rem; 
    font-weight: bold; 
    color: #333; 
  }
`;

function Type() {
  return (
    <StyledTypewriter>
      <Typewriter
        options={{
          strings: [
            "Cloud Security Researcher",
            "AWS Cloud Club Captain",
            "Cybersecurity Head",
            "Youtuber",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 200,
        }}
      />
    </StyledTypewriter>
  );
}

export default Type;
