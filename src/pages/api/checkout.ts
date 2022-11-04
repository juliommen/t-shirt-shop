import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { ProductType } from './../../context/CartContext';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const products: ProductType[] = req.body.products

  if (req.method !== 'POST') {
    return res.status(405).json({error: "Method not allowed."})
  }

  if (!products) {
    return res.status(400).json({error: 'Price not found.'})
  }

  const line_items =  products.map(prod => {return {price: prod.priceId, quantity:1}})

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    cancel_url:process.env.NEXT_URL,
    success_url:process.env.NEXT_URL+'/success?session_id={CHECKOUT_SESSION_ID}'
  })
  
  return res.status(201).json({checkoutUrl: checkoutSession.url})
}