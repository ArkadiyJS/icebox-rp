import React, { useState } from 'react';
import CameraApp from './camera/camera';
import iceboxPick from './staticSize';

function AddIcebox(props) {

  const [previewPhoto, setPreviewPhoto] = useState([])

  const [numberIcebox, setNumberIcebox] = useState()
  const [pickModel, setPickModel] = useState()


  const obj = iceboxPick.filter((t) => t.name == pickModel)


  const handleSubmit = (e) => {
    e.preventDefault()

    const newIcebox = {

      serialNumber: numberIcebox,
      imgOne: previewPhoto[0],
      imgTwo: previewPhoto[1],
      imgThree: previewPhoto[2],
      name: obj[0].name,
      height: obj[0].height,
      width: obj[0].width,
      depth: obj[0].depth,
      weight: obj[0].weight,
      polki: obj[0].polki



    }
    console.log(newIcebox)


  }

  const setPickModelTir = (event) => {
    setPickModel(event.target.value);

  }

  return (<div className='addIcebox'>
    <form onSubmit={handleSubmit}>
      <input style={{ height: '30px', width: '300px' }}

        placeholder='Серийный номер'
        type='text'
        value={numberIcebox}
        onChange={(e) => { setNumberIcebox(e.target.value) }}


      />
      <label style={{ color: 'white' }} htmlFor="options">выберете модель:</label>
      <select id="options" value={pickModel} onChange={setPickModelTir}>

        <option value="">--Выберите--</option>
        {iceboxPick.map((d) => (<option key={d.i}  >{d.name}</option>))}


      </select>


      <button type='submit' disabled={numberIcebox === ''}>Добавить Холодильник</button>
    </form>


    <CameraApp previewPhoto={previewPhoto} setPreviewPhoto={setPreviewPhoto} />


    {previewPhoto.map((photo) => (
      <img style={{ width: '150px', height: '150px' }} key={photo} src={photo} alt="Uploaded" />
    ))}
  </div>
  );
}

export default AddIcebox;