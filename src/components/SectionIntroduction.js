import "./SectionIntroduction.css";
const SectionIntroduction = () => {
  return (
    <div className="section-introduction">
      <div className="texts">
        <div className="plans">pricing model</div>
        <div className="how-do-you">How do you pay for Azion?</div>
        <div className="our-usage-based-pricing">
          Our usage-based pricing model gives you the freedom to customize your
          choice for more efficiency paying for what you use
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="content28">
            <div className="badge">
              <div className="badge-child" />
              <b className="b">1</b>
            </div>
            <b className="title">Start for free</b>
            <div className="description19">
              From prototype to enterprise-scale with NoOps, just code.
            </div>
            <div className="slot18">
              <div className="price4">
                <div className="div3">$</div>
                <div className="div4">300</div>
              </div>
              <div className="in-credit-to">
                in credit to use within 12 months.
              </div>
            </div>
          </div>
          <div className="button-area">
            <div className="no-credit-card">No credit card required.</div>
            <button className="button11">
              <div className="label15">create free account</div>
              <img className="icon179" alt="" src="/icon4.svg" />
            </button>
          </div>
        </div>
        <div className="card1">
          <div className="content29">
            <div className="badge1">
              <div className="badge-child" />
              <b className="b">2</b>
            </div>
            <b className="title1">
              <p className="after-that-pay">After that, pay as you go.</p>
              <p className="after-that-pay">
                <span>{`The `}</span>
                <span className="more">more</span>
                <span className="you-use-the">{` you use, the more you `}</span>
                <span className="more">save</span>
                <span className="you-use-the">.</span>
              </p>
            </b>
            <div className="slot19">
              <b className="rate-as-low">Rate as low as:</b>
              <div className="info-product">
                <div className="no-credit-card">Edge Application</div>
                <div className="gb-transferred">$0.02/GB transferred</div>
              </div>
              <div className="info-product">
                <div className="no-credit-card">Edge Functions</div>
                <div className="gb-transferred">$0.60/Mi. invocation</div>
              </div>
              <div className="info-product">
                <div className="no-credit-card">Application Acceleration</div>
                <div className="gb-transferred">$0.02/GB transferred</div>
              </div>
              <div className="info-product">
                <div className="no-credit-card">Web Application Firewal</div>
                <div className="gb-transferred">$0.018/10k request</div>
              </div>
            </div>
          </div>
          <button className="button-area1">
            <div className="button12">
              <div className="label16">check pricing</div>
              <img className="icon179" alt="" src="/icon5.svg" />
            </div>
          </button>
        </div>
        <div className="card2">
          <div className="content30">
            <div className="badge1">
              <div className="badge-child" />
              <b className="b">3</b>
            </div>
            <b className="title1">Add more value with our plans</b>
            <div className="description20">
              With Azion plans, you can choose the best bundle of tools and
              access to the expertise you need to improve your applications
              running on Azion, while optimizing performance and managing risks.
            </div>
          </div>
          <button className="button-area1">
            <div className="button12">
              <div className="label16">compare plans</div>
              <img className="icon179" alt="" src="/icon6.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionIntroduction;
