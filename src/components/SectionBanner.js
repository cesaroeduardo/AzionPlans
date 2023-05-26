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
    <div className="section-banner2">
      <div className="texts2">
        <div className="plans2">{tagline}</div>
        <div className="how-do-you">{title}</div>
        <div className="our-usage-based-pricing2">{description}</div>
      </div>
      <div className="cards2">
        <div className="card11">
          <div className="content41">
            <div className="badge6">
              <div className="badge-child3" />
              <b className="b6">1</b>
            </div>
            <b className="title4">Start for free</b>
            <div className="description86">
              From prototype to enterprise-scale with NoOps, just code.
            </div>
            <div className="slot20">
              <div className="price6">
                <div className="div10">$</div>
                <div className="div11">300</div>
              </div>
              <div className="in-credit-to2">
                in credit to use within 12 months.
              </div>
            </div>
          </div>
          <div className="button-area3">
            <div className="no-credit-card2">No credit card required.</div>
            <button className="button23">
              <div className="label27">create free account</div>
              <img className="icon274" alt="" src="/icon.svg" />
            </button>
          </div>
        </div>
        <div className="card12">
          <div className="content42">
            <div className="badge7">
              <div className="badge-child3" />
              <b className="b6">2</b>
            </div>
            <b className="title4">
              <p className="after-that-pay2">After that, pay as you go.</p>
              <p className="after-that-pay2">
                <span>{`The `}</span>
                <span className="more2">more</span>
                <span className="you-use-the1">{` you use, the more you `}</span>
                <span className="more2">save</span>
                <span className="you-use-the1">.</span>
              </p>
            </b>
            <div className="slot21">
              <b className="rate-as-low2">Rate as low as:</b>
              <div className="info-product8">
                <div className="no-credit-card2">Edge Application</div>
                <div className="gb-transferred4">$0.02/GB transferred</div>
              </div>
              <div className="info-product8">
                <div className="no-credit-card2">Edge Functions</div>
                <div className="gb-transferred4">$0.60/Mi. invocation</div>
              </div>
              <div className="info-product8">
                <div className="no-credit-card2">Application Acceleration</div>
                <div className="gb-transferred4">$0.02/GB transferred</div>
              </div>
              <div className="info-product8">
                <div className="no-credit-card2">Web Application Firewal</div>
                <div className="gb-transferred4">$0.018/10k request</div>
              </div>
            </div>
          </div>
          <button className="button-area4" onClick={onButtonAreaClick}>
            <div className="button24">
              <div className="label28">check pricing</div>
              <img className="icon274" alt="" src="/icon1.svg" />
            </div>
          </button>
        </div>
        <div className="card13">
          <div className="content43">
            <div className="badge7">
              <div className="badge-child3" />
              <b className="b6">3</b>
            </div>
            <b className="title4">Add more value with our plans</b>
            <div className="description87">
              With Azion plans, you can choose the best bundle of tools and
              access to the expertise you need to improve your applications
              running on Azion, while optimizing performance and managing risks.
            </div>
          </div>
          <button className="button-area4">
            <div className="button25" onClick={onButtonContainer1Click}>
              <div className="label28">compare plans</div>
              <img className="icon274" alt="" src="/icon2.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
