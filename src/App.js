<<<<<<< HEAD
import useMatchMedia from "./hooks/useMatchMedia"

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
=======
import Header from './components/header/header';
import Ctas from './components/ctas/ctas';
import Description from './components/description/description';
import Slider from './components/slider/slider';
import Description_Second from './components/description_second/description_second';
import Ctas_Second from './components/ctas_second/ctas_second';
import Map from './components/map/map';
import Horraires from './components/horraires/horraires';
import Frame_1 from './components/frame_1/frame_1';
import Footer from './components/footer/footer';
import PopIn from './components/pop-in';
>>>>>>> af82089f (:construction: pop-in for contact in progress)

function App() {
  const isWideViewport = useMatchMedia("(max-width:700px)");
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      
      <Header></Header>
      <PopIn></PopIn>
      <Description></Description>
      <Slider></Slider>
      <Description_Second></Description_Second>
      <Ctas_Second></Ctas_Second>
      <Map></Map>
      <Horraires></Horraires>
      <Frame_1></Frame_1>
      <Footer></Footer>
      <Ctas></Ctas>

>>>>>>> af82089f (:construction: pop-in for contact in progress)
    </div>
  );
}

export default App;
