/* eslint-disable react/prop-types */
import Modal from "../modal/Modal";

const PopUp = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
