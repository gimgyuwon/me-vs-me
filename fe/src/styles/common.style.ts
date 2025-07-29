import styled, { keyframes } from 'styled-components';

export const StyledCenterTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

export const StyledCenterParagraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const StyledSubText = styled.p`
  font-size: 0.5rem;
  color: #888;
  text-align: center;
  margin: 0.75rem 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 20px auto;
`;

export const StyledButton = styled.button`
  width: 200px;
  margin: 1rem auto;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 200px;
`;

const wobble = keyframes`
  0% { transform: rotate(-1deg) scale(1); }
  50% { transform: rotate(1deg) scale(1); }
  100% { transform: rotate(-1deg) scale(1); }
`;

export const StyledWobbleButton = styled.button`
  position: relative;
  padding: 0.75rem 1.5rem;
  margin: 1rem auto;
  width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;

  background-color: #fff;
  color: #000;

  border: 2px solid #000;
  border-radius: 999px;
  border-style: dashed;

  animation: ${wobble} 1s infinite;
  transition: background-color 0.3s ease;
`;
