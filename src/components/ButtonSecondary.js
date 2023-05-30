import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonSecondary.css";
const ButtonSecondary = ({
  label = "button secondary",
  buttonSecondaryBoxSizing,
  secondaryButtonDisplay,
  buttonSecondaryBorder,
  secondaryButtonColor,
  icon,
}) => {
  const buttonSecondaryStyle = useMemo(() => {
    return {
      boxSizing: buttonSecondaryBoxSizing,
      border: buttonSecondaryBorder,
    };
  }, [buttonSecondaryBoxSizing, buttonSecondaryBorder]);

  const labelStyle = useMemo(() => {
    return {
      display: secondaryButtonDisplay,
      color: secondaryButtonColor,
    };
  }, [secondaryButtonDisplay, secondaryButtonColor]);

  const navigate = useNavigate();

  const onButtonSecondaryClick = useCallback(() => {
    navigate("/pricing-page");
  }, [navigate]);

  return (
    <div
      className="button-secondary"
      onClick={onButtonSecondaryClick}
      style={buttonSecondaryStyle}
    >
      <div className="label10" style={labelStyle}>
        {label}
      </div>
      <img className="icon116" alt="" src="/icon.svg" />
    </div>
  );
};

export default ButtonSecondary;
