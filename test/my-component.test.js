import { MyComponent } from "../src/my-component.js";
import { TestUtils } from "./test-utils.js";

describe("simple test", () => {
  it("first test", async () => {
    const { shadowRoot } = await TestUtils.render(MyComponent);
    //expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
  });
});
/*
describe("just test if it was rendered()", () => {
  it("try find div", () => {
    const component = new MyComponent();
    expect(component.document.querySelector('my-component').shadowRoot.getElementById('mydiv'));
  });
});
*/