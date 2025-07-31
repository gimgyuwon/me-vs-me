import { GetResultProps } from '@interfaces/result';
import {
  StyledButton,
  StyledText,
  StyledCenterTitle,
  StyledImage,
  StyledLinkBox,
  StyledWobbleButton,
} from '@styles/common.style';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createParticipant } from '@services/link';
import { Helmet } from 'react-helmet-async';

const Link = () => {
  const { id, gender } = useParams<GetResultProps>();
  const navigate = useNavigate();
  const voteUrl = `${window.location.origin}/vote/${id}/${gender}`;

  useEffect(() => {
    const createParticipantEffect = async () => {
      try {
        await createParticipant({ id: id, gender: gender });
      } catch (err) {
        console.log('Participate 생성 실패', err);
      }
    };
    if (id && gender) {
      createParticipantEffect();
    }
  }, [id, gender]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(voteUrl);
  };

  const handleResultCheckClick = () => {
    navigate(`/result/${id}/${gender}`);
  };

  return (
    <>
      <Helmet>
        <title>남이 보는 나는 | 링크 공유</title>
        <meta
          name="description"
          content="친구에게 투표 참여를 부탁하는 초대 링크 페이지"
        />
      </Helmet>
      <StyledImage src="/images/notification.gif" $maxWidth="70px" />
      <StyledCenterTitle>링크가 생성되었어요!</StyledCenterTitle>
      <StyledText>친구들에게 공유해서 나에 대한 생각을 들어보세요</StyledText>
      <StyledLinkBox>{voteUrl}</StyledLinkBox>
      <StyledButton $bgColor="#000" $textColor="#fff" onClick={handleCopyClick}>
        링크 복사
      </StyledButton>
      <StyledWobbleButton onClick={handleResultCheckClick}>
        결과 확인하기
      </StyledWobbleButton>
    </>
  );
};

export default Link;
