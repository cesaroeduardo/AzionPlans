import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SectionBanner.css";
const SectionBanner = ({ title, description, tagline }) => {
  const navigate = useNavigate();

  const onButtonAreaClick = useCallback(() => {
    navigate("/pricing-page");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionPricingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-banner1">
      <div className="texts1">
        <div className="plans1">{tagline}</div>
        <div className="how-do-you">{title}</div>
        <div className="our-usage-based-pricing1">{description}</div>
      </div>
      <div className="cards1">
        <div className="card11">
          <div className="content41">
            <div className="badge3">
              <div className="ellipse-div" />
              <b className="b3">1</b>
            </div>
            <b className="title4">Start for free</b>
            <div className="description86">
              From prototype to enterprise-scale with NoOps, just code.
            </div>
            <div className="slot20">
              <div className="price5">
                <div className="div8">$</div>
                <div className="div9">300</div>
              </div>
              <div className="in-credit-to1">
                in credit to use within 12 months.
              </div>
            </div>
          </div>
          <div className="button-area3">
            <div className="no-credit-card1">No credit card required.</div>
            <button className="button20">
              <div className="label24">create free account</div>
              <img className="icon271" alt="" src="/icon8.svg" />
            </button>
          </div>
        </div>
        <div className="card12">
          <div className="content42">
            <div className="badge4">
              <div className="ellipse-div" />
              <b className="b3">2</b>
            </div>
            <b className="title4">
              <p className="after-that-pay1">After that, pay as you go.</p>
              <p className="after-that-pay1">
                <span>{`The `}</span>
                <span className="more1">more</span>
                <span className="you-use-the1">{` you use, the more you `}</span>
                <span className="more1">save</span>
                <span className="you-use-the1">.</span>
              </p>
            </b>
            <div className="slot21">
              <b className="rate-as-low1">Rate as low as:</b>
              <div className="info-product4">
                <div className="no-credit-card1">Edge Application</div>
                <div className="gb-transferred2">$0.02/GB transferred</div>
              </div>
              <div className="info-product4">
                <div className="no-credit-card1">Edge Functions</div>
                <div className="gb-transferred2">$0.60/Mi. invocation</div>
              </div>
              <div className="info-product4">
                <div className="no-credit-card1">Application Acceleration</div>
                <div className="gb-transferred2">$0.02/GB transferred</div>
              </div>
              <div className="info-product4">
                <div className="no-credit-card1">Web Application Firewal</div>
                <div className="gb-transferred2">$0.018/10k request</div>
              </div>
            </div>
          </div>
          <button className="button-area4" onClick={onButtonAreaClick}>
            <div className="button21">
              <div className="label25">check pricing</div>
              <img className="icon271" alt="" src="/icon15.svg" />
            </div>
          </button>
        </div>
        <div className="card13">
          <div className="content43">
            <div className="badge4">
              <div className="ellipse-div" />
              <b className="b3">3</b>
            </div>
            <b className="title4">Add more value with our plans</b>
            <div className="description87">
              With Azion plans, you can choose the best bundle of tools and
              access to the expertise you need to improve your applications
              running on Azion, while optimizing performance and managing risks.
            </div>
          </div>
          <button className="button-area4">
            <div className="button22" onClick={onButtonContainer1Click}>
              <div className="label25">compare plans</div>
              <img className="icon271" alt="" src="/icon16.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
