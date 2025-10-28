import React from 'react';

const Navbar = ({
  showModal,
  setShowModal,
  SetFiltersMin,
  SetFiltersMax,
  setNewIceBox,
  active,
  setActive,
}) => {
  // филтры по ширине холодильников
  const widthOneDoorboxMin = 590;
  const widthOneDoorboxMax = 755;

  const widthOneAndHalfDoorMin = 900;
  const widthOneAndHalfDoorMax = 1030;

  const widthTwoDoorMin = 1170;
  const widthTwoDoorMax = 1370;

  const allIceBoxMin = 1;
  const allIceBoxMax = 2000;

  return (
    <div className={`navbar  ${showModal ? `open` : ''}`}>
      <div style={{ marginTop: '50px' }}>
        <h3>б/у</h3>
        <button
          onClick={() => {
            SetFiltersMin(widthOneDoorboxMin),
              SetFiltersMax(widthOneDoorboxMax),
              setShowModal(false),
              setNewIceBox(false),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          одно-дверные
        </button>
        <button
          onClick={() => {
            SetFiltersMin(widthTwoDoorMin),
              SetFiltersMax(widthTwoDoorMax),
              setShowModal(false),
              setNewIceBox(false),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          двух-дверные
        </button>

        <button
          onClick={() => {
            SetFiltersMin(widthOneAndHalfDoorMin),
              SetFiltersMax(widthOneAndHalfDoorMax),
              setShowModal(false),
              setNewIceBox(false),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          полтара-дверные
        </button>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h3>Новые</h3>
        <button
          onClick={() => {
            SetFiltersMin(widthOneDoorboxMin),
              SetFiltersMax(widthOneDoorboxMax),
              setShowModal(false),
              setNewIceBox(true),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px' }}
        >
          одно-дверные
        </button>
        <button
          onClick={() => {
            SetFiltersMin(widthTwoDoorMin),
              SetFiltersMax(widthTwoDoorMax),
              setShowModal(false),
              setNewIceBox(true),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px' }}
        >
          двух-дверные
        </button>
        <button
          onClick={() => {
            SetFiltersMin(widthOneAndHalfDoorMin),
              SetFiltersMax(widthOneAndHalfDoorMax),
              setShowModal(false),
              setNewIceBox(true),
              setActive(!active);
          }}
          className="navbarBtn"
          style={{ marginTop: '5px' }}
        >
          полтара-дверные
        </button>
      </div>
      <h3
        onClick={() => {
          setShowModal(false), setActive(!active);
        }}
        style={{
          border: '1px solid black',
          marginTop: '50px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        Таблица размеров Холодильного Оборудования
      </h3>
    </div>
  );
};

export default Navbar;
