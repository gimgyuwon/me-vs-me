import {
  StyledCenterTitle,
  StyledRowItem,
  StyledColItem,
  StyledButton,
  StyledText,
  StyledWobbleButton,
  StyledImage,
} from '@styles/common.style';
import axios from 'axios';
import { useState } from 'react';
import { voteList } from '@constant/voteOption';
import { useNavigate, useParams } from 'react-router-dom';

const Vote = () => {
  const navigate = useNavigate();
  const { id, gender } = useParams();
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

  const handleSubmit = async () => {
    if (selectedOptions.includes(null)) {
      alert('모든 질문에 응답해주세요');
      return;
    }

    try {
      await axios.post('/api/vote/', {
        id,
        gender,
        answers: selectedOptions,
      });
      alert('투표가 성공적으로 제출되었습니다!');
    } catch (error) {
      console.error(error);
      alert('투표 제출 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <StyledCenterTitle>내 친구는 어떤 이미지?</StyledCenterTitle>
      <StyledColItem>
        {voteList.map((pair, idx) => (
          <StyledRowItem key={idx}>
            {/* fist option */}
            <StyledButton
              $bgColor="#fff"
              $textColor="#000"
              onClick={() => handleOptionClick(idx, 'a')}
              selected={selectedOptions[idx] === 'a'}
            >
              {/* option img */}
              <StyledImage src={pair.left.src} $maxWidth="100px" />
              {/* option text */}
              <StyledText weight="bold">{pair.left.label}</StyledText>
            </StyledButton>
            {/* second option */}
            <StyledButton
              $bgColor="#fff"
              $textColor="#000"
              onClick={() => handleOptionClick(idx, 'b')}
              selected={selectedOptions[idx] === 'b'}
            >
              {/* option img */}
              <StyledImage src={pair.right.src} $maxWidth="100px" />
              {/* option text */}
              <StyledText weight="bold">{pair.right.label}</StyledText>
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
