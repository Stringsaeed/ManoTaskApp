import React from 'react';
import {IProduct} from 'types';

interface IProductScreenContext {
  product: IProduct;
}

const ProductScreenContext = React.createContext<
  IProductScreenContext | undefined
>(undefined);

export function useProductScreenContext() {
  const context = React.useContext(ProductScreenContext);
  if (!context) {
    throw new Error(
      'useProductScreenContext must be used within a ProductScreenContextProvider',
    );
  }
  return context;
}

export function ProductScreenProvider({
  children,
  product,
}: {
  children: React.ReactNode;
  product: IProduct;
}) {
  return (
    <ProductScreenContext.Provider value={{product}}>
      {children}
    </ProductScreenContext.Provider>
  );
}
