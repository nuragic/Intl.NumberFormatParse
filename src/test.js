// THIS TEST DOES NOT RUN AUTOMATICALLY
// It's just a manual test to run in the browser.

import NumberFormatParse from './NumberFormatParse';

let NFP;
let NF;

let VALUE = 12345678.9;
let LOCALE = 'es-ES';
let CURRENCY = 'EUR';

console.log('***********************');
console.log({ VALUE, LOCALE, CURRENCY });

console.group('number');
NFP = new NumberFormatParse(LOCALE);
NF = new Intl.NumberFormat(LOCALE);
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('number');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('currency');
NFP = new NumberFormatParse(LOCALE, { style: 'currency', currency: CURRENCY });
NF = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('currency');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('unit');
NFP = new NumberFormatParse(LOCALE, { style: 'unit', unit: 'liter' });
NF = new Intl.NumberFormat(LOCALE, { style: 'unit', unit: 'liter' });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('unit');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('percent');
NFP = new NumberFormatParse(LOCALE, { style: 'percent' });
NF = new Intl.NumberFormat(LOCALE, { style: 'percent' });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('percent');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

LOCALE = 'en';
CURRENCY = 'CLP';

console.log('***********************');
console.log({ VALUE, LOCALE, CURRENCY });

console.group('number');
NFP = new NumberFormatParse(LOCALE);
NF = new Intl.NumberFormat(LOCALE);
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('number');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('currency');
NFP = new NumberFormatParse(LOCALE, { style: 'currency', currency: CURRENCY });
NF = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('currency');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('unit');
NFP = new NumberFormatParse(LOCALE, { style: 'unit', unit: 'liter' });
NF = new Intl.NumberFormat(LOCALE, { style: 'unit', unit: 'liter' });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('unit');
console.assert(NFP.format(VALUE) === NF.format(VALUE));

console.group('percent');
NFP = new NumberFormatParse(LOCALE, { style: 'percent' });
NF = new Intl.NumberFormat(LOCALE, { style: 'percent' });
console.log('symbol', NFP.symbol);
console.log('format', NFP.format(VALUE));
console.log('stringify', NFP.stringify(VALUE));
console.log('parse', NFP.parse(NFP.stringify(VALUE)));
console.groupEnd('percent');
console.assert(NFP.format(VALUE) === NF.format(VALUE));
