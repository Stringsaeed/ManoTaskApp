import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IProduct} from 'types';

import {Route} from './routes';

export type MainStackParamsList = {
  [Route.Discovery]: undefined;
  [Route.Product]: {product: IProduct};
};

export type MainScreenProps<T extends keyof MainStackParamsList> =
  NativeStackScreenProps<MainStackParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamsList {}
  }
}
