import { useState } from "react";
import "./App.css";

import iceboxOne from "./db/icebox-one";
import iceboxOneAndHalf from "./db/icebox-oneAndHalf";
import iceboxTwo from "./db/icebox-two";

import TableStats from "./tablesStatsIceBox";
import IceboxCard from "./components/card/iceboxCard";

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <div className="App">
        <div className="Header">
          <img
            className="Header1"
            src="https://avatars.mds.yandex.net/i?id=b716e0a6663a460975f2ddbf849fcd7505476d37-10964795-images-thumbs&n=13"
          ></img>
        </div>

        <div className="Navbar">
          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>

            Двухдверные
          </h2>

          <button className="button" style={{ width: '97%' }}>новые</button>
          <button className="button" style={{ width: '97%' }}>б/у</button>

          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>

            Однодверные
          </h2>

          <button className="button" style={{ width: '97%' }}>новые</button>
          <button className="button" style={{ width: '97%' }}>б/у</button>

          <h2 style={{ fontFamily: "Arial", fontSize: "1em", borderRadius: '4px' }}>
            Полтора-дверные
          </h2>

          <button className="button" style={{ width: '97%' }}>новые</button>
          <button className="button" style={{ width: '97%' }}>б/у</button>

          <h2></h2>
          <button
            className="button"
            style={{ padding: "3px 0px 3px 0px" }}
            onClick={() => setShow2(!show2)}
          >
            Таблица размеров Холодильного оборудования
          </button>
        </div>

        <div className="Content">
          <IceboxCard />
          <IceboxCard />
          <IceboxCard />
          <IceboxCard />

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
