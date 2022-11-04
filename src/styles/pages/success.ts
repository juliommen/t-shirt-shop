import { styled } from "..";

export const SuccessContainer = styled('main', {
	display:'flex',
	flexDirection:'column',
	alignItems:'center',
	justifyContent:'center',
	margin:'0 auto',
	height:580,

	h1:{
		fontSize:'$xxl',
		color:'$gray100',
	},

	p: {
		fontSize:'$xl',
		color:'$gray300',
		maxWidth:700,
		textAlign:'center',
		marginTop:'3rem',
		lineHeight:1.4
	},

	a: {
		display:'block',
		marginTop:'3rem',
		fontSize:'$lg',
		color:'$green500',
		textDecoration:'none',
		fontWeight:'bold',

		'&:hover':{
			color:'$green300'
		}
	},

	'&>main':{
		display:'flex',
		marginTop:'3rem',
	},

	'div+div':{
		marginLeft:'-4rem',
	}
})

export const ImageContainer = styled('div', {
  width:140,
  height:140,
  background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius:1000,
  padding:'1.5rem',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
	filter: 'drop-shadow(2px 2px 4px #111);',

	
	img:{
		objectFit:'cover',
  },

})