export default class NumberFormatParse {
  symbols = {
    unit: 'unit',
    currency: 'currency',
    percent: 'percentSign',
  };

  constructor(locale, options = { style: 'decimal' }) {
    this.formatter = new Intl.NumberFormat(locale, options);

    const parts = this.formatter.formatToParts(12345.6789);
    const groupPart = parts.find((d) => d.type === 'group');
    const decimalPart = parts.find((d) => d.type === 'decimal');

    const numerals = [
      ...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210),
    ].reverse();

    const indexMap = new Map(numerals.map((d, i) => [d, i]));
    this.getIndex = (d) => indexMap.get(d);

    this.numeralRegExp = new RegExp(`[${numerals.join('')}]`, 'g');

    if (groupPart) {
      this.groupRegExp = new RegExp(`[${groupPart.value}]`, 'g');
    }
    if (decimalPart) {
      this.decimalRegExp = new RegExp(`[${decimalPart.value}]`);
    }

    if (options.style != null && options.style !== 'decimal') {
      this.symbolKey = this.symbols[options.style];
      this.symbol = parts.find((d) => d.type === this.symbolKey).value;
    }
  }

  parse(string) {
    const parsed = string
      .trim()
      .replace(this.groupRegExp, '')
      .replace(this.decimalRegExp, '.')
      .replace(this.numeralRegExp, this.getIndex);

    return parsed ? +parsed : NaN;
  }

  stringify(number) {
    if (this.symbolKey) {
      const parts = this.formatToParts(number);
      return parts
        .map((p) => (p.type === this.symbolKey ? '' : p.value))
        .join('')
        .trim();
    }

    return this.format(number);
  }

  format(number) {
    if (number == null || Number.isNaN(number) || !Number.isFinite(number)) {
      throw new RangeError('Invalid number!');
    }
    return this.formatter.format(number);
  }

  formatToParts(number) {
    if (number == null || Number.isNaN(number) || !Number.isFinite(number)) {
      throw new RangeError('Invalid number!');
    }
    return this.formatter.formatToParts(number);
  }

  resolvedOptions() {
    return this.formatter.resolvedOptions();
  }
}
