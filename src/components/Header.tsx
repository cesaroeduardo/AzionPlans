import { FunctionComponent, useCallback } from "react";
import "./Header.css";
const Header: FunctionComponent = () => {
  const onNavItemContainerClick = useCallback(() => {
    //TODO: [INSERIR] Aqui deve abrir o BigMenu de produtos.
  }, []);

  const onNavItemContainer1Click = useCallback(() => {
    //TODO: [INSERIR] Aqui deve abrir o BigMenu de produtos.
  }, []);

  return (
    <div className="header3">
      <div className="left1">
        <div className="azion-logo1">
          <img className="vector-icon2" alt="" src="/vector.svg" />
        </div>
        <div className="nav">
          <div className="navitem" onClick={onNavItemContainerClick}>
            <div className="navigation-item">Products</div>
            <div className="icon171">
              <div className="union">
                <div className="union-child" />
                <div className="union-item" />
              </div>
            </div>
          </div>
          <a className="navitem1">
            <div className="navigation-item">Pricing</div>
          </a>
          <a className="navitem1">
            <div className="navigation-item">About us</div>
          </a>
          <div className="navitem" onClick={onNavItemContainer1Click}>
            <div className="navigation-item">Resources</div>
            <div className="icon171">
              <div className="union">
                <div className="union-child" />
                <div className="union-item" />
              </div>
            </div>
          </div>
          <button className="navitem4">
            <div className="navigation-item4">Marketplace</div>
          </button>
        </div>
      </div>
      <div className="right">
        <a className="navitem1">
          <div className="navigation-item5">Sign in</div>
        </a>
        <div className="navitem6">
          <div className="navigation-item5">Contact</div>
        </div>
        <button className="btn-group">
          <div className="button8">
            <div className="label12">free account</div>
            <img className="icon173" alt="" src="/icon.svg" />
          </div>
          <div className="button9">
            <div className="label12">free account</div>
            <img className="icon173" alt="" src="/icon.svg" />
          </div>
          <div className="button10">
            <div className="label12">free account</div>
            <img className="icon173" alt="" src="/icon.svg" />
          </div>
        </button>
        <div className="menu">
          <div className="menu1">
            <img className="icon176" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="iconbutton14">
          <div className="search">
            <img className="icon177" alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className="iconbutton15">
          <div className="search">
            <img className="icon177" alt="" src="/icon3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
