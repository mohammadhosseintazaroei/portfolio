import toEnglishDigits from './numberToPersianLetters';

export function validateIranMobileNumber(inputValue: string): string {
  const cleanedValue = inputValue.replace(/[^0-9۰-۹]/g, '');
  const cenvertToEnglish = toEnglishDigits(cleanedValue);
  return cenvertToEnglish.substring(0, 11);
}

export function checkMobileNumber(englishValue: string) {
  const pattern = /^09\d{9}$/;
  if (pattern.test(englishValue)) {
    return englishValue;
  }
}
