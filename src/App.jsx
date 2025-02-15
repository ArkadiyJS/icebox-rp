import { useState } from "react";
import "./App.css";

import iceboxOne from "./db/icebox-one";
import iceboxOneAndHalf from "./db/icebox-oneAndHalf";
import iceboxTwo from "./db/icebox-two";

import TableStats from "./tablesStatsIceBox";
import IceboxCard from "./components/card/iceboxCard";
import AddIcebox from "./components/addIcebox/addIcebox";

function App() {

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);


  const [pickIcebox, setPickIcebox] = useState(false)

  return (
    <>
      <div className="App">
        <div className="Header">
          <h1 className="logo">AinBev Effes</h1>
        </div>

        <div className="Navbar">
          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>

            Двухдверные
          </h2>

          <button className="button" style={{ width: '200px' }}>новые</button>
          <button className="button" style={{ width: '200px' }}>б/у</button>

          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>

            Однодверные
          </h2>

          <button className="button" style={{ width: '200px' }}>новые</button>
          <button className="button" style={{ width: '200px' }}>б/у</button>

          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>
            Полтора-дверные
          </h2>

          <button className="button" style={{ width: '200px' }}>новые</button>
          <button className="button" style={{ width: '200px' }}>б/у</button>

          <h2></h2>
          <button
            className="button"
            style={{ padding: "3px 0px 3px 0px", width: '200px' }}
            onClick={() => setShow2(!show2)}
          >
            Таблица размеров Холодильного оборудования
          </button>
          <h2></h2>
          <button
            className="button"
            style={{ padding: "3px 0px 3px 0px", width: '200px' }}
            onClick={() => setShow3(!show3)}
          >
            добавить холодильник
          </button>
        </div>

        <div className="Content">

          <IceboxCard pickIcebox={pickIcebox} setPickIcebox={setPickIcebox} />


          {show3 ? <AddIcebox /> : ''}


          {show2 ? (
            <div>



              <div>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0px",
                  }}
                >
                  Однодверные
                </h2>
                <table className="stats">
                  <thead>
                    <th>Mодель</th> <th>Высота</th> <th>Ширина</th>{" "}
                    <th>Глубина</th> <th>Вес</th> <th>Кол-во полок</th>
                  </thead>

                  {iceboxOne.map((stats, i) => (
                    <TableStats
                      key={i}
                      name={stats.name}
                      height={stats.height}
                      width={stats.weight}
                      depth={stats.depth}
                      weight={stats.weight}
                      polki={stats.polki}
                    />
                  ))}
                </table>
              </div>
              <div>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0px",
                  }}
                >
                  Двухдверные
                </h2>
                <table className="stats">
                  <thead>
                    <th>Mодель</th> <th>Высота</th> <th>Ширина</th>{" "}
                    <th>Глубина</th> <th>Вес</th> <th>Кол-во полок</th>
                  </thead>

                  {iceboxTwo.map((stats, i) => (
                    <TableStats
                      key={i}
                      name={stats.name}
                      height={stats.height}
                      width={stats.weight}
                      depth={stats.depth}
                      weight={stats.weight}
                      polki={stats.polki}
                    />
                  ))}
                </table>
              </div>
              <div>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0px",
                  }}
                >
                  Полтора-дверные
                </h2>
                <table className="stats">
                  <thead>
                    <th>Mодель</th> <th>Высота</th> <th>Ширина</th>{" "}
                    <th>Глубина</th> <th>Вес</th> <th>Кол-во полок</th>
                  </thead>

                  {iceboxOneAndHalf.map((stats, i) => (
                    <TableStats
                      key={i}
                      name={stats.name}
                      height={stats.height}
                      width={stats.weight}
                      depth={stats.depth}
                      weight={stats.weight}
                      polki={stats.polki}
                    />
                  ))}
                </table>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
