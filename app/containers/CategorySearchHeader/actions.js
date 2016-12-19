import { CHOOSE_CATEGORY } from './constants';

export function chooseCategory(category) {
  return {
    type: CHOOSE_CATEGORY,
    category,
  };
};
