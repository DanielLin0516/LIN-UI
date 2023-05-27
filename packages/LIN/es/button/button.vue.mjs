import { defineComponent as t, openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "./style/index.css";
const s = { class: "ea-button" }, _ = t({
  name: "LButton"
}), p = /* @__PURE__ */ t({
  ..._,
  setup(a) {
    return (e, c) => (o(), n("button", s, [
      r(e.$slots, "default")
    ]));
  }
});
export {
  p as default
};
