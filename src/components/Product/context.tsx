import React from 'react';
import {IProduct} from 'types';

interface IProductItemContext {
  item: IProduct;
  index: number;
  onPress?: () => void;
}

const ProductItemContext = React.createContext<IProductItemContext | undefined>(
  undefined,
);

export function useProductItemContext() {
  const context = React.useContext(ProductItemContext);

  if (!context) {
    throw new Error(
      'useProductItemContext must be used within a ProductItemContext',
    );
  }

  return context;
}

export default function ProductItemProvider({
  children,
  item,
  index,
  onPress,
}: {
  children: React.ReactNode;
  item: IProduct;
  index: number;
  onPress?: () => void;
}) {
  return (
    <ProductItemContext.Provider value={{item, index, onPress}}>
      {children}
    </ProductItemContext.Provider>
  );
}
