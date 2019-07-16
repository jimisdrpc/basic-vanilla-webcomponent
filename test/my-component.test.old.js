import "../src/my-webcomponent.js";
describe("simplest test", () => {
  let element, shadowRoot;
  beforeEach(() => {
    element = document.createElement("my-component");
    shadowRoot = element.shadowRoot;
    document.body.append(element);
  });

  describe("init", () => {
    /*it('should add a div under the shadow root', () => {
            expect(shadowRoot.querySelector('mydiv')).toBeTruthy();
        });*/

    it("should add a div under the shadow root", async () => {
      const el = await fixture("<my-component></my-component>");

      expect(el.querySelector("mydiv")).toBeTruthy();
    });
  });
});
