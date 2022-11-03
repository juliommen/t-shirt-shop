import { GetStaticPaths, GetStaticProps } from 'next/types';
import { ImageContainer, ProductContainer, ProductDetails } from './../../styles/pages/product';
import { stripe } from './../../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import { ProductType } from './../index';
import axios from 'axios'
import { useState } from 'react';
import Head from 'next/head';

export default function Product({price,name,description,imageUrl, priceId}: ProductType){
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

	async function handleBuyProduct() {
		setIsCreatingCheckoutSession(true)
		try {
			const response = await axios.post("/api/checkout", {priceId})
			const {checkoutUrl} = response.data
			window.location.href = checkoutUrl
		} catch (error) {
			// Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
			setIsCreatingCheckoutSession(false)
			alert('Falha ao redirecionar ao checkout')
		}
	}

  return (
		<>
      <Head>
          <title>{name} | Ofertei Shop</title>
      </Head>
    	<ProductContainer>
				<ImageContainer>
				<Image src={imageUrl} alt="" width={520} height={480}/>
				</ImageContainer>
				<ProductDetails>
					<h1>{name}</h1>
					<span>{price}</span>
					<p>{description}</p>
					<button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
				</ProductDetails>
			</ProductContainer>
		</>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: {id:'prod_Mgz2aZZrcjtBRn' } }
		],
		fallback: true
	}
}

export const getStaticProps: GetStaticProps<any, {id:string}> = async ({params}) => {
	const productId = params.id
	const product = await stripe.products.retrieve(productId, {
		expand: ['default_price']
	})
	const price = product.default_price as Stripe.Price

	return {
		props: {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			description: product.description,
			price: (price.unit_amount / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
			priceId: price.id
		},
		revalidate: 60 * 60 * 2
	}
}