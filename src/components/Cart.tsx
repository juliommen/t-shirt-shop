
import { X } from 'phosphor-react';
import { CartContainer, ImageCartContainer, TotalContainer } from './CartStyle';
import Image from 'next/image'
import { CartContext, ProductType } from './../context/CartContext';
import { useContext } from 'react';
import axios from 'axios'

export function Cart({closeCart, show}){
  const {products, removeProduct} = useContext(CartContext)

  const totalAmount = products.reduce((t, v) => t += Number(v.price.replace('R$',"").replace(",",".")),0)
  const totalAmountFormatted = (totalAmount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  
  function handleRemoveProduct(product: ProductType){
    removeProduct(product)
  }

  	// const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
	// async function handleBuyProduct() {
	// 	setIsCreatingCheckoutSession(true)
	// 	try {
	// 		const response = await axios.post("/api/checkout", {props.})
	// 		const {checkoutUrl} = response.data
	// 		window.location.href = checkoutUrl
	// 	} catch (error) {
	// 		// Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
	// 		setIsCreatingCheckoutSession(false)
	// 		alert('Falha ao redirecionar ao checkout')
	// 	}
	// }

  return (
    <CartContainer isOpen={show}>
      <header>
        <X size={24} weight={'bold'} onClick={closeCart}/>
      </header>
      <h1>Sacola de compras</h1>
      <div>
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
      </div>
      <TotalContainer>
        <div>
          <p>Quantidade</p>
          <p>{products.length} itens</p>
        </div>
        <div>
          <h1>Valor total</h1>
          <h2>{totalAmountFormatted}</h2>
        </div>
        <button>Finalizar Compra</button>
      </TotalContainer>
    </CartContainer>
  )
}