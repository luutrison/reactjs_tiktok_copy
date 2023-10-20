
import _gdLayout from "../../Layout/config/layout/layout.config";
import CSSObject from "../../Root/model/config.model";
import _gdColor, { _gdMode } from "./components/giaodien/config/color.config";

interface ic_giaodien {}

type Languages<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

interface underscore {
  setElement: (x: CSSObject<CSSStyleDeclaration>) => any;
}



const setElement = (x: CSSObject<CSSStyleDeclaration>) => {
  if (Object.keys(x).length > 0) {
    for (const key in x) {
      if (Object.prototype.hasOwnProperty.call(x, key)) {
        const element = x[key as keyof typeof x];
        const html = document.querySelector("html")
        if (html) {
          html.style[key as any] = element as any
        }
      }
    }
  }
  
};


var _: underscore = {
  setElement : setElement
};



export default _;
