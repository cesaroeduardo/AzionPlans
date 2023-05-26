import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PricingPage.css";
const PricingPage = () => {
  const navigate = useNavigate();

  const onButtonAreaClick = useCallback(() => {
    navigate("/pricing-page");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sectionPricingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="pricing-page">
      <div className="section-banner">
        <div className="texts">
          <div className="plans">pricing</div>
          <div className="all-products-and">
            All products and features, no commitment required.
          </div>
          <div className="our-usage-based-pricing">
            Our usage-based pricing model gives you the freedom to pay for
            exactly what you need and nothing more.
          </div>
        </div>
        <div className="cards">
          <div className="card-1">
            <div className="badge">
              <div className="badge-child" />
              <b className="b">1</b>
            </div>
            <b className="start-for-free">Start for free</b>
            <div className="from-prototype-to">
              From prototype to enterprise-scale with NoOps, just code.
            </div>
            <div className="price-parent">
              <div className="price4">
                <div className="div3">$</div>
                <div className="div4">300</div>
              </div>
              <div className="in-credit-to">
                in credit to use within 12 months.
              </div>
            </div>
            <div className="no-credit-card-required-parent">
              <div className="no-credit-card">No credit card required.</div>
              <div className="button8">
                <div className="label12">create free account</div>
                <img className="icon166" alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <div className="card-2">
            <div className="badge1">
              <div className="badge-child" />
              <b className="b">2</b>
            </div>
            <div className="card-2-inner">
              <div className="group-wrapper">
                <div className="after-that-pay-as-you-go-the-parent">
                  <b className="after-that-pay-container">
                    <p className="after-that-pay">After that, pay as you go.</p>
                    <p className="after-that-pay">The more you use,</p>
                    <p className="after-that-pay">the more you save .</p>
                  </b>
                  <div className="chip-enable-light">
                    <b className="save">save</b>
                  </div>
                  <div className="chip-enable-light1">
                    <b className="more">more</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="rate-as-low-as-parent">
              <b className="rate-as-low">Rate as low as:</b>
              <div className="info-product">
                <div className="edge-application">Edge Application</div>
                <div className="gb-transferred">$0.02/GB transferred</div>
              </div>
              <div className="info-product">
                <div className="edge-application">Edge Functions</div>
                <div className="gb-transferred">$0.60/Mi. invocation</div>
              </div>
              <div className="info-product">
                <div className="edge-application">Application Acceleration</div>
                <div className="gb-transferred">$0.02/GB transferred</div>
              </div>
              <div className="info-product">
                <div className="edge-application">Web Application Firewal</div>
                <div className="gb-transferred">$0.018/10k request</div>
              </div>
            </div>
            <div className="button9">
              <div className="label12">check pricing</div>
              <img className="icon166" alt="" src="/icon22.svg" />
            </div>
          </div>
          <div className="card-3">
            <div className="badge1">
              <div className="badge-child" />
              <b className="b">3</b>
            </div>
            <div className="add-more-value-with-our-plans-wrapper">
              <b className="no-credit-card">Add more value with our plans</b>
            </div>
            <div className="with-azion-plans">
              With Azion plans, you can choose the best bundle of tools and
              access to the expertise you need to improve your applications
              running on Azion, while optimizing performance and managing risks.
            </div>
            <div className="button9">
              <div className="label12">compare plans</div>
              <img className="icon166" alt="" src="/icon23.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-banner1">
        <div className="texts1">
          <div className="plans1">pricing</div>
          <div className="all-products-and1">
            All products and features, no commitment required.
          </div>
          <div className="our-usage-based-pricing1">
            Our usage-based pricing model gives you the freedom to pay for
            exactly what you need and nothing more.
          </div>
        </div>
        <div className="cards1">
          <div className="card">
            <div className="content29">
              <div className="badge">
                <div className="ellipse-div" />
                <b className="b3">1</b>
              </div>
              <b className="start-for-free">Start for free</b>
              <div className="description19">
                From prototype to enterprise-scale with NoOps, just code.
              </div>
              <div className="slot18">
                <div className="price5">
                  <div className="div3">$</div>
                  <div className="div6">300</div>
                </div>
                <div className="in-credit-to1">
                  in credit to use within 12 months.
                </div>
              </div>
            </div>
            <div className="no-credit-card-required-parent">
              <div className="no-credit-card">No credit card required.</div>
              <button className="button11">
                <div className="label15">create free account</div>
                <img className="icon166" alt="" src="/icon24.svg" />
              </button>
            </div>
          </div>
          <div className="card1">
            <div className="content30">
              <div className="badge1">
                <div className="ellipse-div" />
                <b className="b3">2</b>
              </div>
              <b className="start-for-free">
                <p className="after-that-pay">After that, pay as you go.</p>
                <p className="after-that-pay">
                  <span>{`The `}</span>
                  <span className="more1">more</span>
                  <span className="you-use-the">{` you use, the more you `}</span>
                  <span className="more1">save</span>
                  <span className="you-use-the">.</span>
                </p>
              </b>
              <div className="slot19">
                <b className="rate-as-low1">Rate as low as:</b>
                <div className="group-wrapper">
                  <div className="no-credit-card">Edge Application</div>
                  <div className="gb-transferred2">$0.02/GB transferred</div>
                </div>
                <div className="group-wrapper">
                  <div className="no-credit-card">Edge Functions</div>
                  <div className="gb-transferred2">$0.60/Mi. invocation</div>
                </div>
                <div className="group-wrapper">
                  <div className="no-credit-card">Application Acceleration</div>
                  <div className="gb-transferred2">$0.02/GB transferred</div>
                </div>
                <div className="group-wrapper">
                  <div className="no-credit-card">Web Application Firewal</div>
                  <div className="gb-transferred2">$0.018/10k request</div>
                </div>
              </div>
            </div>
            <button className="button-area1" onClick={onButtonAreaClick}>
              <div className="button9">
                <div className="label16">check pricing</div>
                <img className="icon166" alt="" src="/icon25.svg" />
              </div>
            </button>
          </div>
          <div className="card2">
            <div className="content31">
              <div className="badge1">
                <div className="ellipse-div" />
                <b className="b3">3</b>
              </div>
              <b className="start-for-free">Add more value with our plans</b>
              <div className="description20">
                With Azion plans, you can choose the best bundle of tools and
                access to the expertise you need to improve your applications
                running on Azion, while optimizing performance and managing
                risks.
              </div>
            </div>
            <button className="button-area1">
              <div className="button13" onClick={onButtonContainer4Click}>
                <div className="label16">compare plans</div>
                <img className="icon166" alt="" src="/icon26.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="section-prices">
        <div className="nav">
          <div className="group">
            <b className="build">Build</b>
            <div className="list">
              <div className="navitem">
                <b className="navigation">Edge Application</b>
              </div>
              <div className="navitem1">
                <div className="navigation">Application Acceleration</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Edge Caching</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Edge Functions</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Load Balancer</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Image Processor</div>
              </div>
            </div>
          </div>
          <div className="group1">
            <b className="secure">Secure</b>
            <b className="edge-firewall">Edge Firewall</b>
            <div className="list1">
              <div className="navitem1">
                <div className="navigation">WAF</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Network Layer Protection</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Intelligence DNS</div>
              </div>
            </div>
          </div>
          <div className="group">
            <b className="build">Deliver</b>
            <div className="list2">
              <div className="navitem1">
                <b className="navigation">Edge Orchestrator</b>
              </div>
            </div>
          </div>
          <div className="group">
            <b className="build">Observe</b>
            <div className="list2">
              <div className="navitem1">
                <b className="navigation">Data Streaming</b>
              </div>
              <div className="navitem1">
                <b className="navigation">Edge Pulse</b>
              </div>
              <div className="navitem1">
                <b className="navigation">Real-Time Metrics</b>
              </div>
              <div className="navitem1">
                <b className="navigation">Real-Time Events</b>
              </div>
            </div>
          </div>
          <div className="group">
            <b className="build">Azion Plans Platform Fee</b>
            <div className="list">
              <div className="navitem">
                <b className="navigation">Developer</b>
              </div>
              <div className="navitem1">
                <div className="navigation">Business</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Enterprise</div>
              </div>
              <div className="navitem1">
                <div className="navigation">Mission Critical</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content32">
          <div className="title3">
            <div className="products">Products</div>
          </div>
          <div className="price-banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon27.svg" />
                </div>
                <b className="save">Edge Application</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Build serverless applications and run them anywhere: Azion's-operated network edge, remote-devices, on-premises and multi-cloud - on an easy and simple way. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader3">
                  <b className="header3">Data Transferred</b>
                  <div className="description21">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon28.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon28.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon29.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon30.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon31.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon32.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon33.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">First 10</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 40</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 100 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 350</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 500</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 4.000 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Over 5.000</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon34.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info1">
              <div className="row4">
                <img className="icon181" alt="" src="/icon35.svg" />
                <b className="save">Application Acceleration</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Secure your web application from numerous dangers, ranging from OWASP TOP 10 threats to sophisticated zero-day attacks. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader3">
                  <b className="header3">Data Transferred</b>
                  <div className="description21">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon37.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon38.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon39.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon40.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon41.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">First 10</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 40</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 100 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 350</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 500</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 4.000 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Over 5.000</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon42.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon43.svg" />
                </div>
                <b className="save">Edge Caching</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Accelerate delivery by caching content at the edge of the network, closer to your users. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="card3">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon44.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Real-Time Purge Operations</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    This is the number of operations to purge objects from the
                    cache, whether by URLs, Wildcard URLs or Cache Keys.
                  </p>
                  <p className="after-that-pay">
                    The first 1,000 purge operations each month are included for
                    all customers. When exceeding this volume, you will pay 5
                    USD per 1,000 additional purges.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card3">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon45.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">L2 Caching</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    An additional cache layer that reduces traffic to your point
                    of origin while improving performance and availability.
                  </p>
                  <p className="after-that-pay">
                    L2 Caching is an optional item. When used, Total Data
                    Transferred will be calculated as the sum of Edge Caching
                    traffic and L2 Caching traffic plus the monthly average of
                    net used space on L2 Caching as storage at a monthly cost of
                    0.07 USD per GB.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon47.svg" />
                </div>
                <b className="save">Edge Functions</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Run event-driven serverless applications at the edge of the network, closer to your users. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer2">
            <div className="table3">
              <div className="row24">
                <div className="tableheader3">
                  <b className="header3">Metrics</b>
                  <div className="description37">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon49.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon50.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon51.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon52.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon53.svg" />
                  </div>
                </div>
              </div>
              <div className="row25">
                <div className="cell76">
                  <div className="no-credit-card">Compute Time</div>
                  <div className="text34">per 1,000 seconds</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.049</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row25">
                <div className="cell76">
                  <div className="no-credit-card">Invocations</div>
                  <div className="text34">per million</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow2">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon42.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon54.svg" />
                </div>
                <b className="save">Load Balancer</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Balance the load on your origin and improve the reliability and availability of your content, applications and APIs. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader3">
                  <b className="header3">Data Transferred</b>
                  <div className="description21">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon49.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon50.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon51.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon52.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon53.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">First 10</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 40</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 100 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 350</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Next 500</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">{`Next 4.000 `}</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell76">
                  <div className="no-credit-card">Over 5.000</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon42.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon55.svg" />
                </div>
                <b className="save">Image Processor</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Just-in-time image optimization and manipulation to enhance the user experience. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader31">
                  <b className="header3">Images Processed</b>
                  <div className="description21">per 10,000</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">First 10</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">Next 40</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">{`Next 100 `}</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">Next 350</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">Next 500</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">{`Next 4.000 `}</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell237">
                  <div className="no-credit-card">Over 5.000</div>
                  <div className="text34">million images processed/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="group-wrapper">
              <div className="info">
                <div className="row4">
                  <div className="edge-caching">
                    <img className="icon172" alt="" src="/icon58.svg" />
                  </div>
                  <b className="save">DDoS Protection</b>
                </div>
                <div className="build-serverless-applications-container">
                  <span className="build-serverless-applications">{`Mitigate the largest and most complex network and application-layer DDoS attacks. `}</span>
                  <span className="access-product-details">
                    Access product details
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon59.svg" />
                </div>
                <b className="save">Network Layer Protection</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`A programmable security perimeter at the edge of the network for inbound and outbound traffic. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader34">
                  <b className="header3">Request</b>
                  <div className="description21">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon60.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon61.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon63.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon64.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">First 1</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Next 4</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Next 15</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Over 20</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos1">
            <div className="card3">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon65.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Rule Sets</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    This is the number of WAF settings or rule sets that can be
                    shared between different domains.
                  </p>
                  <p className="after-that-pay">
                    The first 50 rule sets are included for all customers. Above
                    this limit, an additional 200 USD fee will be charged per
                    rule set.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card6">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon66.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Rules</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="after-that-pay">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table3">
              <div className="row5">
                <div className="tableheader34">
                  <b className="header3">Request</b>
                  <div className="description21">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">USA</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Canada</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon60.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Europe</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon61.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Brazil</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Latam</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon63.svg" />
                  </div>
                </div>
                <div className="tableheader4">
                  <b className="header3">Other regions</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon64.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">First 1</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Next 4</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Next 15</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell258">
                  <div className="no-credit-card">Over 20</div>
                  <div className="text34">billion requests/month</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell77">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon67.svg" />
                </div>
                <b className="save">Intelligent DNS</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Improve the security and availability of your applications using Azion's resilient Authoritative DNS service. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer7">
            <div className="table3">
              <div className="row5">
                <div className="tableheader4">
                  <b className="header3">Hosted Zones</b>
                  <div className="description37">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Price</b>
                  <div className="description21">per Hosted Zone</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell314">
                  <div className="monthly-charges-are">First 25</div>
                </div>
                <div className="cell315">
                  <div className="monthly-charges-are">$25</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell314">
                  <div className="monthly-charges-are">26 to 10,000</div>
                </div>
                <div className="cell315">
                  <div className="monthly-charges-are">$15</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell314">
                  <div className="monthly-charges-are">Over 10,000</div>
                </div>
                <div className="cell315">
                  <div className="monthly-charges-are">$15</div>
                </div>
              </div>
              <div className="row5">
                <div className="tableheader4">
                  <b className="header3">Standard Queries</b>
                  <div className="description37">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Price</b>
                  <div className="description21">per million</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell314">
                  <div className="monthly-charges-are">Fist billion</div>
                </div>
                <div className="cell315">
                  <div className="monthly-charges-are">USD 0.85</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell314">
                  <div className="monthly-charges-are">Over 1 billion</div>
                </div>
                <div className="cell315">
                  <div className="monthly-charges-are">USD 0.40</div>
                </div>
              </div>
              <div className="accordionrow7">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos2">
            <div className="card7">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon65.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Rule Sets</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    This is the number of WAF settings or rule sets that can be
                    shared between different domains.
                  </p>
                  <p className="after-that-pay">
                    The first 50 rule sets are included for all customers. Above
                    this limit, an additional 200 USD fee will be charged per
                    rule set.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card7">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon66.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Rules</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="after-that-pay">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon54.svg" />
                </div>
                <b className="save">Data Streaming</b>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Get real-time data access to power your big data, stream processing, SIEM and serverless application platforms. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer8">
            <div className="table3">
              <div className="row66">
                <div className="tableheader4">
                  <b className="header3">Data Streaming Requests</b>
                  <div className="description21">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Price per 10,000 requests</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">First 1 billion</div>
                  <div className="text34">requests/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 4 billion</div>
                  <div className="text34">requests/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 15 billion</div>
                  <div className="text34">requests/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 20 billion</div>
                  <div className="text34">requests/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row66">
                <div className="tableheader4">
                  <b className="header3">Data Streamed</b>
                  <div className="description21">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Price per GB</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">First 10</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 40</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 100</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 350</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 500</div>
                  <div className="text34">TB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 4</div>
                  <div className="text34">PB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Over 5</div>
                  <div className="text34">PB/month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon68.svg" />
                </div>
                <b className="save">Edge Pulse</b>
                <div className="tag20">
                  <div className="tag21">free of charge</div>
                </div>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Monitor the user experience when accessing your applications and improve network availability and performance. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon69.svg" />
                </div>
                <b className="save">Edge Orchestrator</b>
                <div className="tag22">
                  <div className="tag21">free of charge</div>
                </div>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Deploy, control, automate, and monitor features on the edge, in real time with Azion's Edge Orchestrator. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon70.svg" />
                </div>
                <b className="save">Real-Time Metrics</b>
                <div className="tag20">
                  <div className="tag21">free of charge</div>
                </div>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Powerful insight into your applications’ performance, availability and security in real time. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="info">
              <div className="row4">
                <div className="edge-caching">
                  <img className="icon172" alt="" src="/icon71.svg" />
                </div>
                <b className="save">Real-Time Events</b>
                <div className="tag20">
                  <div className="tag21">free of charge</div>
                </div>
              </div>
              <div className="build-serverless-applications-container">
                <span className="build-serverless-applications">{`Explore the data generated by your applications on Azion’s platform and perform complex queries to track what is happening in your applications in real time. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer8">
            <div className="table3">
              <div className="row66">
                <div className="tableheader4">
                  <b className="header3">Data Gathered</b>
                  <div className="description37">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Price per GB</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">First 400</div>
                  <div className="text34">GB / month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 600</div>
                  <div className="text34">GB / month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Next 15 billion</div>
                  <div className="text34">GB / month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row66">
                <div className="tableheader4">
                  <b className="header3">Queries</b>
                  <div className="description37">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon166" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader49">
                  <b className="header3">Unitary</b>
                  <div className="description22">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon166" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">First 1000</div>
                  <div className="text34">GB / month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">Incuded</div>
                </div>
              </div>
              <div className="row6">
                <div className="cell324">
                  <div className="no-credit-card">Ovee 1000</div>
                  <div className="text34">GB / month</div>
                </div>
                <div className="cell325">
                  <div className="monthly-charges-are">$ 0.10</div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos3">
            <div className="card3">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon72.svg" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Queries</b>
                <div className="for-developers-who">
                  This is the total number of Real-Time Events queries. The
                  first 1,000 queries in a month are included for all clients.
                  When exceeding this volume, you will be charged 0.10 USD per
                  query.
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card10">
              <div className="edge-caching">
                <img className="icon191" alt="" />
              </div>
              <div className="content33">
                <b className="no-credit-card">Rules</b>
                <div className="for-developers-who">
                  <p className="after-that-pay">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="after-that-pay">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button14">
                <div className="label12">label</div>
                <img className="icon166" alt="" />
              </div>
            </div>
          </div>
          <div className="title3">
            <div className="products">Azion Plans Platform Fee</div>
          </div>
          <div className="banner1">
            <div className="content29">
              <div className="row90">
                <b className="save">Developer</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="button22">
              <div className="label12">Start for free</div>
              <img className="icon166" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="banner2">
            <div className="info11">
              <div className="row90">
                <b className="save">Business</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="table-parent">
              <div className="table13">
                <div className="div7">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $250/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1 month commitment `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>10% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>{` total for the first USD $10.000 `}</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>
                            <span>7% of monthly</span>
                          </b>
                          <span className="total-for-us">
                            <b>{` `}</b>
                            <span>total for US$ 70.000</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>5% of monthly</b>
                          <span className="total-for-us">
                            {" "}
                            total for US$ 170.000
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>3% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>total for above US$ 250.000 dollars</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner2">
            <div className="info11">
              <div className="row90">
                <b className="save">Enterprise</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="table-parent">
              <div className="table13">
                <div className="div7">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $5,000/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1-year commitment.  `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>10% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>{` total for the first USD $10.000 `}</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>
                            <span>7% of monthly</span>
                          </b>
                          <span className="total-for-us">
                            <b>{` `}</b>
                            <span>total for US$ 70.000</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>5% of monthly</b>
                          <span className="total-for-us">
                            {" "}
                            total for US$ 170.000
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>3% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>total for above US$ 250.000 dollars</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner2">
            <div className="info11">
              <div className="row90">
                <b className="save">Mission Critical</b>
              </div>
              <div className="for-developers-who">
                for customers whose online presence is critical and service
                performance has a direct impact on the business results.
              </div>
            </div>
            <div className="table-parent">
              <div className="table13">
                <div className="div7">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $5,000/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1-year commitment.  `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>10% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>{` total for the first USD $10.000 `}</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>
                            <span>7% of monthly</span>
                          </b>
                          <span className="total-for-us">
                            <b>{` `}</b>
                            <span>total for US$ 70.000</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <b>5% of monthly</b>
                          <span className="total-for-us">
                            {" "}
                            total for US$ 170.000
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell356">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="info-product">
                        <div className="primary-text11">
                          <span>
                            <b>3% of monthly</b>
                          </span>
                          <span className="total-for-us">
                            <span>{` `}</span>
                            <span>total for above US$ 250.000 dollars</span>
                          </span>
                        </div>
                        <div className="secondary-text">TB/month</div>
                      </div>
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon166" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="info-circle-fill-parent">
              <div className="edge-caching">
                <img className="icon191" alt="" src="/icon72.svg" />
              </div>
              <div className="monthly-charges-are">
                Monthly charges are based on each month's Azion usage charges,
                subject to a monthly minimum
              </div>
            </div>
            <div className="table16">
              <div className="header60">
                <div className="limits">Limits</div>
              </div>
              <div className="row-main-recomponentize-d12">
                <div className="cell368">
                  <div className="row-cell">
                    <img className="icon-left12" alt="" src="/icon-left1.svg" />
                    <div className="text379">
                      <div className="no-credit-card">
                        The usage limits for Azion's Edge Computing Platform
                        increase according to the level of support you subscribe
                        to.
                      </div>
                      <div className="secondary-text">TB/month</div>
                    </div>
                    <img className="icon-left12" alt="" src="/icon-right.svg" />
                  </div>
                </div>
              </div>
              <div className="row-main-recomponentize-d13">
                <div className="cell356">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="info-product">
                      <div className="primary-text11">
                        <b>
                          <span>With Developers Plan,</span>
                        </b>
                        <span className="total-for-us">
                          <b>{` `}</b>
                          <span>
                            you can create up to 10 domains and 10 edge
                            applications.
                          </span>
                        </span>
                      </div>
                      <div className="secondary-text">TB/month</div>
                    </div>
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                  </div>
                </div>
              </div>
              <div className="row-main-recomponentize-d13">
                <div className="cell356">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="info-product">
                      <div className="primary-text11">
                        <b>
                          <span>With Business Plan,</span>
                        </b>
                        <span className="total-for-us">
                          <b>{` `}</b>
                          <span>
                            you to create 50 domains and 50 edge applications. 
                          </span>
                        </span>
                      </div>
                      <div className="secondary-text">TB/month</div>
                    </div>
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                  </div>
                </div>
              </div>
              <div className="row-main-recomponentize-d13">
                <div className="cell356">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="info-product">
                      <div className="primary-text11">
                        <b>
                          <span>With Enterprise Plan,</span>
                        </b>
                        <span className="total-for-us">
                          <b>{` `}</b>
                          <span>
                            ou can create up to 200 domains and 200 edge
                            applications.
                          </span>
                        </span>
                      </div>
                      <div className="secondary-text">TB/month</div>
                    </div>
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
