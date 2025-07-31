import { ImageRotator } from '@pages/Home';
import {
  StyledCenterTitle,
  StyledWobbleButton,
  StyledText,
  StyledBox,
} from '@styles/common.style';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate('/gender');
  };

  return (
    <>
      <StyledCenterTitle>남이 보는 내 모습은?</StyledCenterTitle>
      <StyledText size="md">친구들이 생각하는 나는 어떤 모습일까?</StyledText>
      <StyledBox $paddingTB="1rem">
        <StyledText size="md" weight="bold" fontFamily="TalkFont">
          - 사대천왕 고등학교 편 -
        </StyledText>
      </StyledBox>

      <ImageRotator />
      <StyledWobbleButton onClick={handleClickStart}>
        시작하기
      </StyledWobbleButton>
    </>
  );
};

export default Home;
