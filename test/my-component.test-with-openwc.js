import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';
import { MyComponent } from "../src/my-component.js";

describe("simple test", () => {
  it("first test", async () => {
    const { shadowRoot } = await TestUtils.render('my-component');
    expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
  });

});

