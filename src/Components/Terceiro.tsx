import TheEnd from "../assets/TheEnd.svg";

export default function Terceiro() {
  return (
    <div className="BodyCarrousel">
      <div className="TerceiroMarcador">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="BarraLateral"></div>
          <div className="Ano3">
            <p>1970</p>
          </div>
        </div>
      </div>
      <div className="TextAndImage">
        <div>
          <p className="Text19612">
            Desentendimentos e discussões entre os 4 integrantes, resultaram na
            separção do grupo em 1970.
            <br /> <br /> Acusçãoes são feitas que Yoko Ono (mulher de John)
            seria a culpada da separação, mas nada condiz com a realidade. "Os
            Beatles se separaram sozinho" - John Lennon em entrevista.
            <br /> <br />
            Como despedida, depois de anos sem fazer shows abertos ao público,
            subiram no prédio da icônica gravadora, a Apple Records, e se
            apresentaram abertamente ao público. Somente foram retirados com
            policiais. <br /> <br />
          </p>
        </div>
        <div className="CavernClubImage">
          <p className="Cavern2">THE</p>
          <div className="line3"></div>
          <section>
            <p className="Club">END</p>
            <img src={TheEnd} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}
