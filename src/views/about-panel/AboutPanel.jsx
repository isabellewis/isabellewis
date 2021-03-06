import React from "react";

import { ShortCopy } from "../../elements";
import { AboutWrapper, TextWrapper, ImageImg } from "./AboutPanel.style";

export const AboutPanel = () => (
  <AboutWrapper id="aboutPanel">
    <ImageImg src={require("../../assets/images/img3.jpg")} />
    <TextWrapper>
      <ShortCopy>
        Hello. I'm a web developer based in London. When I'm not ticking off
        JIRA tickets I enjoy playing guitar and travelling. I'll be adding my
        portfolio to this page so stay tuned.
      </ShortCopy>
    </TextWrapper>
  </AboutWrapper>
);
