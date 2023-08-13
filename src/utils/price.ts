interface PriceSeperator {
  seperatedPrice: string;
  price: number | undefined;
}

const priceSeperator = (price: string): PriceSeperator => {
  const numberWithoutCommas = removeSeperator(price).replace(/\D/g, '');
  const parts = numberWithoutCommas.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return {
    seperatedPrice: parts.join('.'),
    price: Number(numberWithoutCommas) == 0 ? undefined : Number(numberWithoutCommas),
  };
};

const removeSeperator = (price: string): string => {
  return price.replace(/,/g, '');
};

export const seperateWithComma = (number: number): string => {
  let s = '',
    reversed = '',
    count = 0,
    parts = ` ${number}`.split('.');
  for (let i = parts[0].length - 1; i >= 0; i--) {
    reversed += parts[0][i];
  }
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < reversed.length; i++) {
    if (count === 3) {
      s += ',';
      count = 0;
    }
    s += reversed[i];
    count++;
  }
  return s.split('').reverse().join('') + (parts[1] ? '.' + parts[1] : '');
};

export { priceSeperator, removeSeperator };
