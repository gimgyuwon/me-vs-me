import {
  StyledButton,
  StyledCenterTitle,
  StyledImage,
  StyledInput,
} from '@styles/common.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Name = () => {
  const id = nanoid();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleClickNext = () => {
    if (name.trim()) navigate(`/link/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <StyledImage src="/images/user.gif" maxWidth="70px" />
      <StyledCenterTitle>당신을 뭐라고 부르면 될까요?</StyledCenterTitle>
      <StyledInput
        type="text"
        id="name"
        value={name}
        maxLength={10}
        onChange={handleChange}
        placeholder="이름을 입력해주세요"
      />
      <StyledButton disabled={name.trim() === ''} onClick={handleClickNext}>
        다음
      </StyledButton>
    </>
  );
};

export default Name;
