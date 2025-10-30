import React from 'react';

const TableStats = ({ name, height, width, depth, weight, polki }) => {
  return (
    <tbody className="tableStatsAll">
      <td>{name}</td> <td>{height}mm(высота)</td> <td>{width}mm(ширина)</td>{' '}
      <td>{depth}mm(глубина)</td> <td>{weight}kg(вес)</td>{' '}
      <td>кол-во полок: {polki}</td>
    </tbody>
  );
};

export default TableStats;
