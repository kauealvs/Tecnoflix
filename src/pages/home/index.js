import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import Menu from '../../components/Menu'
import BannerMAin from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Menu />

      <BannerMAin 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'domine os poderes do javascript'}
      />

      <Carousel 
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </div>
  );
}

export default Home;
