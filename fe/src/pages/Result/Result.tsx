import {
  StyledButton,
  StyledCenterParagraph,
  StyledCenterTitle,
  StyledImage,
  StyledImageRow,
  StyledLinkBox,
  StyledTextRow,
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
      <StyledCenterParagraph>친구들이 선택한 나의 모습</StyledCenterParagraph>
      <StyledCenterTitle>
        {RESULT_DESCRIPMATION_MAP[resultKey].title}
      </StyledCenterTitle>
      <StyledCenterParagraph>
        {RESULT_DESCRIPMATION_MAP[resultKey].summary}
      </StyledCenterParagraph>
      <StyledImage
        src={`/images/result_male/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      <StyledCenterParagraph>
        {RESULT_DESCRIPMATION_MAP[resultKey].emoji}
      </StyledCenterParagraph>
      <StyledCenterParagraph>
        {RESULT_DESCRIPMATION_MAP[resultKey].talk}
      </StyledCenterParagraph>
      <StyledLinkBox>
        {RESULT_DESCRIPMATION_MAP[resultKey].description}
      </StyledLinkBox>

      <StyledTextRow>
        <StyledCenterParagraph>내 친구 사대천왕</StyledCenterParagraph>
        <StyledCenterParagraph>운명의 앙숙</StyledCenterParagraph>
      </StyledTextRow>
      <StyledImageRow>
        <StyledImage
          src={`/images/result_male/${good}.svg`}
          $maxWidth="200px"
        />
        <StyledImage src={`/images/result_male/${bad}.svg`} $maxWidth="200px" />
      </StyledImageRow>

      <StyledButton>저장하기</StyledButton>
    </>
  );
};

export default Result;
