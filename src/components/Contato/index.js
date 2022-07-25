import React from 'react'
import { Section, Titulo, ImagemContato, Informacoes, Info } from './styles';
import foto from '../../img/contato.jpg';

const Contato = () => {
  return (
    <Section >
      <ImagemContato>{foto}</ImagemContato>
      <Titulo>Contato</Titulo>
      <Informacoes>
        <Info>felipe@reactjs.com</Info>
        <Info>99 99999-9999</Info>
        <Info>Rua frontend, 1212</Info>
      </Informacoes>
    </Section>
  )
};

export default Contato;