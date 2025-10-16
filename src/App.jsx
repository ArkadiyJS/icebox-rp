import { useState } from 'react';

import './App.css';
import MenuBotton from './components/MenuBotton';
import Navbar from './navbar';
import Carousel from './components/carousel/carousel';
import IceboxStats from './components/stats/iceboxStats';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="App">
        <div className="card">
          <div className="carusel">
            <Carousel />
          </div>

          <div className="statsCard">
            <IceboxStats />
          </div>
          <button className="bronirovka">забронировать</button>
        </div>

        <div className="circleBG"></div>
        <MenuBotton showModal={showModal} setShowModal={setShowModal} />
        <Navbar showModal={showModal} />
      </div>
    </>
  );
}

export default App;
