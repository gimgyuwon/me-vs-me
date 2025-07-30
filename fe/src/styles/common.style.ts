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

export const StyledInput = styled.input`
  display: block;
  font-size: 1rem;
  text-align: center;
  width: 350px;
  height: 50px;
  padding: 0 3rem;
  margin: 2rem auto;
  border-width: 2px;
  border-style: dashed;
  border-radius: 99px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

interface StyledImageProps {
  maxWidth?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '300px'};
  height: auto;
  display: block;
  margin: 20px auto;
`;

export const StyledLinkBox = styled.p`
  font-size: 1rem;
  width: 350px;
  height: 50px;
  text-align: center;
  margin: 1rem auto;
  padding: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  color: #333;
  background-color: #f0f0f0;
`;

export const StyledButton = styled.button`
  width: 350px;
  height: 50px;
  margin: 1rem auto;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 200px;
  border: none;

  &:disabled {
    background-color: #ccc;
    color: #666;
  }
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
