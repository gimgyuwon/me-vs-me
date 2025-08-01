import {
  StyledButton,
  StyledWobbleButton,
  StyledText,
  StyledCenterTitle,
  StyledImage,
  StyledColItem,
  StyledRowItem,
  StyledBox,
  StyledSpeechBubble,
} from '@styles/common.style';
import {
  RESULT_COMPATIBILITY_MAP,
  RESULT_DESCRIPMATION_MAP,
} from '@constant/resultMap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResult } from '@services/result';
import { GetResultProps, ResultProps } from '@interfaces/result';
import { Helmet } from 'react-helmet-async';

const Result = () => {
  const navigate = useNavigate();
  const currUrl = window.location.href;

  const { id, gender } = useParams<GetResultProps>();
  const [resultData, setResultData] = useState<ResultProps | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !gender) {
      setError('유효하지 않은 요청입니다.');
      setLoading(false);
      return;
    }

    const fetchResult = async () => {
      try {
        const response = await getResult({ id, gender });
        setResultData(response);
      } catch (err: any) {
        if (
          err.response?.status === 404 &&
          err.response?.data?.error === 'No votes yet'
        ) {
          setResultData({ resultKey: '', voteNum: '-1' });
          return;
        }
        setError(err.message || '결과 데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id, gender]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(currUrl);
      alert('결과 링크가 복사되었어요');
    } catch {
      alert('복사에 실패했어요. 다시 시도해주세요.');
    }
  };

  const handleCopyVoteClick = async () => {
    try {
      const voteUrl = currUrl.replace('/result', '/vote');
      await navigator.clipboard.writeText(voteUrl);
      alert('투표 링크가 복사되었어요!');
    } catch {
      alert('복사에 실패했어요. 다시 시도해주세요.');
    }
  };

  if (isLoading) return <StyledText>결과를 불러오는 중이에요...</StyledText>;
  if (error) return <StyledText>{error}</StyledText>;
  if (!resultData) return null;

  const { resultKey, voteNum }: ResultProps = resultData;
  const good = resultKey
    ? (RESULT_COMPATIBILITY_MAP[resultKey]?.good ?? '')
    : '';
  const bad = resultKey ? (RESULT_COMPATIBILITY_MAP[resultKey]?.bad ?? '') : '';

  const isMale = gender === 'male';
  const getImageSrc = (key: string) =>
    `/images/result_${isMale ? 'male' : 'female'}/${key}.svg`;

  return (
    <>
      <Helmet>
        <title>남이 보는 나는 | 투표 결과</title>
        <meta
          name="description"
          content="내 친구들이 나를 어떻게 보는지 투표 결과를 확인하는 페이지"
        />
      </Helmet>

      {Number(voteNum) < 1 ? (
        <>
          <StyledText size="lg" weight="bold">
            아직 한 명도 <br />
            투표하지 않았어요!
          </StyledText>
          <StyledText>친구들에게 얼른 투표해 달라고 알려주세요!</StyledText>
          <StyledWobbleButton
            $bgColor="#fff"
            $textColor="#000"
            onClick={handleCopyVoteClick}
          >
            투표 링크 복사하기
          </StyledWobbleButton>

          <StyledWobbleButton
            $bgColor="#fff"
            $textColor="#000"
            onClick={handleCopyClick}
          >
            결과 링크 복사하기
          </StyledWobbleButton>

          <StyledButton
            $bgColor="#000"
            $textColor="#fff"
            onClick={() => navigate('/')}
          >
            처음으로
          </StyledButton>
          <StyledText size="sm">
            결과 링크를 꼭 기억해 주세요! <br />이 링크로 친구들이 투표한 결과를
            언제든 확인할 수 있어요.
          </StyledText>
        </>
      ) : (
        <>
          <StyledText size="lg" weight="bold">
            친구 {voteNum}명이 <br />
            선택한 내 캐릭터는?
          </StyledText>

          <StyledCenterTitle>
            {RESULT_DESCRIPMATION_MAP[resultKey].title}
          </StyledCenterTitle>

          <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].summary}</StyledText>

          <StyledSpeechBubble>
            <StyledText fontFamily="TalkFont" size="md" weight="bold">
              {RESULT_DESCRIPMATION_MAP[resultKey].talk}
            </StyledText>
            <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].emoji}</StyledText>
          </StyledSpeechBubble>

          <StyledImage
            src={getImageSrc(resultKey)}
            alt={resultKey}
            $maxWidth="300px"
          />

          <StyledBox $bgColor="#e0e0e0" $paddingTB="0.5rem" $paddingRL="0.5rem">
            {RESULT_DESCRIPMATION_MAP[resultKey].description.map(
              (line, idx) => (
                <StyledText size="sm" align="start" key={idx}>
                  • {line}
                </StyledText>
              ),
            )}
          </StyledBox>

          <StyledRowItem>
            <StyledColItem>
              <StyledText>내 친구 사대천왕</StyledText>
              <StyledImage src={getImageSrc(good)} $maxWidth="200px" />
              <StyledText size="sm">
                {RESULT_DESCRIPMATION_MAP[good].title}
              </StyledText>
            </StyledColItem>
            <StyledColItem>
              <StyledText>운명의 앙숙</StyledText>
              <StyledImage src={getImageSrc(bad)} $maxWidth="200px" />
              <StyledText size="sm">
                {RESULT_DESCRIPMATION_MAP[bad].title}
              </StyledText>
            </StyledColItem>
          </StyledRowItem>

          <StyledWobbleButton
            $bgColor="#fff"
            $textColor="#000"
            onClick={handleCopyClick}
          >
            결과 링크 복사하기
          </StyledWobbleButton>
          <StyledButton
            $bgColor="#000"
            $textColor="#fff"
            onClick={() => navigate('/')}
          >
            처음으로
          </StyledButton>
        </>
      )}
    </>
  );
};

export default Result;
