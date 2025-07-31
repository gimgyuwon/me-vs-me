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
      <StyledText>친구들이 선택한 나의 모습</StyledText>
      <StyledCenterTitle>
        {RESULT_DESCRIPMATION_MAP[resultKey].title}
      </StyledCenterTitle>
      <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].summary}</StyledText>
      <StyledSpeechBubble>
        <StyledText fontFamily="TalkFont" size="lg" weight="bold">
          {RESULT_DESCRIPMATION_MAP[resultKey].talk}
        </StyledText>
      </StyledSpeechBubble>

      <StyledImage
        src={`/images/result_male/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      <StyledBox
        maxWidth="100px"
        borderWidth="2px"
        borderColor="#000"
        borderStyle="solid"
        borderRadius="999px"
        paddingRL=""
      >
        <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].emoji}</StyledText>
      </StyledBox>

      <StyledBox bgColor="#ccc" paddingTB="0.5rem" paddingRL="0.5rem">
        {RESULT_DESCRIPMATION_MAP[resultKey].description.map((line, idx) => (
          <StyledText size="sm" align="start" key={idx}>
            {' '}
            • {line}
          </StyledText>
        ))}
      </StyledBox>

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

      <StyledButton>저장하기</StyledButton>
    </>
  );
};

export default Result;
