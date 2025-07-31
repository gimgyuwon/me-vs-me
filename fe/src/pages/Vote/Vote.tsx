import {
  StyledCenterTitle,
  StyledRowItem,
  StyledColItem,
  StyledButton,
  StyledText,
  StyledWobbleButton,
  StyledImage,
} from '@styles/common.style';
import { useState } from 'react';
import { voteList } from '@constant/voteOption';
import { useNavigate, useParams } from 'react-router-dom';
import { submitVote } from '@services/vote';
import { GetResultProps } from '@interfaces/result';
import { Helmet } from 'react-helmet-async';

const Vote = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id, gender } = useParams<GetResultProps>();
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
    setLoading(true);

    try {
      await submitVote({ id: id, gender: gender, answers: selectedOptions });
      navigate(`/result/${id}/${gender}`);
    } catch (error) {
      console.error(error);
      alert('투표 제출 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>남이 보는 나는 | 투표하기</title>
        <meta
          name="description"
          content="내 친구는 어떤 이미지인지 투표하는 페이지"
        />
      </Helmet>
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
        disabled={loading}
      >
        {loading ? '제출 중....' : '제출하고 결과 확인하기'}
      </StyledWobbleButton>
    </>
  );
};

export default Vote;
