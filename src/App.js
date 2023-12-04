import Cabecalho from "./components/cabecalho/Index";
import BarraLateral from "./components/BarraLateral/Index";
import { Container } from "react-bootstrap";

// COMPONENTE DE REDERIZAÇÃO PRINCIPAL

function App() {
  return (
    <>
      {/* RENDERIZANDO O CABEÇALHO */}
      <Cabecalho />
      {/* RENDERIZANDO A BARRA LATERAL QUE ACOPLA O MENU PRINCIPAL */}
      <BarraLateral />


    </>
  );
}

export default App;
