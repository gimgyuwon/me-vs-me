import {
  StyledButton,
  StyledCenterParagraph,
  StyledCenterTitle,
  StyledImage,
  StyledLinkBox,
  StyledWobbleButton,
} from '@styles/common.style';
import { useNavigate, useParams } from 'react-router-dom';

const Link = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const voteUrl = `${window.location.origin}/vote/${id}`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(voteUrl);
  };

  const handleResultCheckClick = () => {
    navigate(`/result/${id}`);
  };

  return (
    <>
      <StyledImage src="/images/notification.gif" $maxWidth="70px" />
      <StyledCenterTitle>링크가 생성되었어요!</StyledCenterTitle>
      <StyledCenterParagraph>
        친구들에게 공유해서 나에 대한 생각을 들어보세요
      </StyledCenterParagraph>
      <StyledLinkBox>{voteUrl}</StyledLinkBox>
      <StyledButton onClick={handleCopyClick}>링크 복사</StyledButton>
      <StyledWobbleButton onClick={handleResultCheckClick}>
        결과 확인하기
      </StyledWobbleButton>
    </>
  );
};

export default Link;
