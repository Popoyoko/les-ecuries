import image_1 from'./assets/image_1.png';

import Header from './components/header';
import Ctas from './components/ctas';
import Description from './components/description';
import Slider from './components/slider';
import Description_Second from './components/description_second';
import Ctas_Second from './components/ctas_second';
import Map from './components/map';
import Horraires from './components/horraires';
import Frame_1 from './components/frame_1';
import Footer from './components/footer';


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
