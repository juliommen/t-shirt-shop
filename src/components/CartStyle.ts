import { styled } from "../styles";


export const CartContainer = styled('div', {
  position:'fixed',
  top:0,
  right:0,
  backgroundColor:'$gray800',
  width:'30rem',
  height:'100%',
  zIndex:2,
  display:'flex',
  flexDirection:'column',
  paddingLeft:'3rem',
  alignItems:'start',
  justifyContent:'flex-start',

  svg: {
    position:'absolute',
    top:'1.5rem',
    right:'1.5rem',
    color:'$gray300',
    padding:0,
    cursor:'pointer'
  },

  'svg:hover' :{
    color:'white'
  },

  '&>div':{ 
    marginTop:'1.5rem',
    display:'flex',
    alignItems:'center',
    gap:'1.25rem',
    
  },

  footer:{
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },

  h1:{
    marginTop:'4.5rem',
    marginBottom:'0.5rem',
    color:'$gray100',
    fontSize:'$lg',
    textAlign:'left'
  },

  h2:{
    color:'$gray300',
    fontWeight:'normal',
    fontSize:'$md',
    lineHeight:'1.6',
  },

  h3:{
    color:'$gray100',
    fontWeight:'bold',
    fontSize:'$md',
    lineHeight:'1.6',
    marginTop:'0.25rem'
  },

  button:{
    backgroundColor:'transparent',
    color:'$green500',
    border:'none',
    textAlign:'left',
    fontWeight:'bold',
    lineHeight:'1.6',
    fontSize:'1rem',
    marginTop:'auto',
    cursor:'pointer'
  },

  'button:hover':{
    color:'$green300',
  }

 

})

export const ImageCartContainer = styled('div', {
  width:'100%',
  maxWidth:90,
  minHeight:90,
  background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius:8,
  padding:'0.25rem',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',

  img:{
		objectFit:'cover',
    backgroundColor:'transparent'
  },

})