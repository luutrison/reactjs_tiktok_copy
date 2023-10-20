import _gdColor, { _gdMode } from "../Module/underscore/components/giaodien/config/color.config";
import _gdLayout from "./config/layout/layout.config";

interface IGiaodien {
  layout?: keyof typeof _gdLayout;
  setLayout?: any;
  mode?: keyof typeof _gdMode;
  setMode?: (x: keyof typeof _gdMode) => any;
  primaryColor?: keyof typeof _gdColor;
  setPrimaryColor?: (x: keyof typeof _gdColor) => void;
  getModeColor?: (x: keyof typeof _gdMode.normal.render) => string;
  getPrimaryColor?: any;
}

export default IGiaodien;
