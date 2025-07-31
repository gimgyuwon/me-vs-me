import axios from 'axios';

interface getResultProps {
  id?: string;
  gender?: string;
}

interface resultProps {
  resultKey: string;
  voteNum: number;
}

export const getResult = async ({
  id,
  gender,
}: getResultProps): Promise<resultProps> => {
  if (!id || !gender) throw new Error('필수 파라미터 누락');
  const response = await axios.get(`/api/result/${id}/${gender}`);

  return response.data;
};
