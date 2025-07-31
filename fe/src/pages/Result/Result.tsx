import {
  StyledButton,
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

const Result = () => {
  const resultKey = 'aaaa';
  const good = RESULT_COMPATIBILITY_MAP[resultKey].good;
  const bad = RESULT_COMPATIBILITY_MAP[resultKey].bad;
  return (
    <>
      {/* title */}
      <StyledText>친구들이 선택한 나의 모습</StyledText>
      <StyledCenterTitle>
        {RESULT_DESCRIPMATION_MAP[resultKey].title}
      </StyledCenterTitle>
      {/* summary */}
      <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].summary}</StyledText>
      {/* speech bubble */}
      <StyledSpeechBubble>
        <StyledText fontFamily="TalkFont" size="lg" weight="bold">
          {RESULT_DESCRIPMATION_MAP[resultKey].talk}
        </StyledText>
        <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].emoji}</StyledText>
      </StyledSpeechBubble>
      {/* image */}
      <StyledImage
        src={`/images/result_male/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      {/* description */}
      <StyledBox bgColor="#ccc" paddingTB="0.5rem" paddingRL="0.5rem">
        {RESULT_DESCRIPMATION_MAP[resultKey].description.map((line, idx) => (
          <StyledText size="sm" align="start" key={idx}>
            {' '}
            • {line}
          </StyledText>
        ))}
      </StyledBox>
      {/* good and bad */}
      <StyledRowItem>
        <StyledColItem>
          <StyledText>내 친구 사대천왕</StyledText>
          <StyledImage
            src={`/images/result_male/${good}.svg`}
            $maxWidth="200px"
          />
        </StyledColItem>
        <StyledColItem>
          <StyledText>운명의 앙숙</StyledText>
          <StyledImage
            src={`/images/result_male/${bad}.svg`}
            $maxWidth="200px"
          />
        </StyledColItem>
      </StyledRowItem>
      {/* save button */}
      <StyledButton>저장하기</StyledButton>
    </>
  );
};

export default Result;
