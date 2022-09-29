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


function App() {

  return (
    <div className="App">

      <Header></Header>
      <Ctas></Ctas>
      <Description></Description>
      <Slider></Slider>
      <Description_Second></Description_Second>
      <Ctas_Second></Ctas_Second>
      <Map></Map>
      <Horraires></Horraires>
      <Frame_1></Frame_1>
      <Footer></Footer>

    </div>
  );
}

export default App;
