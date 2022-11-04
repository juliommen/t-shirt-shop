import { HomeContainer, Product } from './../styles/pages/home';
import Image from 'next/image';
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe'
import Link from 'next/link';
import Head from 'next/head';
import { CaretRight, Handbag } from 'phosphor-react';
import { CartContext, ProductType } from './../context/CartContext';
import { useContext } from 'react';

interface HomeProps {
  products : ProductType[]
}

export default function Home({products} : HomeProps) {

  const [sliderRef] = useKeenSlider({
    rubberband:false,
    slides: ({
      perView:'auto',
      spacing:40,
    }),
  })

  const {addProduct} = useContext(CartContext)

  function handleaddProductToCart(product: ProductType){
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ofertei Shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className='keen-slider'>
        {/* <aside>
          <CaretRight size={48}/>
        </aside> */}
        
        {products.map(prod => 

            <Product key={prod.id} className='keen-slider__slide'  >
              <Link key={prod.id} href={`/product/${prod.id}`} prefetch={false}>
                <Image src={prod.imageUrl} alt="" width={520} height={480}/>
              </Link>
              <footer>
                <div>
                  <strong>{prod.name}</strong>
                  <span>{prod.price.toString()}</span>
                </div>
                <Handbag size={26} onClick={() => handleaddProductToCart(prod)}/>
              </footer>
            </Product>
     
      )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({expand: ['data.default_price']})
   
  const products = response.data.map(prod => {
    const price = prod.default_price as Stripe.Price
    return {
      id: prod.id,
      name: prod.name,
      imageUrl: prod.images[0],
      description: prod.description,
      price: (price.unit_amount / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
  })
  return {
    props:{products}, 
    revalidate: 60 * 60 * 2,
  }
}