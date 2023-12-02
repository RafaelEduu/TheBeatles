import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { images } from "./images.1";

export default function Images() {
  return (
    <div className="ImagensTotal">
      <p className="LadiesAndGentlemen">
        Ladies and gentlemens, The Beatles...
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((images, i) => (
            <div
              className="pepepe"
              key={i}
              style={{
                position: "relative",
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <p
                className="pepe"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  display: "none",
                  color: "black",
                }}
              >
                {images.Legenda ? images.Legenda : null}
              </p>
              <img
                src={images.url}
                className={images.class}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                /*     onMouseOver={(e) => {                        ==> Reveja esse detalhe futuramente! <==
                  e.currentTarget.previousSibling.style.display = "block";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.previousSibling.style.display = "none";
                }} */
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
