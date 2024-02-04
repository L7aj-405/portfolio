import React from 'react';
import styled, { keyframes } from 'styled-components';

const colorPulse = keyframes`
  0% {
    color: lighten(green, 70%);
  }
  40% {
    color: green;
  }
  50% {
    color: darken(green, 5%);
  }
  100% {
    color: darken(green, 20%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  width: 100vw;
`;

const Column = styled.div`
  & > * {
    display: block;
    animation: ${colorPulse} 3s infinite;
    padding: 0 0.125em;
  }
`;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const MailchimpForm = () => {
  const columns = Array.from({ length: 80 }, (_, index) => index + 1);

  return (
    <Wrapper>
      {columns.map((colNum) => {
        const duration = getRandomNumber(1, 5);
        const delay = duration / 50;

        return (
          <Column key={colNum} className={`col-${colNum}`}>
            {Array.from({ length: 50 }, (_, i) => (
              <span
                key={i}
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${i * delay}s`,
                }}
              >
                {getRandomNumber(10240, 10794)}
              </span>
            ))}
          </Column>
        );
      })}
    </Wrapper>
  );
};


