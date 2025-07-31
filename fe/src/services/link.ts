import { GetResultProps } from '@interfaces/result';
import axios from 'axios';

export const createParticipant = async ({ id, gender }: GetResultProps) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  if (!id || !gender) throw new Error('필수 파라미터 누락');
  const response = await axios.post(`${BASE_URL}/api/participant/`, {
    id,
    gender,
  });

  return response.data;
};
