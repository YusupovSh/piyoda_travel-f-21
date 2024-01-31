import React from "react";
import email from "../assets/icons/emailcontacts.svg";
import phone from "../assets/icons/phonecontacts.svg";
import location from "../assets/icons/locationcontacts.svg";
import telegram from "../assets/icons/telegramcontacts.svg";
import instagram from "../assets/icons/instragramcontacts.svg";
import facebook from "../assets/icons/facebookcontacts.svg";
import Bluebanner from "../components/sections/bluebanner";

function ContactsPage() {
  return (
    <div className="contacts">
      <div className="contacts-header">
        <h2>КОНТАКТЫ</h2>
      </div>

      <div className="container">
        <div className="contacts-row">
          <div className="contacts-about">
            <div className="contacts-about__left">
              <div className="contacts-about__item">
                <img src={phone} alt="" />
                +998 (91) 999 0525
              </div>
              <div className="contacts-about__item">
                <img src={phone} alt="" />
                +998 (93) 094 0305
              </div>
              <div className="contacts-about__item">
                <img src={email} alt="" />
                info@a-travelF21.uz
              </div>
            </div>
            <div className="contacts-about__right">
              <div className="contacts-about__item">
                <img src={location} alt="" />
                г. Ургенч <br /> Махтумкули 79
              </div>
              <div className="contacts-about__icons">
                <img src={telegram} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bluebanner />
    </div>
  );
}

export default ContactsPage;
