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
  const resultKey = 'bbab';
  const good = RESULT_COMPATIBILITY_MAP[resultKey].good;
  const bad = RESULT_COMPATIBILITY_MAP[resultKey].bad;
  const vote_num = 3;
  return (
    <>
      {/* title */}
      <StyledText size="lg" weight="bold">
        친구 {vote_num}명이 <br />
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
      {/* save button */}
      <StyledButton $bgColor="#000" $textColor="#fff">
        내 캐릭터 캡쳐하기
      </StyledButton>
    </>
  );
};

export default Result;
