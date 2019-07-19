//TestUtils copied from https://medium.com/@pietmichal/how-to-test-a-web-component-b5d64d5e8bb0
import { TestUtils } from "./test-utils.js";
import "../src/my-component.js";
describe("just test if it was rendered", () => {
  /*
  let element, shadowRoot;
  beforeEach(() => {
    element = document.createElement("my-component");
    shadowRoot = element.shadowRoot;
    document.body.append(element);
  });
  */
  it("first try (using TestUtils)", async () => {
    const { shadowRoot } = await TestUtils.render("my-component");
    expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
  });

  it("second try (using fixture)", async () => {
    const el = await fixture("<my-component></my-component>");
    expect(el.success).to.be.false;
    //expect(el.querySelector("mydiv")).toBeTruthy();
  });
  /*
  in ChromeDebug: document.querySelector('my-component').shadowRoot.getElementById('mydiv'));
  });
  */
});
