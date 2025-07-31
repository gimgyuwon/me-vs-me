import axios from 'axios';

interface SubmitVoteProps {
  id?: string;
  gender?: string;
  answers: (string | null)[];
}

export const submitVote = async ({ id, gender, answers }: SubmitVoteProps) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  if (!id || !gender) throw new Error('필수 파라미터 누락');
  if (!answers) throw new Error('모든 질문에 응답해주세요.');

  const response = await axios.post(`${BASE_URL}/api/vote/`, {
    id,
    gender,
    answers,
  });

  return response.data;
};
