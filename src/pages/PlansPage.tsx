import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";
import Header from "../components/Header";
import SectionIntroduction from "../components/SectionIntroduction";
import SectionSignup from "../components/SectionSignup";
import SectionTalkexpert from "../components/SectionTalkexpert";
import SectionPrincing from "../components/SectionPrincing";
import "./PlansPage.css";
const PlansPage: FunctionComponent = () => {
  return (
    <div className="plans-page">
      <Header />
      <SectionIntroduction />
      <SectionSignup />
      <SectionTalkexpert />
      <SectionPrincing />
      <div className="section-features">
        <div className="plan-headers">
          <div className="headers">
            <div className="first">
              <div className="features">Features</div>
            </div>
            <div className="planheader">
              <div className="row">
                <div className="name">Developer</div>
                <div className="tag">
                  <div className="tagmain">
                    <b className="label">Recommended</b>
                    <div className="external-link">
                      <img className="icon" alt="" src="/icon11.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="starting-at">starting at</div>
              <div className="price">
                <div className="free">Free</div>
              </div>
              <div className="for-testing-purposes">
                For testing purposes and are individuals without professional
                needs.
              </div>
              <div className="button">
                <div className="label1">get started</div>
                <img className="icon1" alt="" />
              </div>
              <div className="button1">
                <div className="label1">Label</div>
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
            </div>
            <div className="planheader">
              <div className="row">
                <div className="name">Business</div>
                <div className="tag">
                  <div className="tagmain">
                    <b className="label">Recommended</b>
                    <div className="external-link">
                      <img className="icon" alt="" src="/icon11.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="starting-at">starting at</div>
              <div className="price1">
                <div className="free">$250</div>
                <div className="usdmonth">USD/month</div>
              </div>
              <div className="for-testing-purposes">
                <p className="customers-with-a">
                  Customers with a business profile are small growing
                  businesses.
                </p>
              </div>
              <div className="button2">
                <div className="label1">get business</div>
                <img className="icon1" alt="" src="/icon12.svg" />
              </div>
              <div className="button1">
                <div className="label1">contact us</div>
                <img className="icon1" alt="" src="/icon12.svg" />
              </div>
            </div>
            <div className="planheader">
              <div className="row">
                <div className="name">Enterprise</div>
                <div className="tag">
                  <div className="tagmain">
                    <b className="label">Recommended</b>
                    <div className="external-link">
                      <img className="icon" alt="" src="/icon11.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="starting-at">starting at</div>
              <div className="price2">
                <div className="free">USD 5,000.00</div>
                <div className="usdmonth1">USD/month</div>
              </div>
              <div className="for-testing-purposes">
                For companies that use Azion for production and need help to get
                the most out of the platform.
              </div>
              <div className="button2">
                <div className="label1">get enterprise</div>
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
              <div className="button1">
                <div className="label1">contact us</div>
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
            </div>
            <div className="planheader">
              <div className="row">
                <div className="name">Mission Critical</div>
                <div className="tag">
                  <div className="tagmain">
                    <b className="label">Recommended</b>
                    <div className="external-link">
                      <img className="icon" alt="" src="/icon11.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="starting-at">starting at</div>
              <div className="price2">
                <div className="free">USD 18,750.00</div>
                <div className="usdmonth2">USD/month</div>
              </div>
              <div className="for-testing-purposes">
                Service performance, security, availability and scalability.
              </div>
              <div className="button2">
                <div className="label1">get mission critical</div>
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
              <div className="button1">
                <div className="label1">contact us</div>
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="plan-info" data-scroll-to="planInfoContainer">
          <div className="table">
            <div className="tableheader">
              <div className="header">Product Features</div>
            </div>
            <div className="featurerow">
              <div className="featurecell">
                <div className="content">
                  <div className="feature-name">
                    Access to all Azion products
                  </div>
                  <div className="description">
                    Developers will have access to all Azion products and pay by
                    use.
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow1">
              <div className="featurecell">
                <div className="content">
                  <div className="feature-name">Beta Access</div>
                  <div className="description">
                    Azion might give early access to new features for customers
                    under Developer Plan that are still under refinement by our
                    product teams. It’s important to note that these features
                    are not covered by a Service Level Agreement.
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon17.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow2">
              <div className="featurecell2">
                <div className="content">
                  <div className="feature-name">Uptime SLA</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="cell8">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="text">100%</div>
              </div>
              <div className="cell8">
                <div className="text">100%</div>
              </div>
              <div className="cell8">
                <div className="text">100%</div>
              </div>
            </div>
            <div className="featurerow3">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">Unmetered DDoS Protection</div>
                  <div className="description">
                    We will give our customers unmetered mitigation during a
                    DDoS incident.
                  </div>
                </div>
                <div className="infotooltip">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath.svg"
                        />
                      </div>
                      <div className="column">
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip1">
                          <b className="tooltip-title">
                            Unmetered DDoS Protection
                          </b>
                          <div className="text3">
                            Customers who subscribed to any plan will have
                            access to DDoS protection without the risk of higher
                            charges.
                          </div>
                        </div>
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath2.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow3">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow4">
              <div className="featurecell">
                <div className="content">
                  <div className="feature-name">Single Sign On (SSO)</div>
                  <div className="description">Federated authentication</div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow5">
              <div className="featurecell5">
                <div className="content">
                  <div className="feature-name">Edge Network Custom Maps</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="cell8">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell22">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Upgrade using Add On</div>
              </div>
              <div className="cell8">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table1">
            <div className="tableheader1">
              <div className="header">Services and Support</div>
            </div>
            <div className="featurerow6">
              <div className="featurecell6">
                <div className="content">
                  <div className="feature-name">Tech Support Options</div>
                  <div className="description">
                    Can open tickets via ticket and email, reporting bugs and
                    incidents.
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="text">Tickets and e-mail</div>
              </div>
              <div className="cell2">
                <div className="text">Tickets, e-mail and phone</div>
              </div>
              <div className="cell3">
                <div className="text">Tickets, e-mail and phone</div>
              </div>
            </div>
            <div className="featurerow7">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">Techical Support SLA</div>
                  <div className="description">
                    Azion might give early access to new features for customers
                    under Developer Plan that are still under refinement by our
                    product teams. It’s important to note that these features
                    are not covered by a Service Level Agreement.
                  </div>
                </div>
                <div className="infotooltip1">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath.svg"
                        />
                      </div>
                      <div className="column">
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip1">
                          <b className="tooltip-title">Techical Support SLA</b>
                          <div className="text3">
                            24x7 access to Support Engineers via ticket, email
                            and phone
                          </div>
                        </div>
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath2.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow3">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow8">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">Education Programs</div>
                  <div className="description">
                    Unlimited access to documentation, guides, whitepapers and
                    bug reports.
                  </div>
                </div>
                <div className="infotooltip">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath.svg"
                        />
                      </div>
                      <div className="column">
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip1">
                          <b className="tooltip-title">Education Programs</b>
                          <div className="text3">
                            Unlimited access to documentation, guides,
                            whitepapers and bug reports.
                          </div>
                        </div>
                        <div className="arrow1">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath2.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow3">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow9">
              <div className="featurecell9">
                <div className="content">
                  <div className="feature-name">Custom Education Programs</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell38">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Paid Add-on</div>
              </div>
              <div className="cell39">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Paid Add-on</div>
              </div>
            </div>
            <div className="featurerow10">
              <div className="featurecell10">
                <div className="content3">
                  <div className="feature-name3">Integration Services</div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon19.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke1.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="text">1 hour / year included</div>
              </div>
              <div className="cell2">
                <div className="text">20 hours / year included</div>
              </div>
              <div className="cell3">
                <div className="text">40 hours / year included</div>
              </div>
            </div>
            <div className="featurerow11">
              <div className="featurecell10">
                <div className="content3">
                  <div className="feature-name3">Best Practices Review</div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon19.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke1.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="text">20 hours / year included</div>
              </div>
              <div className="cell3">
                <div className="text">40 hours / year included</div>
              </div>
            </div>
            <div className="featurerow12">
              <div className="featurecell12">
                <div className="content3">
                  <div className="feature-name3">Named TAM</div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon19.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke1.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell38">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Paid Add-on</div>
              </div>
              <div className="cell39">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Paid Add-on</div>
              </div>
            </div>
            <div className="featurerow13">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">
                    Named Customer Success Manager
                  </div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon20.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow4">
              <div className="featurecell14">
                <div className="content3">
                  <div className="feature-name3">Security Response Team</div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon19.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell58">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Upgrade using Add On</div>
              </div>
              <div className="cell59">
                <div className="text">20 hours / month included</div>
              </div>
            </div>
            <div className="featurerow15">
              <div className="featurecell12">
                <div className="content3">
                  <div className="feature-name3">Slack Channel</div>
                  <div className="description">Description</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon19.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell38">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Upgrade using Add On</div>
              </div>
              <div className="cell39">
                <div className="tag4">
                  <div className="tag5">Paid Add-on</div>
                </div>
                <div className="upgrade-using-add">Upgrade using Add On</div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="tableheader2">
              <div className="header">Compliance</div>
            </div>
            <div className="featurerow16">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">ISO 27001</div>
                  <div className="description">
                    Compliance feature, information security certification.
                  </div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon21.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow17">
              <div className="featurecell17">
                <div className="content3">
                  <div className="feature-name3">{`PCI DSS 4.0 `}</div>
                  <div className="description">
                    Azion might give early access to new features for customers
                    under Developer Plan that are still under refinement by our
                    product teams. It’s important to note that these features
                    are not covered by a Service Level Agreement.
                  </div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon21.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell8">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="featurerow17">
              <div className="featurecell3">
                <div className="content3">
                  <div className="feature-name3">SOC 2 Type 2 (and SOC 3)</div>
                  <div className="description">Federated authentication</div>
                </div>
                <div className="infotooltip3">
                  <div className="icon">
                    <div className="icon30">
                      <img className="icon31" alt="" src="/icon18.svg" />
                    </div>
                    <div className="tooltip">
                      <div className="arrow12">
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                        <img className="stroke-icon" alt="" src="/stroke.svg" />
                      </div>
                      <div className="column3">
                        <div className="arrow13">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrowpath1.svg"
                          />
                        </div>
                        <div className="tooltip7">
                          <div className="info">
                            <div className="text9">
                              <b className="tooltip-title3">Tooltip Title</b>
                              <div className="text10">
                                <p className="customers-with-a">{`Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. `}</p>
                                <p className="customers-with-a">&nbsp;</p>
                                <p className="customers-with-a">
                                  Nulla mollis sapien sollicitudin lacinia
                                  lacinia.
                                </p>
                              </div>
                            </div>
                            <div className="iconbutton">
                              <div className="iconbox">
                                <div className="icon82">
                                  <img
                                    className="icon83"
                                    alt=""
                                    src="/icon21.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slot">
                            <div className="slot1">Slot</div>
                          </div>
                        </div>
                        <div className="arrow14">
                          <img
                            className="arrow-icon"
                            alt=""
                            src="/arrow1.svg"
                          />
                          <img
                            className="stroke-icon1"
                            alt=""
                            src="/stroke3.svg"
                          />
                        </div>
                      </div>
                      <div className="arrow15">
                        <img className="arrow-icon" alt="" src="/arrow2.svg" />
                        <img
                          className="stroke-icon"
                          alt=""
                          src="/stroke2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon16.svg" />
                  </div>
                </div>
              </div>
              <div className="cell1">
                <div className="iconbox">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon15.svg" />
                  </div>
                </div>
              </div>
              <div className="cell2">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
              <div className="cell3">
                <div className="icon12">
                  <div className="check-circle">
                    <img className="icon1" alt="" src="/icon13.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="infos">
          <div className="left">
            <div className="azion-logo">
              <img className="vector-icon" alt="" src="/vector4.svg" />
              <img className="vector-icon1" alt="" src="/vector5.svg" />
            </div>
            <div className="info">
              <div className="for-sales-we">{`For sales and support we are available at `}</div>
              <div className="for-sales-we1">+1 (833) 33-AZION</div>
            </div>
          </div>
          <div className="links">
            <div className="links1">
              <b className="resources">Resources</b>
              <div className="stack">
                <div className="link">
                  <a
                    className="example-link-title"
                    href="https://www.azion.com/en/blog/"
                  >
                    Blog
                  </a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a
                    className="example-link-title"
                    href="https://www.azion.com/en/marketplace/"
                  >
                    Marketplace
                  </a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a
                    className="example-link-title"
                    href="https://www.azion.com/en/success-case/"
                  >
                    Success Cases
                  </a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a
                    className="example-link-title"
                    href="https://www.azion.com/en/compliance/"
                  >
                    Compliance
                  </a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links1">
              <b className="resources">Company</b>
              <div className="stack">
                <div className="link">
                  <a
                    className="example-link-title"
                    href="https://www.azion.com/en/about-us/"
                  >
                    About us
                  </a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <div className="example-link-title5">Azion Edge Network</div>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Careers</a>
                  <div className="tag32">
                    <div className="tag5">We are hiring!</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Partners</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Privacy Policy</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links1">
              <b className="resources">Pricing</b>
              <div className="stack">
                <div className="link">
                  <a className="example-link-title">Plans</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Pricing</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links1">
              <b className="resources">Contact Us</b>
              <div className="stack">
                <div className="link">
                  <a className="example-link-title">Sales</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link12">
                  <div className="example-link-title5">Support</div>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Facebook</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
                <div className="link">
                  <a className="example-link-title">Twitter</a>
                  <div className="tag20">
                    <div className="tag5">Tag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="row4">
            <DropdownButton
              className="select-field"
              title="English"
              variant="primary"
              align="start"
              drop="down"
            >
              <Dropdown.Item>Portuguese</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </DropdownButton>
            <div className="social-btn">
              <a
                className="iconbutton9"
                href="https://www.facebook.com/aziontech/"
                target="_blank"
              >
                <div className="check-circle">
                  <img className="icon166" alt="" src="/icon22.svg" />
                </div>
              </a>
              <a
                className="iconbutton9"
                href="https://twitter.com/aziontech"
                target="_blank"
              >
                <div className="check-circle">
                  <img className="icon166" alt="" src="/icon23.svg" />
                </div>
              </a>
              <a
                className="iconbutton9"
                href="https://www.linkedin.com/company/aziontech/"
                target="_blank"
              >
                <div className="check-circle">
                  <img className="icon166" alt="" src="/icon24.svg" />
                </div>
              </a>
              <a
                className="iconbutton9"
                href="https://www.instagram.com/aziontech/?hl=en"
                target="_blank"
              >
                <div className="check-circle">
                  <img className="icon166" alt="" src="/icon25.svg" />
                </div>
              </a>
              <div className="iconbutton13">
                <div className="youtube-logo">
                  <img className="icon166" alt="" src="/icon26.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-2020">
            Copyright © 2020, Azion Technologies, Inc. or its affiliates. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
