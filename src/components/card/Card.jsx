/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-9" onClick={props.onClick}>
      <figure>
        <img src={props.img} alt={props.title} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        <p>Rank: {props.rank} Score: {props.score}</p>
      </div>
    </div>
  );
};

export default Card;
