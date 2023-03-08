import { LitElement, html, customElement, state } from "lit-element";

import "./plotly-bar-elem/plotly-bar-elem";

import { gameUsed, gameMode, gameCreateTime, gameSound } from "./utils";

@customElement("app-x")
export class AppX extends LitElement {
  @state()
  private gamesUsedData: any = gameUsed();

  @state()
  private gameModeData: any = gameMode();

  @state()
  private gameCreateTimeData: any = gameCreateTime();

  @state()
  private gameSoundData: any = gameSound();

  render() {
    const style = html` <style>
      .container {
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;
        flex-direction: column;
        font-family: "Gloria Hallelujah", cursive;
      }
    </style>`;

    return html`
      ${style}
      <plotly-bar-elem
        graphData=${`${JSON.stringify(this.gamesUsedData.data)}`}
        graphTitle=${this.gamesUsedData.title}
      ></plotly-bar-elem>
      <plotly-bar-elem
        graphData=${`${JSON.stringify(this.gameModeData.data)}`}
        graphTitle=${this.gameModeData.title}
      ></plotly-bar-elem>
      <plotly-bar-elem
        graphData=${`${JSON.stringify(this.gameCreateTimeData.data)}`}
        graphTitle=${this.gameCreateTimeData.title}
      ></plotly-bar-elem>
      <plotly-bar-elem
        graphData=${`${JSON.stringify(this.gameSoundData.data)}`}
        graphTitle=${this.gameSoundData.title}
      ></plotly-bar-elem>
    `;
  }
}
