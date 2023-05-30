import { useCallback } from "react";
import Card from "./Card";
import ButtonPrimary from "./ButtonPrimary";
import "./SectionPricing.css";
const SectionPricing = () => {
  const onAchorClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionFeaturesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-pricing" data-scroll-to="sectionPricingContainer">
      <div className="content15">
        <div className="badge5">
          <div className="badge-child2" />
          <b className="b5">3</b>
        </div>
        <div className="tagline3">KNOW OUR PLANS</div>
        <div className="text352">
          <div className="title22">Which Azion Plan best fits you?</div>
          <div className="description84">
            From small businesses to large enterprises, our platform and
            flexible service plan options make it easy to choose the one that
            fits your needs.
          </div>
        </div>
        <div className="row90">
          <Card
            title="Developer"
            subtitle="Free"
            description="We recommend the Developer Plan "
          />
          <div className="card12">
            <div className="content16">
              <b className="title23">Business</b>
              <div className="subtitle1">
                <span>{`Starting at `}</span>
                <b>{`$250 `}</b>
                <span>/month</span>
              </div>
              <div className="subtitle1">
                <span>{`We recommend the Business Plan `}</span>
                <span className="for-customers-looking">
                  for customers looking for efficient and accessible
                  technological solutions.
                </span>
              </div>
            </div>
            <ButtonPrimary
              label="get business"
              buttonPrimaryBorder="none"
              buttonPrimaryBackgroundColor="#f3652b"
            />
          </div>
          <div className="card12">
            <div className="content16">
              <b className="title23">Enterprise</b>
              <div className="subtitle1">
                <span>{`Starting at `}</span>
                <b>{`$5,000 `}</b>
                <span>/month</span>
              </div>
              <div className="subtitle1">
                <span>We recommend the Enterprise Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers with critical operations and systems.
                </span>
              </div>
            </div>
            <ButtonPrimary
              label="get enterprise"
              buttonPrimaryBorder="none"
              buttonPrimaryBackgroundColor="#f3652b"
            />
          </div>
          <div className="content19">
            <div className="content20">
              <b className="title25">Mission Critical</b>
              <div className="subtitle3">Custom</div>
              <div className="description87">
                <span>We recommend the Mission-Critical Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers whose online presence is critical and service
                  performance has a direct impact on the business results.
                </span>
              </div>
            </div>
            <ButtonPrimary
              label="get enterprise"
              buttonPrimaryBorder="none"
              buttonPrimaryBackgroundColor="#f3652b"
            />
          </div>
        </div>
        <button className="achor" onClick={onAchorClick}>
          <div className="check-the-features">
            Check the features of each Azion Plan
          </div>
          <div className="chevron-right13">
            <img className="icon118" alt="" src="/icon18.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionPricing;
