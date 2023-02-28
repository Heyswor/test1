import ReactDOM from "react-dom";
import css from "../Modal/Modal.module.css";

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={css.modalOverlay}>
          <div className={css.modal}>
            <div className="modal-header">
              <h2>{props.title}</h2>
            </div>
            <div className="modal-body">{props.children}</div>
            <div>
              Status:{" "}
              <input
                type="checkbox"
                checked={props.status}
                onChange={props.checkChange}
              />
            </div>
            <button onClick={props.onClose} type="button">
              Close
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
