import React, {PropsWithChildren} from 'react';
import {IProduct} from 'types';

interface IProductContext {
  product: IProduct;
  index?: number;
  onPress?: () => void;
}

const ProductContext = React.createContext<IProductContext | undefined>(
  undefined,
);

export function useProductContext() {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}

export function ProductProvider({
  children,
  product,
  index,
  onPress,
}: PropsWithChildren<IProductContext>) {
  const contextValue = React.useMemo(
    () => ({product, index, onPress}),
    [product, index, onPress],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
