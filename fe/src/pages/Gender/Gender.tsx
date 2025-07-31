import {
  StyledCenterTitle,
  StyledImage,
  StyledWobbleButton,
} from '@styles/common.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Gender = () => {
  const id = nanoid();
  const navigate = useNavigate();
  const [selectGender, setSelectGender] = useState<'male' | 'female' | null>(
    null,
  );

  const handleClick = (gender: 'male' | 'female') => {
    setSelectGender(gender);
    navigate(`/link/${id}?gender=${gender}`);
  };

  return (
    <>
      <StyledImage src="/images/user.gif" $maxWidth="70px" />
      <StyledCenterTitle>당신의 성별은?</StyledCenterTitle>
      <StyledWobbleButton onClick={() => handleClick('male')}>
        남성
      </StyledWobbleButton>
      <StyledWobbleButton
        $bgColor="#000"
        $textColor="#fff"
        onClick={() => handleClick('female')}
      >
        여성
      </StyledWobbleButton>
    </>
  );
};

export default Gender;
