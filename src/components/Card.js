import ButtonPrimary from "./ButtonPrimary";
import "./Card.css";
const Card = ({ title, subtitle, description }) => {
  return (
    <div className="card11">
      <div className="content14">
        <b className="title21">{title}</b>
        <div className="subtitle">{subtitle}</div>
        <div className="description83">
          <span>{description}</span>
          <span className="if-you-want">
            if you want to explore the potential of our platform yourself.
          </span>
        </div>
      </div>
      <ButtonPrimary
        label="get developer"
        buttonPrimaryBorder="none"
        buttonPrimaryBackgroundColor="#f3652b"
      />
    </div>
  );
};

export default Card;
