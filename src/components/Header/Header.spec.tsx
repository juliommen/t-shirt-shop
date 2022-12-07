import { render, renderHook } from '@testing-library/react'
import { Header } from './Header'
import { CartContext } from '../../context/CartContext';
import React from 'react';

const CartContextProvider = ({ children }) => (
  <CartContext.Provider>{children}</CartContext.Provider>
);

const wrapper = ({ children }) => (
  <CartContextProvider>{children}</CartContextProvider>
);


test('header renders correctly for the first time', ()=>{

  const {debug} = render(
    <Header></Header>
  )

  debug()
})