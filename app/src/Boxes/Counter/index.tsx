import React from 'react';
import './style.css';
import { Route, withRouter, RouteComponentProps } from "react-router-dom";

import discordIcon from "./Assets/discord.svg"
import telegramIcon from "./Assets/telegram.svg"
import youtubeIcon from "./Assets/youtube.svg"
import twittIcon from "./Assets/twitt.svg"

function Counter() {

  const [showBox, setBox] = React.useState<boolean>(false)

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <span>THE</span>
          <span>SECRET BOX</span>
        </div>

        <div className="LinksContainer">
          <div><a href="#">CLI Plugins</a></div>
          <div className="EssentialLinksTitle">
            <div>Essential Links</div>
            <div className="EssentialLinksContainer">
              <div><a href="#">Core Docs</a></div>
              <div><a href="#">Forum</a></div>
              <div><a href="#">News</a></div>
            </div>
          </div>
          <div><a href="#">Ecosystem</a></div>
        </div>

        <div className="Footer">
          <div className="SocialContailer">
            <a href="#"><img width="20px" src={discordIcon} /></a>
            <a href="#"><img width="20px" src={telegramIcon} /></a>
            <a href="#"><img width="20px" src={youtubeIcon} /></a>
            <a href="#"><img width="20px" src={twittIcon} /></a>
          </div>
          <div>By Secret Network</div>

        </div>

        <div className="glower" onClick={() => setBox(true)}></div>
      </div>

      {showBox && <div className="BoxOverlay">
        <div className="BoxContainer">
          <span>This counter goes here</span>
          <span className="BoxClose" onClick={() => setBox(false)}>x</span>
        </div>
      </div>}
    </div>
  );
}

export default withRouter(Counter);
