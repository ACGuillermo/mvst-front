import { Tea } from '../domain/tea';
import { TeaResponse } from './tea.facade';

export const TeaMapper = {
  toDomain: (data: TeaResponse): Tea =>
    new Tea({
      id: data.id,
      title: data.name,
      img: data.imgUrl,
      addedAt: data.createdAt || '',
    }),
};
