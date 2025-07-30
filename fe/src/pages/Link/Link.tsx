import {
  StyledButton,
  StyledCenterParagraph,
  StyledCenterTitle,
  StyledImage,
  StyledWobbleButton,
} from '@styles/common.style';
import { useLocation, useParams } from 'react-router-dom';

const Link = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  return (
    <>
      <StyledImage src="/images/notification.gif" maxWidth="70px" />
      <StyledCenterTitle>링크가 생성되었어요!</StyledCenterTitle>
      <StyledCenterParagraph>
        친구들에게 공유해서 나에 대한 생각을 들어보세요
      </StyledCenterParagraph>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <StyledButton>복사</StyledButton>
      <StyledWobbleButton>결과 확인하기</StyledWobbleButton>
    </>
  );
};

export default Link;
