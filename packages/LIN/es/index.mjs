import * as o from "./components.mjs";
import { Button as f } from "./button/index.mjs";
import { LIcon as p } from "./icon/index.mjs";
const n = {
  install: (t) => {
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  f as Button,
  p as LIcon,
  n as default
};
