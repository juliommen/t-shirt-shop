import { styled } from "..";

export const Container = styled('div', {
  display:"flex",
  flexDirection:"column",
  alignItems:'flex-start',
  minHeight:"100vh",
  justifyContent:'center'

})

export const Header = styled('header', {
  padding:'1rem',
  width:'100%',
  maxWidth:1100,
  margin:'0 auto',
  display:'flex',
  alignItems:'center',
  gap:'0.5rem',
  

  h1: {
    color:'$gray100',
    fontWeight:'bold',
    fontSize:'$xxl'
  },

  img:{
    backgroundColor:'$green300',
    borderRadius:10,
  },

  span:{
    color:'$green300',
    fontWeight:'bold',
    fontSize:'$xl'
  }
})