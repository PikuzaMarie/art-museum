import {
  IS_NOT_EMPTY_ERROR_VALUE,
  HAS_LETTERS_OR_NUMBERS_ERROR_VALUE,
} from '../../constants';

export const isNotEmpty = (value: string) => {
  return value.length >= 3 ? [] : IS_NOT_EMPTY_ERROR_VALUE;
};

export const hasLettersOrNumbers = (value: string) => {
  return /[a-zA-Z0-9]/.test(value) ? [] : HAS_LETTERS_OR_NUMBERS_ERROR_VALUE;
};

export const validateInput = (value: string) => {
  if (value.trim() === '') return [];
  return [...isNotEmpty(value), ...hasLettersOrNumbers(value)];
};
