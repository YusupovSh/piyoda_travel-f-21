import React from "react";
import bluebanner from "../../assets/icons/bluebanner.png";
import { FacebookOutlined, InstagramOutlined, SendOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Bluebanner() {
  return (
    <div className="bluebanner">
        <div className="container">
          <div className="bluebanner-row">
            <div className="bluebanner__left">
              <span className="bluebanner__left-border"></span>
                <h1 className="bluebanner__left-title">Хотите получать уникальные предложения?</h1>
                <p className="bluebanner__left-text">Следите за нами в социальных сетях.</p>
                <div className="bluebanner__left-wrap">
                  <NavLink to='https://t.me/yusupov_0305'>
                    <SendOutlined className="bluebanner__left-icon"/>
                  </NavLink>
                  <NavLink to='https://www.instagram.com/yusupov_0305/'>
                    <InstagramOutlined  className="bluebanner__left-icon" />
                  </NavLink>
                  <NavLink to='/tour'>
                    <FacebookOutlined   className="bluebanner__left-icon"/>
                  </NavLink>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Bluebanner;
