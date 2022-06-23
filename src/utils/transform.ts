import currency from "currency.js";

export function toYuan(value: currency.Any): number;
export function toYuan(value: currency.Any, options?: currency.Options): string;
export function toYuan(value: currency.Any, options?: currency.Options) {
  if (options) {
    return currency(value).multiply(0.01).format(options);
  }
  return currency(value).multiply(0.01).value;
}

export function toFen(value: currency.Any): number;
export function toFen(value: currency.Any, options?: currency.Options): string;
export function toFen(value: currency.Any, options?: currency.Options) {
  if (options) {
    return currency(value).multiply(100).format(options);
  }
  return currency(value).multiply(100).value;
}

export default {
  toFen,
  toYuan,
};
