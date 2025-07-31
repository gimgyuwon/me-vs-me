import { GetResultProps } from '@interfaces/result';
import axios from 'axios';

export const createParticipant = async ({ id, gender }: GetResultProps) => {
  if (!id || !gender) throw new Error('필수 파라미터 누락');
  const response = await axios.post('/api/participant/', { id, gender });

  return response.data;
};
