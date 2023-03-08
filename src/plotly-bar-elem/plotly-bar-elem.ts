import { LitElement, html, customElement, property } from "lit-element";
import Plotly from "plotly.js-dist-min";

@customElement("plotly-bar-elem")
export class PlotlyBarElem extends LitElement {
  @property({ type: Array }) graphData = [];
  @property({ type: String }) graphTitle = "1";

  firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    //this.firstUpdated(_changedProperties);
    Plotly.newPlot(
      this.shadowRoot?.getElementById("plotly--node") as Plotly.Root,
      this.graphData
    );
  }

  render() {
    const style = html` <style>
      :host {
        margin-bottom: 66px;
      }
      .plotly--container {
        min-height: 100px;
        max-width: 80%;
        p {
          margin: 0;
        }
      }
    </style>`;

    return html`
      ${style}
      <div class="plotly--container">
        <p>${`${this.graphTitle}`}</p>
        <div class="plotly--bar" id="plotly--node"></div>
      </div>
    `;
  }
}
