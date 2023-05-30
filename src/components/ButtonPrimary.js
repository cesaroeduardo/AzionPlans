import { useMemo, useCallback } from "react";
import "./ButtonPrimary.css";
const ButtonPrimary = ({
  label = "button primary",
  buttonPrimaryBorder,
  buttonPrimaryBackgroundColor,
  icon,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      border: buttonPrimaryBorder,
      backgroundColor: buttonPrimaryBackgroundColor,
    };
  }, [buttonPrimaryBorder, buttonPrimaryBackgroundColor]);

  const onButtonPrimaryClick = useCallback(() => {
    window.location.href = "https://manager.azion.com/signup/";
  }, []);

  return (
    <button
      className="button-primary"
      onClick={onButtonPrimaryClick}
      style={buttonPrimaryStyle}
    >
      <div className="label9">{label}</div>
      <img className="icon115" alt="" src="/vector.svg" />
    </button>
  );
};

export default ButtonPrimary;
