import { CategoryService } from 'api';
import { CATEGORIES_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';

const getCategories = (unlinkedToBudget) => () =>
  CategoryService.findAll(unlinkedToBudget);

export const useCategories = ({ unlinkedToBudget }) =>
  useQuery(
    [CATEGORIES_QUERY, unlinkedToBudget],
    getCategories(unlinkedToBudget),
  );
