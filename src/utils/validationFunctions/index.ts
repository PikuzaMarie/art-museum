import {
  IS_NOT_EMPTY_ERROR_VALUE,
  HAS_LETTERS_OR_NUMBERS_ERROR_VALUE,
} from '../../constants';

/**
 * The function checks if the value is not empty
 *
 * @param {string} value - value to check
 *
 * @returns {Array} - an array with error messages or empty array
 */
export const isNotEmpty = (value: string) => {
  return value.length >= 3 ? [] : IS_NOT_EMPTY_ERROR_VALUE;
};

/**
 * The function checks if the value contains letters or numbers
 *
 * @param {string} value - value to check
 *
 * @returns {Array} - an array with error messages or empty array
 */
export const hasLettersOrNumbers = (value: string) => {
  return /[a-zA-Z0-9]/.test(value) ? [] : HAS_LETTERS_OR_NUMBERS_ERROR_VALUE;
};

/**
 * The function validates the input value
 *
 * @param {string} value - value to validate
 *
 * @returns {Array} - error messages or empty array
 */
export const validateInput = (value: string) => {
  if (value.trim() === '') return [];
  return [...isNotEmpty(value), ...hasLettersOrNumbers(value)];
};
