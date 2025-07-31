import axios from 'axios';
import { GetResultProps, ResultProps } from '@interfaces/result';

export const getResult = async ({
  id,
  gender,
}: GetResultProps): Promise<ResultProps> => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  if (!id || !gender) throw new Error('필수 파라미터 누락');
  const response = await axios.get(`${BASE_URL}/api/result/${id}/${gender}`);

  return response.data;
};
