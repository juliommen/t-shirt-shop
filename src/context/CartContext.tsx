import { createContext, ReactNode, useState } from "react";

export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  description: string,
  price: string,
  priceId: string
}

interface CartContextType {
  products: ProductType[]
  addProduct: (product: ProductType) => void
  removeProduct: (product: ProductType) => void
  
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({children}: CartProviderProps) {
    const [products, setProducts] = useState<ProductType[]>([])

    function addProduct(product: ProductType){
      setProducts(products => [...products, product] )
    }

    function removeProduct(product: ProductType){
      setProducts(products => {
        return [...products.filter(prod => prod.id !== product.id)]
      })
    }

    return (
      <CartContext.Provider value={{products, addProduct, removeProduct}}>
        {children}
      </CartContext.Provider>
    )
}