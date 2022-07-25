import React from "react";
//import { Link } from "react-router-dom";
import Head from "../../Head";
import { Section, Titulo } from "./styles";

const Produto = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  });
  console.log(produtos);
  if(produtos === null) return null;
  return (
    <Section>
      <Head title="React | Produtos" description="Confira os produtos" />
      {produtos.map((produto) => (
        <div key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </div>
      ) )}
      <Titulo>Produtos</Titulo>
    </Section>
  );
};

export default Produto;
