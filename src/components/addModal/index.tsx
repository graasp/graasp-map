import { useState } from 'react';

import './style.css';

type Props = {
  handleSubmit: any;
  closeModal: () => void;
  clickedPoint: any;
};
const AddItemModal = ({ handleSubmit, closeModal, clickedPoint }: Props): JSX.Element => {
    console.log(clickedPoint)
  return (
    <div className="add-modal">
      <p>Add New Location</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" placeholder="Title" />
        </div>
        <div>
          <input name="description" placeholder="Description" />
        </div>
        <p>Point: X: {clickedPoint[0]}, Y:{clickedPoint[1]}</p>
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default AddItemModal;
