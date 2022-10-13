export default function numberToString(
  n,
  { decimalPlaces = 2, forceDecimals = false, plain = false }
) {
  if (typeof parseFloat(n) !== 'number') return n;

  const [i, d] = (+n).toFixed(decimalPlaces).split('.');

  let resultInt = `${(+i).toLocaleString()}`;
  let resultDec = '';

  if (decimalPlaces > 0 || forceDecimals) {
    let zeroString = '';
    let decimals =
      forceDecimals && decimalPlaces === 0 ? '00' : d.slice(0, decimalPlaces);

    for (let i = 0; i < decimalPlaces; i++) {
      zeroString += '0';
    }

    if (decimals !== zeroString || forceDecimals) {
      resultDec += '.' + decimals;
    }
  }

  if (plain) return i + resultDec;

  return resultInt + resultDec;
}

export function priceToString(p) {
  if (isNaN(parseFloat(p))) return p;

  return numberToString(p / 100, { decimalPlaces: 2, forceDecimals: true });
  // return `${(+i).toLocaleString()}.${d || '00'}`;
}
