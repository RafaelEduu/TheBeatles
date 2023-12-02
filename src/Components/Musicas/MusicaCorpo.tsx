interface MusicaProps {
  Numero: string;
  Nome: string;
  Album: string;
  Images: string;
  Ano: string;
  Spotify: string;
  Ouvintes: string;
  Width: string;
}

export default function Teste({ musica }: { musica: MusicaProps }) {
  return (
    <div className="SessaoMusicas">
      <div className="NomeNumero">
        <h1>{musica.Numero}</h1>
        <img src={musica.Images} alt="" />
        <h2 className="AlbumNome">
          <h1 className="NomeMusica">{musica.Nome}</h1>
          <h4>{musica.Album}</h4>
        </h2>
      </div>
      <div className="InformaçoesMusicas">
        <span>{musica.Ano}</span>
        <img
          className="SpotifyImg"
          src={musica.Spotify}
          alt={`Ícone do spotify com redirecionamento para a música ${musica.Nome}`}
        />
        <span>{musica.Ouvintes}</span>
      </div>
    </div>
  );
}

/* 
<div className="ListaMusicas">
<div className="NomeNumero">
  <h1 className="NúmeroDaMúsica">{musica.Numero}</h1>
  <img className="DiscoImg" src={musica.Images} />
  <div className="DivInicioInformações">
    <div className="InformaçõesDaMusica">
      <p className="NomeDaMusica">{musica.Nome}</p>
      <p className="AlbumDaMusica">{musica.Album}</p>
    </div>
  </div>
</div>
<div className="InformçõesOuvintes">
  {" "}
  <div className="InformaçõesProfundas">
    <p className="MusicaAno">{musica.Ano}</p>
    <img src={musica.Spotify} alt="" className="ImgSpotify" />
    <p style={{ width: "100px" }}>{musica.Ouvintes}</p>
  </div>
</div>
</div>
  <div style={{width:'5px', justifyContent:'flex-start', display:'flex', paddingLeft:'16.5%'}}>
  <div
    style={{
      width: musica.Width,
      height: "1px",
      backgroundColor: "white",
    }}
  ></div
</div> */
