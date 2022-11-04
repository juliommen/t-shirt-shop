import { styled } from "..";

export const HomeContainer = styled('main', {
  position:'relative',
  display:'flex',
  width:'100%',
  marginLeft:'auto',
  maxWidth:'calc(50vw + 590px)',
  minHeight:580,

  aside: {
    background:'linear-gradient(90deg, rgba(18,18,20,0) 0%, rgba(18,18,20,0.75) 100%)',
    position:'fixed',
    height:'100%',
    width:136,
    right:0,
    top:0,
    zIndex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',

    '&>svg':{
      marginRight:'1rem',
    },
  },
})

export const Product = styled('main', {
  background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius:8,
  
  position:'relative',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  overflow:'hidden',
  minWidth:600,
  padding:'0 4rem',

  img: {
    objectFit: 'cover',
    cursor:'pointer',
  },

  footer:{
    position:'absolute',
    bottom:'0.25rem',
    left:'0.25rem',
    right:'0.25rem',
    padding:'1.5rem',
    borderRadius:6,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'rgba(0,0,0,0.6)',
    transform:'translateY(110%)',
    opacity:0,
    transition:'all 0.2s ease-in-out',
    
    strong: {
      display:'block',
      fontSize:'$lg',
      color: '$gray100'
    },

    span:{
      display:'block',
      fontSize: '$xl',
      fontWeight:'bold',
      color:'$green300',
      marginTop:'0.5rem'
    },

    svg: {
      color: 'white',
      backgroundColor: '$green500',
      padding:'0.75rem',
      borderRadius:6
    },

    'svg:hover': {
      backgroundColor: '$green300',
    }
  },

  '&:hover':{
    footer: {
      transform:'translateY(0%)',
      opacity:1,
    }
  }

  
})

