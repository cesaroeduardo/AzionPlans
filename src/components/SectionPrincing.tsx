import { FunctionComponent, useCallback } from "react";
import Card from "./Card";
import "./SectionPrincing.css";
const SectionPrincing: FunctionComponent = () => {
  const onAnchorContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='planInfoContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-princing">
      <div className="badge-parent">
        <div className="badge5">
          <div className="badge-child2" />
          <b className="b5">3</b>
        </div>
        <div className="tagline2">KNOW OUR PLANS</div>
        <div className="text35">
          <div className="title6">Which Azion Plan best fits you?</div>
          <div className="description24">
            From small businesses to large enterprises, our platform and
            flexible service plan options make it easy to choose the one that
            fits your needs.
          </div>
        </div>
        <div className="row5">
          <Card title="12312312" />
          <div className="card4">
            <div className="content34">
              <b className="title7">Business</b>
              <div className="price6">
                <span>{`Starting at `}</span>
                <b>{`$250 `}</b>
                <span>/month</span>
              </div>
              <div className="price6">
                <span>{`We recommend the Business Plan `}</span>
                <span className="for-customers-looking">
                  for customers looking for efficient and accessible
                  technological solutions.
                </span>
              </div>
            </div>
            <button className="button17">
              <div className="label21">get business</div>
              <img className="icon185" alt="" src="/icon9.svg" />
            </button>
          </div>
          <div className="card4">
            <div className="content34">
              <b className="title8">Enterprise</b>
              <div className="price6">
                <span>{`Starting at `}</span>
                <b>{`$5,000 `}</b>
                <span>/month</span>
              </div>
              <div className="price6">
                <span>We recommend the Enterprise Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers with critical operations and systems.
                </span>
              </div>
            </div>
            <button className="button17">
              <div className="label21">get enterprise</div>
              <img className="icon185" alt="" src="/icon9.svg" />
            </button>
          </div>
          <div className="content37">
            <div className="content38">
              <b className="title9">Mission Critical</b>
              <div className="price8">Custom</div>
              <div className="description27">
                <span>We recommend the Mission-Critical Plan</span>
                <span className="for-customers-looking">
                  {" "}
                  for customers whose online presence is critical and service
                  performance has a direct impact on the business results.
                </span>
              </div>
            </div>
            <button className="button17">
              <div className="label21">get mission critical</div>
              <img className="icon185" alt="" src="/icon8.svg" />
            </button>
          </div>
        </div>
        <div className="anchor" onClick={onAnchorContainerClick}>
          <div className="check-the-features">
            Check the features of each Azion Plan
          </div>
          <div className="chevron-right">
            <img className="icon188" alt="" src="/icon10.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPrincing;
