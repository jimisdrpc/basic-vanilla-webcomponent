const templateString = `<div id="mydiv" name="mydiv"><p>Hello world 2!</p></div>`;
const template = document.createElement("template");
template.innerHTML = templateString;

export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("my-component", MyComponent);
