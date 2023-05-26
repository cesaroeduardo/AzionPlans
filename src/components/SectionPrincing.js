import { useCallback } from "react";
import Card from "./Card";
import "./SectionPrincing.css";
const SectionPrincing = () => {
  const onAnchorClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionFeaturesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-pricing" data-scroll-to="sectionPricingContainer">
      <div className="badge-parent">
        <div className="badge11">
          <div className="badge-child8" />
          <b className="b11">3</b>
        </div>
        <div className="tagline2">KNOW OUR PLANS</div>
        <div className="text385">
          <div className="title10">Which Azion Plan best fits you?</div>
          <div className="description91">
            From small businesses to large enterprises, our platform and
            flexible service plan options make it easy to choose the one that
            fits your needs.
          </div>
        </div>
        <div className="row94">
          <Card title="12312312" />
          <div className="card15">
            <div className="content47">
              <b className="title11">Business</b>
              <div className="price8">
                <span>{`Starting at `}</span>
                <b>{`$250 `}</b>
                <span>/month</span>
              </div>
              <div className="price8">
                <span>{`We recommend the Business Plan `}</span>
                <span className="for-customers-looking">
                  for customers looking for efficient and accessible
                  technological solutions.
                </span>
              </div>
            </div>
            <button className="button29">
              <div className="label33">get business</div>
              <img className="icon280" alt="" src="/icon5.svg" />
            </button>
          </div>
          <div className="card15">
            <div className="content47">
              <b className="title12">Enterprise</b>
              <div className="price8">
                <span>{`Starting at `}</span>
                <b>{`$5,000 `}</b>
                <span>/month</span>
              </div>
              <div className="price8">
                <span>We recommend the Enterprise Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers with critical operations and systems.
                </span>
              </div>
            </div>
            <button className="button29">
              <div className="label33">get enterprise</div>
              <img className="icon280" alt="" src="/icon5.svg" />
            </button>
          </div>
          <div className="content50">
            <div className="content51">
              <b className="title13">Mission Critical</b>
              <div className="price10">Custom</div>
              <div className="description94">
                <span>We recommend the Mission-Critical Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers whose online presence is critical and service
                  performance has a direct impact on the business results.
                </span>
              </div>
            </div>
            <button className="button29">
              <div className="label33">get mission critical</div>
              <img className="icon280" alt="" src="/icon4.svg" />
            </button>
          </div>
        </div>
        <button className="anchor" onClick={onAnchorClick}>
          <div className="check-the-features">
            Check the features of each Azion Plan
          </div>
          <div className="chevron-right13">
            <img className="icon283" alt="" src="/icon6.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionPrincing;
