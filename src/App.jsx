import { useState } from 'react';

import './App.css';
import MenuBotton from './components/MenuBotton';
import Navbar from './navbar';

import dataIceBox from './testDB';
import Card from './components/card/card';

function App() {
  const [showModal, setShowModal] = useState(false);
  const data = dataIceBox;
  console.log(data);

  return (
    <div className="App">
      {data.map((d) => (
        <Card
          key={d.id}
          id={d.id}
          name={d.name}
          height={d.height}
          width={d.width}
          depth={d.depth}
          polki={d.polki}
          image={d.images}
        />
      ))}

      <div className="circleBG"></div>
      <MenuBotton showModal={showModal} setShowModal={setShowModal} />
      <Navbar showModal={showModal} />
    </div>
  );
}

export default App;
