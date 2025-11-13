import { useState } from 'react';

import './App.css';
import MenuBotton from './components/MenuButton';
import Navbar from './navbar';

import dataIceBox from './testDB';
import Card from './components/card/card';
import TableStats from './tablesStatsIceBox';
import icebox from './db/icebox';

function App() {
  // стейт анимации и открывания навбар
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  // стейт филтр ХО по ширине однушки двушки и полтарашки
  const [filtersMin, SetFiltersMin] = useState(1);
  const [filtersMax, SetFiltersMax] = useState(2000);

  // фильтр новых хо
  const [newIceBox, setNewIceBox] = useState(false);

  // константа для заполнении характеристик таблицы размеров
  const dataTable = icebox;

  // мок дата что прийдет с сервера
  const data = dataIceBox;

  // функция фильттрации хо по ширине
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

      <div>
        {dataTable.map((dataTable) => (
          <TableStats
            key={dataTable.name}
            name={dataTable.name}
            width={dataTable.width}
            height={dataTable.height}
            depth={dataTable.depth}
            weight={dataTable.weight}
            polki={dataTable.polki}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
