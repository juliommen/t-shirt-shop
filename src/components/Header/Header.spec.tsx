import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from './Header'
import { CartContext, ProductType } from '../../context/CartContext';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub'
  },
}));

function renderHeader(products: ProductType[]) {
  render(
    <CartContext.Provider value={{products,addProduct: () =>{},removeProduct: ()=> {}}}>
      <Header></Header>
    </CartContext.Provider>
  )
}

describe('Render test', () => {
  
  it('Header with cart empty will not open cart', ()=>{
    renderHeader([])
    screen.logTestingPlaygroundURL()
    const openCartButton = screen.getByText("T-Shirt shop").parentElement.parentElement.nextElementSibling
    expect(openCartButton).toBeDisabled()
  })

  it('Header with 10 itens opens cart normally', ()=>{
    const products: ProductType[] = Array.from(Array(10).keys()).map( v =>{
      return {
        id: v.toString(),
        imageUrl:'test',
        name:'test',
        price:`R$0${v.toString()},00`,
        priceId:'test',
        description:'test'
      }
    })  
    renderHeader(products)
    expect(screen.getByText("10")).toBeInTheDocument()
    const openCartButton = screen.getByText("T-Shirt shop").parentElement.parentElement.nextElementSibling
    expect(openCartButton).not.toBeDisabled()
  })

})