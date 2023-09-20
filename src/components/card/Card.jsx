/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.img} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.synopsis}</p>
      </div>
    </div>
  );
};

export default Card;
