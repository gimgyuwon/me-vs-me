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
import axios from 'axios';

const Link = () => {
  const { id, gender } = useParams<GetResultProps>();
  const navigate = useNavigate();
  const voteUrl = `${window.location.origin}/vote/${id}/${gender}`;

  useEffect(() => {
    const createParticipantEffect = async () => {
      try {
        await createParticipant({ id: id, gender: gender });
        // retry
        let confirmed = false;
        let retries = 5;
        while (!confirmed && retries-- > 0) {
          try {
            confirmed = await createParticipant({ id: id, gender: gender });
            if (!confirmed) {
              await new Promise((res) => setTimeout(res, 500));
            }
          } catch {
            await new Promise((res) => setTimeout(res, 500));
          }
        }
        // warning message to delay db
        if (!confirmed) {
          console.warn('participant가 DB에 반영되지 않았습니다.');
        }
      } catch (err) {
        console.log('Participate 생성 실패', err);
      }
    };
    if (id && gender) {
      createParticipantEffect();
    }
  }, [id, gender]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(voteUrl);
      alert('투표 링크가 복사되었어요');
    } catch {
      alert('복사에 실패했어요. 다시 시도해주세요.');
    }
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
