import BeatlesHistoria from "../assets/BeatlesHistoria.svg";

export default function Historia() {
  return (
    <section className="História">
      <div className="TextHistoria">
        <p className="Historia">HISTÓRIA</p>
        <p className="Text">
          Os Beatles, um banda de rock formada em 1960, na cidade de Liverpool,
          no Reino Unido, que revolucionou a história da música.
          <br /> <br /> Conhecidos como os “Garotos de Liverpool”, os 4 membors
          principais, John, Ringo, Paul e Geroge, marcaram uma geração inteira,
          lançando incríveis músicas e diversos álbuns. <br /> <br />
          Logo nos primeiros álbuns, como “Pleas Pleas Me” e “With The Beatles”
          conquistaram todo o público mundial, até mesmo os Estados Unidos,
          inciando assim a “Beatlemania”.
        </p>
      </div>
      <div className="BeatlesHistoria">
        <div className="Testeee">
          <p className="Imiss">I miss</p>
        </div>
        <img className="BeatlesHistoriaImg" src={BeatlesHistoria} alt="" />
        <p className="You">you...</p>
      </div>
    </section>
  );
}
