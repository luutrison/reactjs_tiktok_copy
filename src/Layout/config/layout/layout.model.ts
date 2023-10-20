import _gdColor, { _gdMode } from "../../../Module/underscore/components/giaodien/config/color.config"
import _lang from "../../../Module/underscore/components/languages/config/languages.config"

interface IThemesConfig{
    location:{
        language: keyof typeof _lang,
        time: string
    },
    themes:{
        mode: keyof typeof _gdMode,
        color: keyof typeof _gdColor
    }
}

interface IObjectCheck {
    obj: IThemesConfig;
    objCompare: IThemesConfig;
    keyArray?: Array<any>;
    notMatchingEvent?: any;
    isMaching?: boolean;
  }

  interface ILayoutConfig {
    headHeight: any
  }

export default IThemesConfig

export type {IObjectCheck, ILayoutConfig}