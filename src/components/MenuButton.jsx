import React from 'react';

const MenuButton = ({ showModal, setShowModal, active, setActive }) => {
  const toggleActive = () => {
    setActive(!active);
    setShowModal(!showModal);
  };

  return (
    <div className="box">
      <div
        className={`btn ${active ? 'active' : 'not-active'}`}
        onClick={toggleActive}
        style={{ position: 'relative' }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuButton;
