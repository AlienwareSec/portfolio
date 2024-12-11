import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Type from './type'; // Assuming Type component is defined in this file or another

// Define keyframes for the shake animation
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  position: relative;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  @media (max-width: 360px) {
    padding-top: var(--nav-height);
  }

  @media (min-width: 361px) and (max-width: 425px) {
    padding-top: 550px; /* Add top padding to prevent header overlap */
  }

  @media (min-width: 425px) and (max-width: 525px) {
    padding-top: 570px; /* Add top padding to prevent header overlap */
  }

  @media (min-width: 525px) and (max-width: 600px) {
    padding-top: 600px; /* Add top padding to prevent header overlap */
  }

  @media (min-width: 600px) and (max-width: 660px) {
    padding-top: 650px; /* Add top padding to prevent header overlap */
  }

  @media (min-width: 660px) and (max-width: 700px) {
    padding-top: 700px; /* Add top padding to prevent header overlap */
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    .shake {
      display: inline-block;
      margin-left: 10px;
      animation: ${shake} 2s infinite;

      @media (max-width: 480px) {
        margin-left: 5px;
      }
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-size: 2rem;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .website-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .image-wrapper {
    position: absolute;
    top: 20%;
    right: -10%;
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 768px) {
      position: static;
      margin-top: 20px;
      width: 100%;
    }
  }

  .image-wrapper img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .image-visible {
    opacity: 1;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
      setIsImageVisible(true);
    }, navDelay);

    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = (
    <h2 className="big-heading">
      Pawan Gambhir
      <span className="shake" role="img" aria-labelledby="alien">
        👽
      </span>
    </h2>
  );

  const three = (
    <h3>
      <Type />
    </h3>
  );
  const four = (
    <>
      <p>
        I’m a cybersecurity engineer specializing in securing cloud infrastructure with a decent
        knowledge of programming. Currently, I’m focused on researching the security of AWS cloud and trying my way to pentest into real world like AWS environments
        .
      </p>
    </>
  );
  const five = (
    <a
      className="website-link"
      href="https://www.youtube.com/@AlienwareSec"
      target="_blank"
      rel="noreferrer">
      Check out my YouTube!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
      <div className={`image-wrapper ${isImageVisible ? 'image-visible' : ''}`}>
        <img src={require('./home.png').default} alt="Description" />
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
