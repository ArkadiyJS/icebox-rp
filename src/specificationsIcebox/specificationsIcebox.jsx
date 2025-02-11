import React, { useState } from 'react';
import TableStats from './tablesStatsIceBox';
import iceboxOne from './iceboxOne'
import iceboxOneAndHalf from './iceboxOneAndHalf'
import iceboxTwo from './iceboxTwo'


const SpecificationsIcebox = (props) => {

  const [showIcebox, setShowIcebox] = useState(iceboxOne)

  console.log(iceboxOne)
  console.log(iceboxOneAndHalf)
  console.log(iceboxTwo)

  return (
    <table>

      <thead><td>Модель</td><td>Высота</td><td>Ширина</td><td>Глубина</td><td>Вес</td><td>Кол-во полок</td></thead>

      {/* <TableStats key={i} name={data.name} height={data.height} width={data.width} depth={data.depth} weight={data.weight} polki={data.polki} /> */}

    </table>
  );
}

export default SpecificationsIcebox;