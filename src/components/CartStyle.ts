import { styled } from "../styles";

export const CartContainer = styled('div', {
  position:'fixed',
  top:0,
  right:0,
  backgroundColor:'$gray800',
  width:'0',
  height:'100%',
  zIndex:2,
  display:'flex',
  flexDirection:'column',
  alignItems:'start',
  justifyContent:'flex-start',
  transition: 'all 0.4s ease-in-out',
  padding:'0 3rem !important',
  margin:'0 !important',
  

  variants:{
    isOpen:{
      yes:{width: '30rem'},
      no:{width: '0', padding:'0 !important'}
    }
  },

  '&>header':{
    width:'100%',
    display:'flex',
    justifyContent:'flex-end',
    marginTop:'1.5rem',
  },

  svg: {
    color:'$gray300',
    padding:0,
    cursor:'pointer',
    paddingRight:'1.5rem'
  },

  'svg:hover' :{
    color:'white'
  },

  '&>h1':{
    marginTop:'1.5rem',
    marginBottom:'0.5rem',
    color:'$gray100',
    fontSize:'$lg',
    textAlign:'left'
  },

  '&>div':{
    overflow:'auto',
    width:'100%',
    height:'100%',
  },

  'div div':{ 
    marginTop:'1.5rem',
    display:'flex',
    alignItems:'center',
    gap:'1.25rem',
    overflow:'auto',
    
    '&>footer':{
      height:'100%',
      display:'flex',
      flexDirection:'column',
  
      '&>h2':{
        color:'$gray300',
        fontWeight:'normal',
        fontSize:'$md',
        lineHeight:'1.6',
      },
    
      '&>h3':{
        color:'$gray100',
        fontWeight:'bold',
        fontSize:'$md',
        lineHeight:'1.6',
        marginTop:'0.25rem'
      },
  
      '&>button':{
        backgroundColor:'transparent',
        color:'$green500',
        border:'none',
        textAlign:'left',
        fontWeight:'bold',
        lineHeight:'1.6',
        fontSize:'1rem',
        marginTop:'0.5rem',
        cursor:'pointer',
      },
    
      '&>button:hover':{
        color:'$green300',
      }
    },
  },

  '::-webkit-scrollbar': {
    width: '6px'
  },
  '::-webkit-scrollbar-track': {
    background: '$gray100',
    borderRadius:1000
  },
  '::-webkit-scrollbar-thumb': {
    background: '$gray500',
    borderRadius:1000
  },

})

export const ImageCartContainer = styled('main', {
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

export const TotalContainer = styled('footer', {
  width:'100%',
  maxWidth:'calc(100%-3rem)',
  display:'flex',
  justifyContent:'flex-end',
  flexDirection:'column',
  marginTop:'2rem',

  '&>div':{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'1rem'
  },

  p:{
    fontSize:'1rem',
    color:'$gray300'
  },

  h1:{
    fontSize:'$md',
    color:'$gray100',
    fontWeight:'bold'
  },

  h2:{
    fontSize:'$xl',
    color:'$gray100',
    fontWeight:'bold'
  },

  button: {
    width:'100%',
    marginTop:'1rem',
    marginBottom:'3rem',
    backgroundColor:'$green500',
    border:0,
    color:'$white',
    borderRadius:8,
    padding:'1.5rem',
    cursor:'pointer',
    fontWeight:'bold',
    fontSize:'$md',

    '&:disabled':{
      opacity:0.6,
      cursor:'not-allowed'
    },

    '&:not(:disabled):hover':{
      backgroundColor: '$green300'
    }

  }
})