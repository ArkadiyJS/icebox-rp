import React from 'react';
// TODO: сделать  таблицу в колонкуу когда ширина экрана меньше 700 пикселей
const TableStats = ({ name, height, width, depth, weight, polki }) => {
  return (<table><tbody className="tableStatsAll">
    <td>{name}</td> <td>{height}mm(высота)</td> <td>{width}mm(ширина)</td>{' '}
    <td>{depth}mm(глубина)</td> <td>{weight}kg(вес)</td>{' '}
    <td>кол-во полок: {polki}</td>
  </tbody></table>
    
  );
};

export default TableStats;
