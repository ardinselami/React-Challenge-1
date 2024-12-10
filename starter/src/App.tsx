import React from "react";
import "./App.css";
import Banner from './components/Banner';
import DetailsBlock from './components/DetailsBlock';
import PlacesContainer from './components//PlacesContainer';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div>
    <Banner />
    <DetailsBlock 
      title="Explore the Mountains" 
      content="Discover breathtaking views and serene landscapes." 
      image="https://picsum.photos/600/400"
      />
      <DetailsBlock 
        title="Relax by the Beach" 
        content="Feel the warmth of the sun and the sound of the waves." 
        image="https://picsum.photos/600/401" 
        reverse
      />
      <PlacesContainer />
      <Footer />
    </div>
  );
  
  export default App;