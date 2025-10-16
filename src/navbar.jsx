import React from 'react';

const Navbar = ({ showModal }) => {
  return (
    <div className={`navbar  ${showModal ? `open` : ''}`}>
      <div style={{ marginTop: '50px' }}>
        <h3>б/у</h3>
        <button
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          одно-дверные
        </button>
        <button
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          двух-дверные
        </button>

        <button
          className="navbarBtn"
          style={{ marginTop: '5px', border: '1px solid black' }}
        >
          полтара-дверные
        </button>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h3>Новые</h3>
        <button className="navbarBtn" style={{ marginTop: '5px' }}>
          одно-дверные
        </button>
        <button className="navbarBtn" style={{ marginTop: '5px' }}>
          двух-дверные
        </button>
        <button className="navbarBtn" style={{ marginTop: '5px' }}>
          полтара-дверные
        </button>
      </div>
    </div>
  );
};

export default Navbar;
