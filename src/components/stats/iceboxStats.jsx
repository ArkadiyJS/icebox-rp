import React from 'react';

const IceboxStats = () => {
  return (
    <table className="stats">
      <tr>
        <td>Серийный номер</td>
        <td> 3567226е472</td>
      </tr>

      <tr>
        <td>Модель</td>
        <td> s8</td>
      </tr>

      <tr>
        <td>Высота</td>
        <td> 1950 мм</td>
      </tr>

      <tr>
        <td>Ширина</td>
        <td> 650 мм</td>
      </tr>

      <tr>
        <td>Глубина</td>
        <td> 600 мм</td>
      </tr>
      <tr>
        <td>Кол-во полок</td>
        <td> 4/5 + дно</td>
      </tr>
    </table>
  );
};
export default IceboxStats;

//  <button className="buttonStats"></button>

// style={pickIcebox ? { backgroundColor: 'red' } : {}} onClick={() => setPickIcebox(true)}
// {pickIcebox ? 'забронирован' : 'забронировать'}
