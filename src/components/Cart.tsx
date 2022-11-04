
import { X } from 'phosphor-react';
import { CartContainer, ImageCartContainer } from './CartStyle';
import Image from 'next/image'
import image from '../assets/icon.png'
import { CartContext, ProductType } from './../context/CartContext';
import { useContext } from 'react';

export function Cart({closeCart}){
  const {products, removeProduct} = useContext(CartContext)
  function handleRemoveProduct(product: ProductType){
    removeProduct(product)
  }
  return (
    <CartContainer>
      <X size={24} weight={'bold'} onClick={closeCart}/>
      <h1>Sacola de compras</h1>
      {products.map( product => {
        return (
          <div key={product.id}>
            <ImageCartContainer>
                <Image src={product.imageUrl} alt="" width={120} height={120}/>
            </ImageCartContainer>
            <footer>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <button onClick={() => handleRemoveProduct(product)}>Remover</button>
            </footer>
          </div>
        )
      })}
    </CartContainer>
  )
}