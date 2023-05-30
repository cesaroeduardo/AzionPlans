import ButtonPrimary from "./ButtonPrimary";
import "./SectionSignup.css";
const SectionSignup = () => {
  return (
    <div className="section-signup">
      <div className="content12">
        <div className="badge3">
          <div className="ellipse-div" />
          <b className="b3">1</b>
        </div>
        <div className="tagline1">start for free</div>
        <div className="text350">
          <div className="title19">
            <span>Build in the edge with your free Azion account.</span>
          </div>
          <div className="description81">
            Get $300 in credit to use within 12 months and take advantage of our
            100+ global edge locations, or use Azion to orchestrate your own
            multi-cloud, on-premise or remote-device deployment.
          </div>
        </div>
        <ButtonPrimary
          label="create free account"
          buttonPrimaryBorder="none"
          buttonPrimaryBackgroundColor="#f3652b"
        />
      </div>
    </div>
  );
};

export default SectionSignup;
