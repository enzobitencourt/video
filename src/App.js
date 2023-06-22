import './styles.css';
import Header from "./components/Header/Header";
import Nav from './components/Main/Nav/Nav';
import Home from "./components/Main/Home/Home"
import Footer from "./components/Footer/Footer";
import StyledGLOBAL, { ContainerMain, TelaInteira } from './styledGLOBAL';
import React from 'react';

function App() {
  function clickImage(){
    alert("Imagem")
  };
  
  return (
    <>
      <StyledGLOBAL/>
      <TelaInteira>
          <Header/>
          <ContainerMain>
            <Nav/>
            <Home reproduz={clickImage}/>
          </ContainerMain>
          <Footer/>
        </TelaInteira>
    </>
  );
}

export default App;
