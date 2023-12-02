import Um from "../assets/1.svg";
import AbbeyRoad from "../assets/AbbeyRoad.svg";
import SgrPepersLonely from "../assets/SgrPepersLonely.svg";

export default function Albuns() {
  return (
    <div className="AlbunsDivisão">
      <div className="ColorBloco"></div>
      <div className="AlbunsWrap">
        <div className="AlbumImg">
          <img className="ImagemAlbum" src={SgrPepersLonely} alt="" />
        </div>
        <div className="AlbumImg">
          <img className="ImagemAlbum" src={Um} alt="" />
        </div>
        <div className="AlbumImg">
          <img className="ImagemAlbum" src={AbbeyRoad} alt="" />
        </div>
      </div>
      <div className="AlbunsDescrição">
        <h1>ÁLBUNS</h1>
        <p className="Descriçao">
          No total, foram gravados 13 álbuns de <br /> estúdio, 5 discos ao
          vivo, 53 <br />
          compilações, 64 vídeos, 21 EPs, 63 <br /> singles e 15 boxes.{" "}
        </p>
      </div>
    </div>
  );
}
