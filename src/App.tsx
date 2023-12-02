import "./App.css";
import Fim from "./Components/Fim";
import Historia from "./Components/Historia";
import Images from "./Components/Images";
import IntegrantesRolagem from "./Components/IntegrantesRolagem";
import LinhaDoTempo from "./Components/LinhadoTempo";
import MusicasComponent from "./Components/Musicas/MusicasComponent";
import NowAndThen from "./Components/NowAndThen";
import PrimeiraParte from "./Components/PrimeiraPagina";
import Albuns from "./Components/ÁlbunsComponent";

function App() {
  return (
    <div className="PaginaInicial">
      <PrimeiraParte />
      <IntegrantesRolagem />
      <Historia />
      <LinhaDoTempo />
      <MusicasComponent />
      <Albuns />
      <NowAndThen />
      <Images />
      <Fim />
    </div>
  );
}

export default App;
