import axios from 'axios';
import { GetResultProps, ResultProps } from '@interfaces/result';

export const getResult = async ({
  id,
  gender,
}: GetResultProps): Promise<ResultProps> => {
  if (!id || !gender) throw new Error('필수 파라미터 누락');
  const response = await axios.get(`/api/result/${id}/${gender}`);

  return response.data;
};
