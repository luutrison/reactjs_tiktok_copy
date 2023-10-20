import _gdColor, {
  _gdMode,
} from "../../../Module/underscore/components/giaodien/config/color.config";
import _lang from "../../../Module/underscore/components/languages/config/languages.config";
import LayoutHome from "../../main/layout-home/layout-home";
import LayoutNone from "../../main/layout-none/layout-none";
import IThemesConfig, { ILayoutConfig, IObjectCheck } from "./layout.model";

const _gdLayout = {
  _home: LayoutHome,
  _none: LayoutNone,
};

const themesName = "themes";

export default _gdLayout;

const settingMacdinh: IThemesConfig = {
  themes: {
    mode: "normal",
    color: "primaryColor",
  },
  location: {
    language: "vi",
    time: "timestamp",
  },
};

const _layoutConfig:ILayoutConfig = {
  headHeight: "60px"
}



const ObjectCheck = (x: IObjectCheck) => {
  //[themes, location]
  //obj.themes
  //history -- themes/color
  //obj.themes.color
  //subitem -- [color, mode] > 0
  //[] == 0
  //[] == 0
  //

  const loop = (obj: any, history?: Array<any>, subitem?: Array<any>) => {
    //get keyof object
    if (typeof obj == "object" && Object.keys(obj).length > 0) {
      if (!subitem) {
        subitem = Object.keys(obj);
      }
      if (!history) {
        history = [];
      }

      //sub item loop
      var currentHistory = obj;
      var compareHistory: any = x.objCompare;

      const prevert = () => {
        history?.pop();
        currentHistory = obj;
        compareHistory = x.objCompare;
      };

      subitem.forEach((item) => {
        history?.push(item);

        history?.forEach((point) => {
          currentHistory = currentHistory[point];
          compareHistory = compareHistory[point];
        });

        if (!compareHistory) {
          var cursor = obj;
          history?.forEach((p, i) => {
            if (i + 1 == history?.length) {
              delete cursor[p];
            } else {
              cursor = cursor[p];
            }
          });
          x.isMaching = false;
        }

        if (
          typeof currentHistory == "object" &&
          Object.keys(currentHistory).length > 0
        ) {
          loop(obj, history, Object.keys(currentHistory));
        } else if (
          typeof currentHistory[item] == "object" &&
          Object.keys(currentHistory[item]).length > 0
        ) {
          loop(obj, history, Object.keys(currentHistory[item]));
        } else {
          prevert();
          return false;
        }

        prevert();
      });
    }
  };

  loop(x.obj);

  if (x.isMaching == false) {
    x.notMatchingEvent({ ...x.objCompare, ...x.obj });
  }

  return { ...x.objCompare, ...x.obj };
};

const themesConfig = (): IThemesConfig => {
  var currentSetting: IThemesConfig = settingMacdinh;
  var isMat = true;

  if (localStorage) {
    const setting = localStorage.getItem(themesName);
    if (!setting) {
      localStorage.setItem(themesName, JSON.stringify(settingMacdinh));
    } else {
      try {
        currentSetting = JSON.parse(localStorage.getItem(themesName) as any);
      } catch (error) {
        isMat = false;
      }

      //is key

      if (currentSetting) {
        currentSetting = ObjectCheck({
          obj: currentSetting,
          objCompare: settingMacdinh,
          isMaching: isMat,
          notMatchingEvent: (obj: any) => {
            localStorage.setItem(themesName, JSON.stringify(obj));
          },
        });
      }
    }
  }
  return currentSetting;
};

interface IAbleChange {
  mode?: keyof typeof _gdMode;
  lang?: keyof typeof _lang;
  color?: keyof typeof _gdColor;
}

const themesChangeLocal = (setting: IAbleChange) => {
  try {
    var settingCurrent: IThemesConfig = settingMacdinh;

    if (localStorage) {
      settingCurrent = JSON.parse(localStorage.getItem(themesName) as any);
      settingCurrent = { ...settingMacdinh, ...settingCurrent };
    }

    setting.mode && (settingCurrent.themes.mode = setting.mode);
    setting.color && (settingCurrent.themes.color = setting.color);
    setting.lang && (settingCurrent.location.language = setting.lang);

    if (localStorage) {
      localStorage.setItem(themesName, JSON.stringify(settingCurrent));
    }
  } catch (error) {
    console.error(error);
  }
};

export { themesConfig, themesChangeLocal, _layoutConfig };
