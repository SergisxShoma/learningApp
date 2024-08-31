export const withoutLatin = (value: string) => {
  return value.replace(/[A-Za-z]/g, '');
};

export const removeDuplicateSpaces = (value: string) => {
  return value.replace(/\s+/g, ' ');
};

export const changeRegisterCapitalize = (value: string) => {
  let returnValue = value.replace(/[A-ZА-ЯЁ]/g, match => match.toLowerCase());
  returnValue = returnValue.replace(/^[a-zа-яё]/, match => match.toUpperCase());
  returnValue = returnValue.replace(/\s[a-zа-яё]/g, match => match.toUpperCase());

  return returnValue;
};
