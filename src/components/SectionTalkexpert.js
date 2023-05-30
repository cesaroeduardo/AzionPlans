import { useCallback } from "react";
import "./SectionTalkexpert.css";
const SectionTalkexpert = () => {
  const onButtonSecondary2Click = useCallback(() => {
    window.location.href = "https://www.azion.com/pt-br/contate-vendas/";
  }, []);

  return (
    <div className="section-talkexpert">
      <div className="content13">
        <div className="badge4">
          <div className="badge-child1" />
          <b className="b4">2</b>
        </div>
        <div className="tagline2">SAVE WHEN YOU COMMIT</div>
        <div className="text351">
          <div className="title20">
            Savings plans help you lock in even better rates
          </div>
          <div className="description82">
            With a Savings Plan, you qualify for even greater discounts by
            committing to a consistent amount of usage for a 1-, 2-, or 3-year
            term. Savings Plans provide you the flexibility to use the Azion
            products that best suit your needs while reducing your costs by up
            to 78%.
          </div>
        </div>
        <div className="button-secondary1" onClick={onButtonSecondary2Click}>
          <div className="label11">talk to an expert</div>
          <img className="icon117" alt="" src="/vector.svg" />
        </div>
      </div>
      <div className="ilustration-chart">
        <div className="div5">2</div>
        <div className="div6">3</div>
        <div className="div7">4</div>
        <div className="div8">5</div>
        <div className="div9">1</div>
        <div className="div10">0</div>
        <img className="ilustration-chart-child" alt="" src="/group-47.svg" />
        <div className="traffic">Traffic</div>
        <div className="cost">Cost</div>
        <div className="revenue">Revenue</div>
        <img className="lines-icon" alt="" src="/lines.svg" />
      </div>
    </div>
  );
};

export default SectionTalkexpert;
