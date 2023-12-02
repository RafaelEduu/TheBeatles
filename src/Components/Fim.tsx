import ImgRodapé from "../assets/ImageRodapé.svg";

export default function Fim() {
  return (
    <div className="Rodape">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <img className="ImgRafael" src={ImgRodapé} alt="" />
        <div style={{ flexDirection: "column", paddingLeft: "10px" }}>
          <p className="NomeRafa">Rafael Eduardo</p>
          <p className="NomeRafa" style={{ fontSize: "25px" }}>
            15 Anos
          </p>
          <div style={{ flexDirection: "row" }}>
            {" "}
            <a href="https://www.instagram.com/rafaeleduuu/">
              <img
                className="IconRedeSocial"
                src="https://cdn-icons-png.flaticon.com/128/3955/3955027.png"
                alt=""
              />
            </a>
            <img
              className="IconRedeSocial"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png"
              alt=""
            />
          </div>
          <p className="Contato">schererrafael45@gmail.com</p>
        </div>
      </div>
      <div className="TextoFinal">
        <p>
          Todo o projeto dos Beatles foi realizado escutando suas músicas.{" "}
          <br /> <br /> Nem todos podem estar aqui, mas são lembrados como
          grandes <br /> músicos, e um grande grupo musical, O GRUPO MUSICAL.{" "}
          <br /> Com os Beatles, o mundo do rock foi divido em duas partes,{" "}
          <br /> antes dos Beatles, e depois dos Beatles. Como não amar? <br />
          <br /> Ah, e nada se compara ao humor das entrevistas... <br />
          <br />
          Now and then i miss you <br /> Oh, now and then <br /> I want you to
          be there for me <br />
          Always to return to me <br /> - Now And Then. The Beatles, 2023.
        </p>
      </div>
    </div>
  );
}
