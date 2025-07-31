import styled, { keyframes } from 'styled-components';

export const StyledCenterTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

interface TextProps {
  align?: 'start' | 'center' | 'end';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold';
  color?: string;
  fontFamily?: string;
}

const sizeMap = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.2rem',
  lg: '2rem',
};

export const StyledText = styled.p<TextProps>`
  white-space: pre-line;
  text-align: ${({ align = 'center' }) => align || 'center'};
  margin: 0.5rem;
  font-size: ${({ size = 'md' }) => sizeMap[size]};
  font-weight: ${({ weight = 'normal' }) => weight};
  color: ${({ color }) => color || 'inherit'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
`;

interface BoxProps {
  maxWidth?: string;
  bgColor?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string;
  paddingTB?: string;
  paddingRL?: string;
}

export const StyledBox = styled.div<BoxProps>`
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  background-color: ${({ bgColor }) => bgColor || 'inherit'};
  border-width: ${({ borderWidth }) => borderWidth || '0'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-color: ${({ borderColor }) => borderColor || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  margin: 1rem auto;
  padding: ${({ paddingTB = '0', paddingRL = '0' }) =>
    `${paddingTB} ${paddingRL}`};
`;

export const StyledColItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const StyledSpeechBubble = styled.div`
  position: relative;
  border: 2px solid #000;
  border-radius: 1rem;
  padding: 0;
  margin: 1rem auto;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #fff;
    border-left: 0;
    margin-top: -10px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #000;
    border-left: 0;
    margin-top: -10px;
  }
`;

interface StyledImageProps {
  $maxWidth?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '300px'};
  height: auto;
  display: block;
  margin: 0px auto;
`;

export const StyledLinkBox = styled.p`
  font-size: 1rem;
  width: 350px;
  height: 50px;
  text-align: center;
  align-content: center;
  margin: 1rem auto;
  padding: 0rem;
  overflow-x: auto;
  overflow-y: hidden;
  color: #333;
  background-color: #f0f0f0;
`;

interface buttonProps {
  bgColor?: string;
  textColor?: string;
}

export const StyledButton = styled.button<buttonProps>`
  width: 350px;
  height: 50px;
  margin: 1rem auto;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ textColor }) => textColor || '#000'};
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

export const StyledWobbleButton = styled.button<buttonProps>`
  position: relative;
  padding: 0.75rem 1.5rem;
  margin: 1rem auto;
  width: 350px;

  background-color: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ textColor }) => textColor || '#000'};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;

  border: 2px solid #000;
  border-radius: 999px;
  border-style: dashed;

  animation: ${wobble} 1s infinite;
  transition: background-color 0.3s ease;
`;
