import { html, fixture, expect } from "@open-wc/testing";
import { MyComponent } from "../src/my-component.js";

describe("simple test", () => {
  it("first test", async () => {
    const el = await fixture("<my-component></my-component>");

    let index = el.innerText.indexOf("Hello");
    expect(index).to.equal(1);
  });

  it("second test", async () => {
    const el = await fixture(html`
      <my-component></my-component>
    `);
    expect(el.querySelector("mydiv"));
  });
});
