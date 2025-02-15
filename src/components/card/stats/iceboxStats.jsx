import React from 'react'


const IceboxStats = ({ pickIcebox, setPickIcebox }) => {





  return (<table className="stats">
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
      <td> 1950</td>
    </tr>

    <tr>
      <td>Ширина</td>
      <td> 65</td>
    </tr>

    <tr>
      <td>Глубина</td>
      <td> 60</td>
    </tr>
    <tr>
      <td>Кол-во полок</td>
      <td> 4/5 + дно</td>
    </tr>


    <button className="button" style={pickIcebox ? { backgroundColor: 'red' } : {}} onClick={() => setPickIcebox(true)} >{pickIcebox ? 'забронирован' : 'забронировать'}</button>

  </table>)
};
export default IceboxStats;