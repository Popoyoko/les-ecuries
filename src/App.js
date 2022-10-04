import useMatchMedia from "react-use-match-media";

import Header from "./components/header";
import Boutton from "./components/boutton";
import Description from "./components/description";
import Slider from "./components/slider";
import Description_Promotion from "./components/description_promotion";
import Boutton_Information from "./components/boutton_information";
import Map from "./components/map";
import Horraires from "./components/horraires";
import Socials from "./components/socials";
import Footer from "./components/footer";
import Photo_Grid from "./components/photo_grid";

function App() {
  const isWideViewport = useMatchMedia("(max-width:700px)");

  return (
    <div>
      {isWideViewport ? (
        <div className="App">
          <Header></Header>
          <Boutton></Boutton>
          <Description></Description>
          <Slider></Slider>
          <Description_Promotion></Description_Promotion>
          <Boutton_Information></Boutton_Information>
          <Map></Map>
          <Horraires></Horraires>
          <Socials></Socials>
          <Footer></Footer>
        </div>
      ) : (
        <div className="app-desktop">
          <div className="container-top-desktop">
            <Header></Header>
            <Boutton></Boutton>
          </div>
          <div className="container-mid-desktop">
            <div className="container-map-desktop">
              <Map></Map>
            </div>
            <div className="container-description-desktop">
              <Description></Description>
              <Description_Promotion></Description_Promotion>
              <Boutton_Information></Boutton_Information>
              <Horraires></Horraires>
            </div>
          </div>
          <div className="container-bot-desktop">
            <div className="container-photogrid-desktop">
              <Photo_Grid></Photo_Grid>
              </div>
              <div className="container-footer-desktop">
              <Footer></Footer>
              <Socials></Socials>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
