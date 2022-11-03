import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/icon.png'
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Image src={logoImg} width={100} height={100} alt="" />
      <h1>Ofertei <br/><span>T-Shirt shop</span></h1>
    </Header>
    <Component {...pageProps}/>
  </Container>)
}

 
