import "./index.css";
import vector_2_socials from "../assets/Vector_2.png";
import image_3_socials from "../assets/Vector_3.png";
import useMatchMedia from "react-use-match-media";

function Socials() {
  const isWideViewport = useMatchMedia("(max-width:700px)");

  return (
    <div className="socials">
      {isWideViewport ? (
        <div className="split-socials">
          <p>Suivez-nous</p>
          <div className="split-socials-smartphone">
            <div className="social">
              <img
                src={vector_2_socials}
                className="image_2_socials"
                alt="logo_facebook"
              />
            </div>
            <div className="social">
              <img
                src={image_3_socials}
                className="image_3_socials"
                alt="logo_instagram"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container-socials">
          <div className="split-socials">
            <p id="plus-de-photos">Plus de photos</p>
            <div className="social">
              <img
                src={vector_2_socials}
                className="image_2_socials"
                alt="logo_facebook"
              />
            </div>
          </div>
          <div className="split-socials">
            <p>Suivez-nous</p>
            <div className="social">
              <img
                src={image_3_socials}
                className="image_3_socials"
                alt="logo_instagram"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Socials;
