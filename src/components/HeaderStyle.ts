import { styled } from "../styles";

export const HeaderContainer = styled('header',{
  padding:'1rem ',
  width:'100%',
  maxWidth:1100,
  margin:'0 auto',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',

  main: {
    display:'flex',
    alignItems:'center',
    gap:'0.5rem'
  },
  

  h1: {
    color:'$gray100',
    fontWeight:'bold',
    fontSize:'$xxl',
  },

  img:{
    backgroundColor:'$green300',
    borderRadius:10,
  },

  span:{
    color:'$green300',
    fontWeight:'bold',
    fontSize:'$xl',
  },
})

export const CartButton = styled('button', {
  position:'relative',
  border:'1px solid transparent',
  backgroundColor:'$gray800',
  padding:'0.75rem',
  borderRadius:6,
  cursor:'pointer',
  fontSize:0,
  variants: {
    iconColor: {
      empty: {color: '$gray300'},
      hasItem: { color:'white' },
    },
  },

  '&:hover:enabled':{
    border:'1px solid $green300'
  },

  '&:disabled' : {
    cursor:'not-allowed'
  },


  p: {
      position: 'absolute',
      top: '-0.5rem',
      right: '-0.5rem',
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: 1000,
      backgroundColor: '$green500',
      color: '$white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 0,
      outline:'4px solid $gray900',
    }
})