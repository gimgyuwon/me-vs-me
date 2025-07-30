import {
  StyledButton,
  StyledCenterParagraph,
  StyledCenterTitle,
  StyledImage,
  StyledImageRow,
  StyledTextRow,
} from '@styles/common.style';
import { RESULT_COMPATIBILITY_MAP, RESULT_MAP } from '@constant/resultMap';

const Result = () => {
  const resultKey = 'aaab';
  const good = RESULT_COMPATIBILITY_MAP[resultKey].good;
  const bad = RESULT_COMPATIBILITY_MAP[resultKey].bad;
  return (
    <>
      <StyledCenterParagraph>친구들이 선택한 나의 모습</StyledCenterParagraph>
      <StyledCenterTitle>{RESULT_MAP[resultKey]}</StyledCenterTitle>
      <StyledImage
        src={`/images/result/${resultKey}.svg`}
        alt={resultKey}
        $maxWidth="300px"
      />
      <StyledTextRow>
        <StyledCenterParagraph>나와 잘 맞는 타입</StyledCenterParagraph>
        <StyledCenterParagraph>나와 안 맞는 타입</StyledCenterParagraph>
      </StyledTextRow>
      <StyledImageRow>
        <StyledImage src={`/images/result/${good}.svg`} $maxWidth="200px" />
        <StyledImage src={`/images/result/${bad}.svg`} $maxWidth="200px" />
      </StyledImageRow>

      <StyledButton>저장하기</StyledButton>
    </>
  );
};

export default Result;
