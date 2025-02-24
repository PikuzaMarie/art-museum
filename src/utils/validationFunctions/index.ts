export const isNotEmpty = (value: string) => {
  return value.length >= 3 ? [] : ['Input should have at least 3 characters'];
};

export const hasLettersOrNumbers = (value: string) => {
  return /[a-zA-Z0-9]/.test(value)
    ? []
    : ['Input should include letters or numbers'];
};

export const validateInput = (value: string) => {
  if (value.trim() === '') return [];
  return [...isNotEmpty(value), ...hasLettersOrNumbers(value)];
};
