import { useState } from 'react';

import './App.css';
import MenuBotton from './components/MenuBotton';
import Navbar from './navbar';

import dataIceBox from './testDB';
import Card from './components/card/card';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [filtersMin, SetFiltersMin] = useState(1);
  const [filtersMax, SetFiltersMax] = useState(2000);
  const [newIceBox, setNewIceBox] = useState(false);
  const [active, setActive] = useState(false);

  const data = dataIceBox;
  const filerData = data.filter(
    (data) => data.width >= filtersMin && data.width <= filtersMax
  );

  return (
    <div className="App">
      {filerData
        .filter((obj) => obj.new === newIceBox)
        .map((d) => (
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
      <MenuBotton
        showModal={showModal}
        setShowModal={setShowModal}
        active={active}
        setActive={setActive}
      />
      <Navbar
        active={active}
        setActive={setActive}
        setNewIceBox={setNewIceBox}
        showModal={showModal}
        setShowModal={setShowModal}
        SetFiltersMin={SetFiltersMin}
        SetFiltersMax={SetFiltersMax}
      />
    </div>
  );
}

export default App;
