import {createIntl, createIntlCache} from '@formatjs/intl';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

const intl = createIntl(
  {
    defaultLocale: 'en',
    locale: 'en',
    messages: {},
  },
  cache,
);

export function formatPrice(price: number, currency: string = 'USD') {
  return intl.formatNumber(price, {
    style: 'currency',
    currency,
  });
}
