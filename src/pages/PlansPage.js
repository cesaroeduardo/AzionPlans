import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";
import SectionSignup from "../components/SectionSignup";
import SectionTalkexpert from "../components/SectionTalkexpert";
import SectionPricing from "../components/SectionPricing";
import SectionFeatures from "../components/SectionFeatures";
import "./PlansPage.css";
const PlansPage = () => {
  const navigate = useNavigate();

  const onActionAreaClick = useCallback(() => {
    navigate("/pricing-page");
  }, [navigate]);

  return (
    <div className="plans-page">
      <SectionBanner
        title="How do you pay for Azion?"
        description="Our usage-based pricing model gives you the freedom to customize your choice for more efficiency paying for what you use"
        tagline="pricing model"
        onActionAreaClick={onActionAreaClick}
        icon="16x16x262441279"
      />
      <SectionSignup />
      <SectionTalkexpert />
      <SectionPricing />
      <SectionFeatures />
    </div>
  );
};

export default PlansPage;
