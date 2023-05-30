import { useCallback } from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import "./SectionBanner.css";
const SectionBanner = ({
  title,
  description,
  tagline,
  onActionAreaClick,
  icon,
}) => {
  const onActionArea1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionPricingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-banner">
      <div className="texts">
        <div className="tagline">{tagline}</div>
        <div className="title15">{title}</div>
        <div className="description78">{description}</div>
      </div>
      <div className="cards">
        <div className="card8">
          <div className="content9">
            <div className="badge">
              <div className="badge-child" />
              <b className="b">1</b>
            </div>
            <b className="title16">Start for free</b>
            <div className="description79">
              From prototype to enterprise-scale with NoOps, just code.
            </div>
          </div>
          <div className="slot">
            <div className="price">
              <div className="div3">$</div>
              <div className="div4">300</div>
            </div>
            <div className="in-credit-to">
              in credit to use within 12 months.
            </div>
          </div>
          <div className="action-area">
            <div className="no-credit-card">No credit card required.</div>
            <ButtonPrimary label="create free account" />
          </div>
        </div>
        <div className="card9">
          <div className="content10">
            <div className="badge">
              <div className="badge-child" />
              <b className="b">2</b>
            </div>
            <b className="title17">
              <p className="after-that-pay">After that, pay as you go.</p>
              <p className="after-that-pay">
                <span>{`The `}</span>
                <span className="more">more</span>
                <span className="you-use-the">{` you use, the more you `}</span>
                <span className="more">save</span>
                <span className="you-use-the">.</span>
              </p>
            </b>
            <div className="slot1">
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
          <button className="action-area1" onClick={onActionAreaClick} />
          <ButtonSecondary label="check pricing" />
        </div>
        <div className="card10">
          <div className="content11">
            <div className="badge">
              <div className="badge-child" />
              <b className="b">3</b>
            </div>
            <b className="title17">Add more value with our plans</b>
            <div className="description80">
              With Azion plans, you can choose the best bundle of tools and
              access to the expertise you need to improve your applications
              running on Azion, while optimizing performance and managing risks.
            </div>
          </div>
          <button className="action-area2" onClick={onActionArea1Click}>
            <ButtonSecondary
              label="compare plans"
              buttonSecondaryBoxSizing="border-box"
              secondaryButtonDisplay="inline-block"
              buttonSecondaryBorder="2px solid var(--light-background-super)"
              secondaryButtonColor="#fff"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
