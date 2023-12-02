import Beatlemania from "../assets/Beatlemania.svg";

export default function Segundo() {
  return (
    <div className="BodyCarrousel">
      <div className="SegundoMarcador">
        <div className="BarraLateral"></div>
        <div className="Ano2">
          <p>1966</p>
        </div>
      </div>
      <div className="TextAndImage">
        <div>
          <p className="Text1961">
            Com a conquista dos corações do mundo, iniciou-se o movimento
            chamado “Beatlemania”. <br /> <br /> A explosão da suas músicas foi
            tão grande que, eles foram a primeira banda do mundo de Rock And
            Roll que se apresentou em um estádio, com mais de 55 mil pessoas.
            <br /> <br />
            Os Beatles revolucionaram toda a história do rock e da música como
            um todo, eles são incríveis, e serão eternizados. Imortais garotos de
            Liverpool...
          </p>
        </div>
        <div className="CavernClubImage">
          <p className="Beatle">BEATLE</p>
          <div className="line2"></div>
          <section>
            <p className="Mania">MANIA</p>
            <img src={Beatlemania} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}
