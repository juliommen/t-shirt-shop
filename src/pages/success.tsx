import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import { stripe } from './../lib/stripe';

interface SuccessProps {
  customerName: string
  products: Stripe.Product[]
}

export default function Success({customerName, products} : SuccessProps) {
  const aviso = products.length > 1 ? 'camisetas' : 'camiseta'
  return (
    <>
      <Head>
          <title>Sucesso | Ofertei Shop</title>
          <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <main>
        {products.map( product => {
          return (
            <ImageContainer key={product.id}>
              <Image src={product.images[0]} alt="" width={120} height={120}/>
            </ImageContainer>
          )
        })}
        </main>
        <p>Uhuuu! <strong>{customerName}</strong>, sua compra de {products.length} {aviso} já está a caminho da sua casa</p>
        <Link href={"/"}>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination:'/',
        permanent:false,
      }
    }
  }
  
  const sessionId = String(query.session_id)
  
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items','line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map( product => product.price.product as Stripe.Product)
  console.log(products)
  return {
    props: {
      customerName,
      products
    }
  }
}