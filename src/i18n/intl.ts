import {createIntl, createIntlCache} from '@formatjs/intl';
import * as RNLocalize from 'react-native-localize';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

const {languageTag} = RNLocalize.findBestLanguageTag(['en', 'ar']) ?? {
  languageTag: 'en',
  isRTL: false,
};

const currencies = RNLocalize.getCurrencies();
const currentCurrency = currencies[0] ?? 'USD';

const intl = createIntl(
  {
    defaultLocale: 'en',
    locale: languageTag,
    messages: {},
  },
  cache,
);

export function formatPrice(price: number, currency: string = currentCurrency) {
  return intl.formatNumber(price, {
    style: 'currency',
    currency,
  });
}
