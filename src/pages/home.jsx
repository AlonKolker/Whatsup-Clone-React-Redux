import {homeIcon} from '../assets/imgs/homeImg.png';

export const Home = () => {
  return (
    <main className='home-conteiner'>
      {/* <img className='home-img' src={require("../assets/imgs/homeImg.png")} alt='' /> */}
      <img className='home-img' src={require("../assets/imgs/ICONCapture.PNG")} alt='' />
      <h1 className='home-title'>WhatsApp Web</h1>
      <h3 className='home-info'>This WhatsApp clone </h3>
      <h3 className='home-info'>Was created by Alon K.</h3>
     </main>
  )
}
