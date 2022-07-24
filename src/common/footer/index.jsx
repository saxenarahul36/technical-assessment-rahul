import React from "react";
import { FooterWrper } from "./ui";
const Footer = () => {
  return (
    <FooterWrper>
      <div class="text">
        <span>Copyright © Years, All Right Reserved Name</span>
      </div>
      <div>
        <div class="copyright-menu">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Feadback</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrper>
  );
};

export default Footer;
