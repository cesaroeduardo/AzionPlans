import { FunctionComponent } from "react";
import "./Card.css";

type CardType = {
  title?: string;
};

const Card: FunctionComponent<CardType> = ({ title }) => {
  return (
    <div className="card3">
      <div className="content33">
        <b className="title5">{title}</b>
        <div className="price5">Free</div>
        <div className="description23">
          <span>{`We recommend the Developer Plan `}</span>
          <span className="if-you-want">
            if you want to explore the potential of our platform yourself.
          </span>
        </div>
      </div>
      <button className="button16">
        <div className="label20">get developer</div>
        <img className="icon184" alt="" src="/icon8.svg" />
      </button>
    </div>
  );
};

export default Card;
