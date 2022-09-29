import Header from './components/header';
import Boutton from './components/boutton';
import Description from './components/description';
import Slider from './components/slider';
import Description_Promotion from './components/description_promotion';
import Boutton_Information from './components/boutton_information';
import Map from './components/map';
import Horraires from './components/horraires';
import Socials from './components/socials';
import Footer from './components/footer';


function App() {

  return (
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
  );
}

export default App;
