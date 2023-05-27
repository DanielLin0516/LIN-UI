import delPath from "../utils/delPath";
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from "../utils/path";
const sass = require('gulp-sass')(require('sass'));
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

export const removeDist = () => {
  return delPath(`${pkgPath}/LIN`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/LIN/lib`))
    .pipe(dest(`${pkgPath}/LIN/es`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);

