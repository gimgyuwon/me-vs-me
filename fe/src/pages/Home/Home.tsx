import { ImageRotator } from '@pages/Home';
import {
  StyledCenterTitle,
  StyledCenterParagraph,
  StyledWobbleButton,
} from '@styles/common.style';

const Home = () => {
  return (
    <>
      <StyledCenterTitle>남이 보는 내 모습은?</StyledCenterTitle>
      <StyledCenterParagraph>
        친구들이 생각하는 나는 어떤 모습일까?
      </StyledCenterParagraph>
      <ImageRotator />
      <StyledWobbleButton>시작하기</StyledWobbleButton>
    </>
  );
};

export default Home;
