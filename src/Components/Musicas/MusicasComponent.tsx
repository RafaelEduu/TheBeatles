import Teste from "./MusicaCorpo";
import { ComeTogheter, HereComesTheSun, HeyJude, LetItBe, Yesterday } from "./MusicasArray";

export default function MusicasComponent() {
  return (
    <div className="MusicasComponente">
      <p className="MusicaTitulo">MÚSICAS</p>
       <Teste musica={HereComesTheSun} />
       <Teste musica={ComeTogheter} />
       <Teste musica={LetItBe} />
       <Teste musica={Yesterday} />
       <Teste musica={HeyJude} />
    </div>
  )}