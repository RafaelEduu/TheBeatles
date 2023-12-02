import CavernClubImage from "../assets/CavernClub.svg";

export default function Primeiro() {
  return (
    <div className="BodyCarrousel">
      <div className="PrimeiroMarcador">
        <div className="BarraLateral"></div>
        <div className="Ano1"><p>1961</p></div>
      </div>
      <div className="TextAndImage">
        <div>
          <p className="Text1961">
            O primeiro local de apresentações da banda, virando noites e
            iniciando o movimento da “Beatlemania”. <br /> <br /> No total,
            foram realizados 294 shows dentro do Cavern Club, em Liveerpool.
            <br /> <br />
            Inclusive, foi nesse local em que Bryan Epstein conheceu os Beatles,
            e posteriormente se tornou empresário da banda, sendo fundamental
            para o avanço da equipe.
          </p>
        </div>
        <div className="CavernClubImage">
          <p className="Cavern">CAVERN</p>
          <div className="line"></div>
          <section>
            <p className="Club">CLUB</p>
            <img src={CavernClubImage} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}
