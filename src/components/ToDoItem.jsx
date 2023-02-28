import { useState } from "react";
import { Modal } from "./Modal/Modal";

export const TodoItem = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = (event) => {
    setShowModal(true);
  };

  const handleClickClose = () => {
    setShowModal(false);
  };

  return (
    <li className="TodoItem">
      <div className="TodoItem" onClick={handleClickOpen}>
        <div className="TodoItem1"> {item.id}</div>
        <div className="TodoItem1">{item.title}</div>
        <div className="TodoItem1"> {item.description}</div>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {showModal && (
        <Modal
          title={item.title}
          status={checked}
          checkChange={handleCheckboxChange}
          onClose={handleClickClose}
        >
          <p>Description: {item.description}</p>
        </Modal>
      )}
    </li>
  );
};
