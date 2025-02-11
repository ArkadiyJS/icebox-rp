import React from "react";




const TableStats = ({ name, height, width, depth, weight, polki }) => {


        return (<tbody>
                <td>{name}</td>
                <td>{height}mm</td>
                <td>{width}mm</td>
                <td>{depth}mm</td>
                <td>{weight}kg</td>
                <td>{polki}</td>
        </tbody>)
}

export default TableStats;