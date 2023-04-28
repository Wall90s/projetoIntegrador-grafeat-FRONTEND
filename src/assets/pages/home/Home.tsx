
import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import './Home.css';
import CarouselHome from '../../../components/aliceCarousel/CarouselHome/CarouselHome';
import ListaProdutos from '../../../components/produtos/listaProdutos/ListaProdutos';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" className="container">

      <Typography variant="h1" align="center" gutterBottom style={{ color: "white" }}>
        Bem-vindo a Loja <img className='logo' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="Logo do Grafeat" />
      </Typography>

      <Typography variant="subtitle1" align="center" gutterBottom style={{ color: "white" }}>
        Confira nossos produtos incríveis e aproveite as ofertas!
      </Typography>
      <Grid justifyContent='center'><CarouselHome /></Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 1" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 2" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 3" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
        
      </Grid>
      <Grid justifyContent='center' alignContent='center' alignItems='center' className='fundoProdutos'>
          <ListaProdutos />
      </Grid>
    </Container>
  );
};

export default Home;
