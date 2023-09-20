/* eslint-disable react/prop-types */
import Modal from "../modal/Modal";

const PopUp = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="card w-96 h-96 bg-base-100 shadow-xl overflow-auto">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.synopsis}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
