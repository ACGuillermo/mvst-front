import { TeaFacade, TeaResponse } from '../infrastructure/tea.facade';

export const fetchTeaService = async (): Promise<TeaResponse[]> => {
  return await new TeaFacade().fetchAll();
};
