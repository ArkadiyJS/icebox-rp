import React from 'react';

const IceboxStats = ({ name, id, height, width, depth, polki }) => {
  return (
    <table className="stats">
      <tr>
        <td>Серийный номер</td>
        <td> {id}</td>
      </tr>

      <tr>
        <td>Модель</td>
        <td> {name}</td>
      </tr>

      <tr>
        <td>Высота</td>
        <td> {height}</td>
      </tr>

      <tr>
        <td>Ширина</td>
        <td> {width}</td>
      </tr>

      <tr>
        <td>Глубина</td>
        <td> {depth}</td>
      </tr>
      <tr>
        <td>Кол-во полок</td>
        <td>{polki}</td>
      </tr>
    </table>
  );
};
export default IceboxStats;

//  <button className="buttonStats"></button>

// style={pickIcebox ? { backgroundColor: 'red' } : {}} onClick={() => setPickIcebox(true)}
// {pickIcebox ? 'забронирован' : 'забронировать'}
