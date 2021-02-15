import React from 'react';
import './App.css';
import { Route, withRouter, RouteComponentProps } from "react-router-dom";

import discordIcon from "./Assets/discord.svg"
import telegramIcon from "./Assets/telegram.svg"
import youtubeIcon from "./Assets/youtube.svg"
import twittIcon from "./Assets/twitt.svg"
import logoIcon from "./Assets/logo.svg"

interface MatchParams {
  type: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

function App() {

  return (
    <div className="App">

      <div className="Header">
        <img src={logoIcon} width={48} height={48} />
        <div className="LinksContainer">
          <div><a href="#">Boxes</a></div>
          <div><a href="#">SCG Foundation</a></div>
          <div><a href="#">About</a></div>
          {/* <div className="EssentialLinksTitle">
            <div>Essential Links</div>
            <div className="EssentialLinksContainer">
              <div><a href="#">Core Docs</a></div>
              <div><a href="#">Forum</a></div>
              <div><a href="#">News</a></div>
            </div>
          </div> */}
          <div><a href="#">Docs</a></div>
        </div>

        <div className="SocialContailer">
          <a href="#"><img width="20px" src={discordIcon} /></a>
          <a href="#"><img width="20px" src={telegramIcon} /></a>
          <a href="#"><img width="20px" src={youtubeIcon} /></a>
          <a href="#"><img width="20px" height={17} src={twittIcon} /></a>
        </div>

      </div>

      <div className="Container">

      </div>

    </div>
  );
}

export default withRouter(App);
