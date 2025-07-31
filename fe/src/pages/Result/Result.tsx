import {
  StyledButton,
  StyledText,
  StyledCenterTitle,
  StyledImage,
  StyledColItem,
  StyledRowItem,
  StyledBox,
} from '@styles/common.style';
import {
  RESULT_COMPATIBILITY_MAP,
  RESULT_DESCRIPMATION_MAP,
} from '@constant/resultMap';

const Result = () => {
  const resultKey = 'aaab';
  const good = RESULT_COMPATIBILITY_MAP[resultKey].good;
  const bad = RESULT_COMPATIBILITY_MAP[resultKey].bad;
  return (
    <>
      <StyledText>친구들이 선택한 나의 모습</StyledText>
      <StyledCenterTitle>
        {RESULT_DESCRIPMATION_MAP[resultKey].title}
      </StyledCenterTitle>
      <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].summary}</StyledText>
      <StyledImage
        src={`/images/result_male/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      <StyledBox borderWidth="2px" borderColor="#000" borderStyle="solid">
        <StyledText>{RESULT_DESCRIPMATION_MAP[resultKey].emoji}</StyledText>
      </StyledBox>
      <StyledText fontFamily="TalkFont" size="lg" weight="bold">
        {RESULT_DESCRIPMATION_MAP[resultKey].talk}
      </StyledText>

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
