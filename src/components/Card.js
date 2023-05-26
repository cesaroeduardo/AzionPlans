import "./Card.css";
const Card = ({ title }) => {
  return (
    <div className="card14">
      <div className="content46">
        <b className="title9">{title}</b>
        <div className="price6">Free</div>
        <div className="description90">
          <span>{`We recommend the Developer Plan `}</span>
          <span className="if-you-want">
            if you want to explore the potential of our platform yourself.
          </span>
        </div>
      </div>
      <button className="button25">
        <div className="label29">get developer</div>
        <img className="icon276" alt="" src="/icon43.svg" />
      </button>
    </div>
  );
};

export default Card;
