import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";
import "./PricingPage.css";
const PricingPage = () => {
  const navigate = useNavigate();

  const onActionAreaClick = useCallback(() => {
    navigate("/pricing-page");
  }, [navigate]);

  return (
    <div className="pricing-page">
      <SectionBanner
        title="All products and features, no commitment required."
        description="Our usage-based pricing model gives you the freedom to pay for exactly what you need and nothing more."
        tagline="pricing"
        onActionAreaClick={onActionAreaClick}
        icon="16x16x3123984206"
      />
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
        <div className="content">
          <div className="title-header">
            <div className="title">Products</div>
          </div>
          <div className="price-banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon11.svg" />
                </div>
                <b className="developer">Edge Application</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Build serverless applications and run them anywhere: Azion's-operated network edge, remote-devices, on-premises and multi-cloud - on an easy and simple way. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader">
                  <b className="header">Data Transferred</b>
                  <div className="description1">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon37.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon38.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon39.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon40.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon41.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">First 10</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 40</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 100 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 350</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 500</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 4.000 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Over 5.000</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon34.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container1">
              <div className="row">
                <img className="icon10" alt="" src="/icon35.svg" />
                <b className="developer">Application Acceleration</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Secure your web application from numerous dangers, ranging from OWASP TOP 10 threats to sophisticated zero-day attacks. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader">
                  <b className="header">Data Transferred</b>
                  <div className="description1">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon22.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon22.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon31.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon42.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon51.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon61.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon71.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">First 10</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 40</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 100 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 350</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 500</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 4.000 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Over 5.000</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon34.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon9.svg" />
                </div>
                <b className="developer">Edge Caching</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Accelerate delivery by caching content at the edge of the network, closer to your users. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="card">
              <div className="icon">
                <img className="icon21" alt="" src="/icon44.svg" />
              </div>
              <div className="content1">
                <b className="text">Real-Time Purge Operations</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    This is the number of operations to purge objects from the
                    cache, whether by URLs, Wildcard URLs or Cache Keys.
                  </p>
                  <p className="this-is-the">
                    The first 1,000 purge operations each month are included for
                    all customers. When exceeding this volume, you will pay 5
                    USD per 1,000 additional purges.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img className="icon21" alt="" src="/icon45.svg" />
              </div>
              <div className="content1">
                <b className="text">L2 Caching</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    An additional cache layer that reduces traffic to your point
                    of origin while improving performance and availability.
                  </p>
                  <p className="this-is-the">
                    L2 Caching is an optional item. When used, Total Data
                    Transferred will be calculated as the sum of Edge Caching
                    traffic and L2 Caching traffic plus the monthly average of
                    net used space on L2 Caching as storage at a monthly cost of
                    0.07 USD per GB.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon10.svg" />
                </div>
                <b className="developer">Edge Functions</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Run event-driven serverless applications at the edge of the network, closer to your users. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer2">
            <div className="table">
              <div className="row20">
                <div className="tableheader">
                  <b className="header">Metrics</b>
                  <div className="description20">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon36.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon37.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon38.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon39.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon40.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon41.svg" />
                  </div>
                </div>
              </div>
              <div className="row21">
                <div className="cell">
                  <div className="text">Compute Time</div>
                  <div className="text1">per 1,000 seconds</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.049</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row21">
                <div className="cell">
                  <div className="text">Invocations</div>
                  <div className="text1">per million</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow2">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon421.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon112.svg" />
                </div>
                <b className="developer">Load Balancer</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Balance the load on your origin and improve the reliability and availability of your content, applications and APIs. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader">
                  <b className="header">Data Transferred</b>
                  <div className="description1">total per GB</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon12.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon13.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon14.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon15.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">First 10</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 40</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 100 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 350</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Next 500</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">{`Next 4.000 `}</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell">
                  <div className="text">Over 5.000</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon421.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon55.svg" />
                </div>
                <b className="developer">Image Processor</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Just-in-time image optimization and manipulation to enhance the user experience. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader28">
                  <b className="header">Images Processed</b>
                  <div className="description1">per 10,000</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon48.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon48.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">First 10</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">Next 40</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">{`Next 100 `}</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">Next 350</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">Next 500</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">{`Next 4.000 `}</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell161">
                  <div className="text">Over 5.000</div>
                  <div className="text1">million images processed/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon421.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container3">
              <div className="info3">
                <div className="row">
                  <div className="icon">
                    <img className="icon1" alt="" src="/icon122.svg" />
                  </div>
                  <b className="developer">DDoS Protection</b>
                </div>
                <div className="description">
                  <span className="build-serverless-applications">{`Mitigate the largest and most complex network and application-layer DDoS attacks. `}</span>
                  <span className="access-product-details">
                    Access product details
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon59.svg" />
                </div>
                <b className="developer">Network Layer Protection</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`A programmable security perimeter at the edge of the network for inbound and outbound traffic. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader31">
                  <b className="header">Request</b>
                  <div className="description1">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon60.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon611.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon63.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon64.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">First 1</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Next 4</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Next 15</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Over 20</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos1">
            <div className="card">
              <div className="icon">
                <img className="icon21" alt="" src="/icon65.svg" />
              </div>
              <div className="content1">
                <b className="text">Rule Sets</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    This is the number of WAF settings or rule sets that can be
                    shared between different domains.
                  </p>
                  <p className="this-is-the">
                    The first 50 rule sets are included for all customers. Above
                    this limit, an additional 200 USD fee will be charged per
                    rule set.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card3">
              <div className="icon">
                <img className="icon21" alt="" src="/icon66.svg" />
              </div>
              <div className="content1">
                <b className="text">Rules</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="this-is-the">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div className="table">
              <div className="row1">
                <div className="tableheader31">
                  <b className="header">Request</b>
                  <div className="description1">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">USA</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Canada</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon60.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Europe</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon611.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Brazil</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Latam</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon63.svg" />
                  </div>
                </div>
                <div className="tableheader1">
                  <b className="header">Other regions</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon64.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">First 1</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Next 4</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Next 15</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell182">
                  <div className="text">Over 20</div>
                  <div className="text1">billion requests/month</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.085</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
                <div className="cell1">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon67.svg" />
                </div>
                <b className="developer">Intelligent DNS</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Improve the security and availability of your applications using Azion's resilient Authoritative DNS service. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer7">
            <div className="table">
              <div className="row1">
                <div className="tableheader1">
                  <b className="header">Hosted Zones</b>
                  <div className="description20">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Price</b>
                  <div className="description1">per Hosted Zone</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell238">
                  <div className="monthly-charges-are">First 25</div>
                </div>
                <div className="cell239">
                  <div className="monthly-charges-are">$25</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell238">
                  <div className="monthly-charges-are">26 to 10,000</div>
                </div>
                <div className="cell239">
                  <div className="monthly-charges-are">$15</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell238">
                  <div className="monthly-charges-are">Over 10,000</div>
                </div>
                <div className="cell239">
                  <div className="monthly-charges-are">$15</div>
                </div>
              </div>
              <div className="row1">
                <div className="tableheader1">
                  <b className="header">Standard Queries</b>
                  <div className="description20">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Price</b>
                  <div className="description1">per million</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell238">
                  <div className="monthly-charges-are">Fist billion</div>
                </div>
                <div className="cell239">
                  <div className="monthly-charges-are">USD 0.85</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell238">
                  <div className="monthly-charges-are">Over 1 billion</div>
                </div>
                <div className="cell239">
                  <div className="monthly-charges-are">USD 0.40</div>
                </div>
              </div>
              <div className="accordionrow7">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos2">
            <div className="card4">
              <div className="icon">
                <img className="icon21" alt="" src="/icon65.svg" />
              </div>
              <div className="content1">
                <b className="text">Rule Sets</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    This is the number of WAF settings or rule sets that can be
                    shared between different domains.
                  </p>
                  <p className="this-is-the">
                    The first 50 rule sets are included for all customers. Above
                    this limit, an additional 200 USD fee will be charged per
                    rule set.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card4">
              <div className="icon">
                <img className="icon21" alt="" src="/icon66.svg" />
              </div>
              <div className="content1">
                <b className="text">Rules</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="this-is-the">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon46.svg" />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon112.svg" />
                </div>
                <b className="developer">Data Streaming</b>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Get real-time data access to power your big data, stream processing, SIEM and serverless application platforms. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer8">
            <div className="table">
              <div className="row62">
                <div className="tableheader1">
                  <b className="header">Data Streaming Requests</b>
                  <div className="description1">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Price per 10,000 requests</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">First 1 billion</div>
                  <div className="text1">requests/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 4 billion</div>
                  <div className="text1">requests/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 15 billion</div>
                  <div className="text1">requests/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 20 billion</div>
                  <div className="text1">requests/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row62">
                <div className="tableheader1">
                  <b className="header">Data Streamed</b>
                  <div className="description1">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Price per GB</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">First 10</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 40</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 100</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 350</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 500</div>
                  <div className="text1">TB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 4</div>
                  <div className="text1">PB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Over 5</div>
                  <div className="text1">PB/month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon17.svg" />
                </div>
                <b className="developer">Edge Pulse</b>
                <div className="tag">
                  <div className="tag1">free of charge</div>
                </div>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Monitor the user experience when accessing your applications and improve network availability and performance. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon142.svg" />
                </div>
                <b className="developer">Edge Orchestrator</b>
                <div className="tag2">
                  <div className="tag1">free of charge</div>
                </div>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Deploy, control, automate, and monitor features on the edge, in real time with Azion's Edge Orchestrator. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon70.svg" />
                </div>
                <b className="developer">Real-Time Metrics</b>
                <div className="tag">
                  <div className="tag1">free of charge</div>
                </div>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Powerful insight into your applications’ performance, availability and security in real time. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="icon">
                  <img className="icon1" alt="" src="/icon711.svg" />
                </div>
                <b className="developer">Real-Time Events</b>
                <div className="tag">
                  <div className="tag1">free of charge</div>
                </div>
              </div>
              <div className="description">
                <span className="build-serverless-applications">{`Explore the data generated by your applications on Azion’s platform and perform complex queries to track what is happening in your applications in real time. `}</span>
                <span className="access-product-details">
                  Access product details
                </span>
              </div>
            </div>
          </div>
          <div className="tablecontainer8">
            <div className="table">
              <div className="row62">
                <div className="tableheader1">
                  <b className="header">Data Gathered</b>
                  <div className="description20">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Price per GB</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">First 400</div>
                  <div className="text1">GB / month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 600</div>
                  <div className="text1">GB / month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Next 15 billion</div>
                  <div className="text1">GB / month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$0.198</div>
                </div>
              </div>
              <div className="row62">
                <div className="tableheader1">
                  <b className="header">Queries</b>
                  <div className="description20">per 10,000</div>
                  <div className="info-circle-fill">
                    <img className="icon2" alt="" src="/icon56.svg" />
                  </div>
                </div>
                <div className="tableheader46">
                  <b className="header">Unitary</b>
                  <div className="description2">total per GB</div>
                  <div className="info-circle-fill1">
                    <img className="icon2" alt="" src="/icon62.svg" />
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">First 1000</div>
                  <div className="text1">GB / month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">Incuded</div>
                </div>
              </div>
              <div className="row2">
                <div className="cell248">
                  <div className="text">Ovee 1000</div>
                  <div className="text1">GB / month</div>
                </div>
                <div className="cell249">
                  <div className="monthly-charges-are">$ 0.10</div>
                </div>
              </div>
              <div className="accordionrow8">
                <div className="trigger">
                  <div className="primary-text">Price Example</div>
                  <div className="chevron-right">
                    <img className="icon2" alt="" src="/icon57.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos3">
            <div className="card">
              <div className="icon">
                <img className="icon21" alt="" src="/icon72.svg" />
              </div>
              <div className="content1">
                <b className="text">Queries</b>
                <div className="for-developers-who">
                  This is the total number of Real-Time Events queries. The
                  first 1,000 queries in a month are included for all clients.
                  When exceeding this volume, you will be charged 0.10 USD per
                  query.
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" src="/icon8.svg" />
              </div>
            </div>
            <div className="card7">
              <div className="icon">
                <img className="icon21" alt="" />
              </div>
              <div className="content1">
                <b className="text">Rules</b>
                <div className="for-developers-who">
                  <p className="this-is-the">
                    Rules are the number of rules created by the client to allow
                    (whitelist rules) or block (blacklist rules) access.
                  </p>
                  <p className="this-is-the">
                    The first 200 rules are included for all customers. Above
                    this limit, an additional 5 USD will fee will be charged per
                    rule.
                  </p>
                </div>
              </div>
              <div className="button">
                <div className="label">label</div>
                <img className="icon2" alt="" />
              </div>
            </div>
          </div>
          <div className="first">
            <div className="azion-plans-platform1">
              Azion Plans Platform Fee
            </div>
          </div>
          <div className="banner1">
            <div className="info5">
              <div className="row86">
                <b className="developer">Developer</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="button8">
              <div className="label">Start for free</div>
              <img className="icon2" alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className="banner2">
            <div className="info6">
              <div className="row86">
                <b className="developer">Business</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="table-parent">
              <div className="table10">
                <div className="div">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $250/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1 month commitment `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                    <img className="icon2" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner2">
            <div className="info6">
              <div className="row86">
                <b className="developer">Enterprise</b>
              </div>
              <div className="for-developers-who">
                For developers who want to explore the potential of our platform
                themselves.
              </div>
            </div>
            <div className="table-parent">
              <div className="table10">
                <div className="div">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $5,000/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1-year commitment.  `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                    <img className="icon2" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner2">
            <div className="info6">
              <div className="row86">
                <b className="developer">Mission Critical</b>
              </div>
              <div className="for-developers-who">
                for customers whose online presence is critical and service
                performance has a direct impact on the business results.
              </div>
            </div>
            <div className="table-parent">
              <div className="table10">
                <div className="div">
                  <div className="minimum-usd-250monthly">
                    Minimum USD $5,000/monthly
                  </div>
                  <div className="primary-text10">{`Minimum 1-year commitment.  `}</div>
                </div>
                <div className="row-main-recomponentize-d">
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                  <div className="cell280">
                    <div className="row-cell">
                      <img className="icon-left" alt="" src="/icon-left.svg" />
                      <div className="text334">
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
                    <img className="icon2" alt="" src="/icon73.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="info-circle-fill-parent">
              <div className="icon">
                <img className="icon21" alt="" src="/icon72.svg" />
              </div>
              <div className="monthly-charges-are">
                Monthly charges are based on each month's Azion usage charges,
                subject to a monthly minimum
              </div>
            </div>
            <div className="table13">
              <div className="header57">
                <div className="limits">Limits</div>
              </div>
              <div className="row-main-recomponentize-d12">
                <div className="cell292">
                  <div className="row-cell">
                    <img className="icon-left12" alt="" src="/icon-left1.svg" />
                    <div className="text346">
                      <div className="text">
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
                <div className="cell280">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="text334">
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
                <div className="cell280">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="text334">
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
                <div className="cell280">
                  <div className="row-cell">
                    <img className="icon-left" alt="" src="/icon-left.svg" />
                    <div className="text334">
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
