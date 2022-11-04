import logoImg from '../assets/icon.png'
import Image from "next/image";
import { Handbag } from "phosphor-react";
import {Cart} from "../components/Cart";
import { useContext, useEffect, useState } from "react";
import { CartButton, HeaderContainer } from './HeaderStyle';
import { CartContext } from '../context/CartContext';

export function Header(){
  const [cartOpen, setCartOpen] = useState(false)

  const {products} = useContext(CartContext)

  useEffect(() => {
    if (products.length === 0) {
      handleCloseCart()
    }

  }, [products])

  const isCartEmpty = products.length === 0
  
  function handleOpenCart(){
    if (products.length > 0){
      setCartOpen(true)
    }
  }

  function handleCloseCart(){
    setCartOpen(false)
  }

  return (
    <HeaderContainer>
      <main>
        <Image src={logoImg} width={100} height={100} alt="" />
        <h1>Ofertei <br/><span>T-Shirt shop</span></h1>
      </main>
      <CartButton onClick={handleOpenCart} iconColor={!isCartEmpty ? 'hasItem' : 'empty'} disabled={isCartEmpty}>
        <Handbag size={26}/>
        {!isCartEmpty && <p>{products.length}</p>}
      </CartButton>
      {cartOpen && <Cart closeCart={handleCloseCart}/>}
    </HeaderContainer>
  )
}