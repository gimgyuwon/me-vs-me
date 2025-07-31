import {
  StyledCenterTitle,
  StyledRowItem,
  StyledColItem,
  StyledButton,
  StyledText,
  StyledWobbleButton,
} from '@styles/common.style';
import { useState } from 'react';

const Vote = () => {
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const handleOptionClick = (groupIdx: number, value: string) => {
    const updated = [...selectedOptions];
    updated[groupIdx] = value;
    setSelectedOptions(updated);
  };
  const voteOption = [
    ['재벌 3세', '소시민'],
    ['모범생', '일진짱'],
    ['속이 여린', '속이 단단한'],
    ['날카로운 인상', '부드러운 인상'],
  ];
  const handleSubmit = () => {
    if (selectedOptions.includes(null)) alert('모든 질문에 응답해주세요');
  };

  return (
    <>
      <StyledCenterTitle>내 친구는 어떤 이미지?</StyledCenterTitle>
      <StyledColItem>
        {voteOption.map((optionPair, idx) => (
          <StyledRowItem key={idx}>
            {/* fist option */}
            <StyledButton
              $bgColor="#fff"
              $textColor="#000"
              onClick={() => handleOptionClick(idx, optionPair[0])}
              selected={selectedOptions[idx] === optionPair[0]}
            >
              <StyledText weight="bold">{optionPair[0]}</StyledText>
            </StyledButton>
            {/* second option */}
            <StyledButton
              $bgColor="#fff"
              $textColor="#000"
              onClick={() => handleOptionClick(idx, optionPair[1])}
              selected={selectedOptions[idx] === optionPair[1]}
            >
              <StyledText weight="bold">{optionPair[1]}</StyledText>
            </StyledButton>
          </StyledRowItem>
        ))}
      </StyledColItem>
      {/* submit button */}
      <StyledWobbleButton
        $bgColor="#000"
        $textColor="#fff"
        onClick={handleSubmit}
      >
        결과 제출하기
      </StyledWobbleButton>
    </>
  );
};

export default Vote;
