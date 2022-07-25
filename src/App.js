import React from 'react';
import './Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import Contato from './components/Contato';
import Produto from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produto />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;