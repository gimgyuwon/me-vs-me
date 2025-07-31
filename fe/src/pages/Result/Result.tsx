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
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ResultProps {
  resultKey: string;
  voteNum: number;
}

const Result = () => {
  const navigate = useNavigate();
  const currUrl = window.location.href;

  const [resultData, setResultData] = useState<ResultProps | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get<ResultProps>('/api/result/');
        setResultData(response.data);
      } catch (err: any) {
        setError(err.message || '결과 데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);

  if (isLoading) return <StyledText>로딩 중....</StyledText>;
  if (error) return <StyledText>{error}</StyledText>;
  if (!resultData) return null;

  const { resultKey, voteNum } = resultData;
  const good = RESULT_COMPATIBILITY_MAP[resultKey].good || '';
  const bad = RESULT_COMPATIBILITY_MAP[resultKey].bad || '';

  const handleCopyClick = () => {
    navigator.clipboard.writeText(currUrl);
  };

  return (
    <>
      {/* title */}
      <StyledText size="lg" weight="bold">
        친구 {voteNum}명이 <br />
        선택한 내 캐릭터는?
      </StyledText>
      <StyledCenterTitle>
        {RESULT_DESCRIPMATION_MAP[resultKey].title}
      </StyledCenterTitle>
      {/* summary */}
      <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].summary}</StyledText>
      {/* speech bubble */}
      <StyledSpeechBubble>
        <StyledText fontFamily="TalkFont" size="md" weight="bold">
          {RESULT_DESCRIPMATION_MAP[resultKey].talk}
        </StyledText>
        {/* <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].emoji}</StyledText> */}
      </StyledSpeechBubble>
      {/* image */}
      <StyledImage
        src={`/images/result_male/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      {/* description */}
      <StyledBox $bgColor="#e0e0e0" $paddingTB="0.5rem" $paddingRL="0.5rem">
        {RESULT_DESCRIPMATION_MAP[resultKey].description.map((line, idx) => (
          <StyledText size="sm" align="start" key={idx}>
            {' '}
            • {line}
          </StyledText>
        ))}
      </StyledBox>
      {/* good and bad */}
      <StyledRowItem>
        {/* good */}
        <StyledColItem>
          <StyledText>내 친구 사대천왕</StyledText>
          <StyledImage
            src={`/images/result_male/${good}.svg`}
            $maxWidth="200px"
          />
          <StyledText size="sm">
            {RESULT_DESCRIPMATION_MAP[good].title}
          </StyledText>
        </StyledColItem>
        {/* bad */}
        <StyledColItem>
          <StyledText>운명의 앙숙</StyledText>
          <StyledImage
            src={`/images/result_male/${bad}.svg`}
            $maxWidth="200px"
          />
          <StyledText size="sm">
            {RESULT_DESCRIPMATION_MAP[bad].title}
          </StyledText>
        </StyledColItem>
      </StyledRowItem>
      {/* copy button */}
      <StyledWobbleButton
        $bgColor="#fff"
        $textColor="#000"
        onClick={handleCopyClick}
      >
        결과 링크 복사하기
      </StyledWobbleButton>
      {/* save button */}
      <StyledButton
        $bgColor="#000"
        $textColor="#fff"
        onClick={() => navigate('/')}
      >
        처음으로
      </StyledButton>
    </>
  );
};

export default Result;
