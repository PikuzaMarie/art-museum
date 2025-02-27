import {
  IS_NOT_EMPTY_ERROR_VALUE,
  HAS_LETTERS_OR_NUMBERS_ERROR_VALUE,
} from '../../constants';
import { isNotEmpty, hasLettersOrNumbers, validateInput } from './index';

describe('isNotEmpty', () => {
  it('should return an error message if the input is less than 3 characters', () => {
    expect(isNotEmpty('')).toEqual(IS_NOT_EMPTY_ERROR_VALUE);
    expect(isNotEmpty('a')).toEqual(IS_NOT_EMPTY_ERROR_VALUE);
    expect(isNotEmpty('ab')).toEqual(IS_NOT_EMPTY_ERROR_VALUE);
  });

  it('should return an empty array if the input has at least 3 characters', () => {
    expect(isNotEmpty('abc')).toEqual([]);
    expect(isNotEmpty('abcd')).toEqual([]);
  });
});

describe('hasLettersOrNumbers', () => {
  it('should return an error message if the input does not include letters or numbers', () => {
    expect(hasLettersOrNumbers('**/')).toEqual(
      HAS_LETTERS_OR_NUMBERS_ERROR_VALUE,
    );
  });

  it('should return an empty array if the input includes letters or numbers', () => {
    expect(hasLettersOrNumbers('abc')).toEqual([]);
    expect(hasLettersOrNumbers('123')).toEqual([]);
    expect(hasLettersOrNumbers('abc123')).toEqual([]);
    expect(hasLettersOrNumbers('a!2')).toEqual([]);
  });
});

describe('validateInput', () => {
  it('should return an empty array if the input is an empty string after trimming', () => {
    expect(validateInput('')).toEqual([]);
    expect(validateInput('   ')).toEqual([]);
  });

  it('should return errors from isNotEmpty and hasLettersOrNumbers if input is invalid', () => {
    expect(validateInput('ab')).toEqual(IS_NOT_EMPTY_ERROR_VALUE);
    expect(validateInput('a!')).toEqual(IS_NOT_EMPTY_ERROR_VALUE);
    expect(validateInput('!!!')).toEqual(HAS_LETTERS_OR_NUMBERS_ERROR_VALUE);
    expect(validateInput('!!')).toEqual([
      ...IS_NOT_EMPTY_ERROR_VALUE,
      ...HAS_LETTERS_OR_NUMBERS_ERROR_VALUE,
    ]);
  });

  it('should return an empty array if the input is valid', () => {
    expect(validateInput('fwt')).toEqual([]);
    expect(validateInput('qzc569')).toEqual([]);
    expect(validateInput('a!2')).toEqual([]);
  });
});
