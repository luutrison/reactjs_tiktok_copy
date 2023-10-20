import mauma from "../hinhthuc/mauma.module.scss";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const _gdColor = {
  primaryColor: {
    css: mauma.primary_md,
    render: "#0da865",
  },
  lightblue: {
    css: mauma.primary_lightBlue,
    render: "#0d8ea8",
  },
  goodred: {
    css: mauma.primary_goodRed,
    render: "#a80d31",
  },
  dark: {
    css: mauma.primary_dark,
    render: "#404040",
  },
};

interface ic_renderGdMode{
  color: string,
  backgroundTop: string,
  backgroundMid: string,
  backgroundBot: string,
  shadowColor: string
} 

const _gdMode = {
  normal: {
    css: mauma.normal,
    name: "che_do_sang",
    icon: LightModeIcon,
    iconic: ():any=> {
      return import("@mui/icons-material/LightMode")
    },
    render: {
      color: "rgb(29, 29, 29)",
      colorTop: "rgb(255, 255, 255)",
      colorMid: "rgb(232, 232, 232)",
      colorBot: "rgb(222, 222, 222)",
      menuBackground:"rgb(250, 250, 250)",
      shadowColor: "#d1d1d1",
      mauHover: "#e6e6e6",
      colorToogle: "#969696",
      colorToogleMid: "#cccccc",
      mauBorder: "#b5b3b3",
      mauBoxSearch: "#e8e8e8"
    },
  },
  dark: {
    css: mauma.dark,
    name: "che_do_toi",
    icon: DarkModeIcon,
    iconic: ():any=> {
      return import("@mui/icons-material/DarkMode")
    },
    render: {
      color: "rgb(251, 251, 251)",
      colorTop: "rgb(8, 8, 8)",
      colorMid: "rgb(30, 30, 30)",
      colorBot: "rgb(50, 50, 50)",
      menuBackground:"rgb(32, 32, 32)",
      shadowColor: "rgb(0, 0, 0)",
      mauHover: "#4d4d4d",
      colorToogle: "#969696",
      colorToogleMid: "#323232",
      mauBorder: "#000000",
      mauBoxSearch: "#292929"
    },
  },
};

const copyGenerateProps = {
  
    colorPrimary100: mauma.colorPrimary100,
    colorPrimary90: mauma.colorPrimary90,
    colorPrimary80: mauma.colorPrimary80,
    colorPrimary70: mauma.colorPrimary70,
    colorPrimary60: mauma.colorPrimary60,
    colorPrimary50: mauma.colorPrimary50,
    colorPrimary40: mauma.colorPrimary40,
    colorPrimary30: mauma.colorPrimary30,
    colorPrimary20: mauma.colorPrimary20,
    colorPrimary10: mauma.colorPrimary10,
    backgroundPrimary100: mauma.backgroundPrimary100,
    backgroundPrimary90: mauma.backgroundPrimary90,
    backgroundPrimary80: mauma.backgroundPrimary80,
    backgroundPrimary70: mauma.backgroundPrimary70,
    backgroundPrimary60: mauma.backgroundPrimary60,
    backgroundPrimary50: mauma.backgroundPrimary50,
    backgroundPrimary40: mauma.backgroundPrimary40,
    backgroundPrimary30: mauma.backgroundPrimary30,
    backgroundPrimary20: mauma.backgroundPrimary20,
    backgroundPrimary10: mauma.backgroundPrimary10,
    boxshadowPrimary100: mauma.boxshadowPrimary100,
    boxshadowPrimary90: mauma.boxshadowPrimary90,
    boxshadowPrimary80: mauma.boxshadowPrimary80,
    boxshadowPrimary70: mauma.boxshadowPrimary70,
    boxshadowPrimary60: mauma.boxshadowPrimary60,
    boxshadowPrimary50: mauma.boxshadowPrimary50,
    boxshadowPrimary40: mauma.boxshadowPrimary40,
    boxshadowPrimary30: mauma.boxshadowPrimary30,
    boxshadowPrimary20: mauma.boxshadowPrimary20,
    boxshadowPrimary10: mauma.boxshadowPrimary10,
    borderPrimary100: mauma.borderPrimary100,
    borderPrimary90: mauma.borderPrimary90,
    borderPrimary80: mauma.borderPrimary80,
    borderPrimary70: mauma.borderPrimary70,
    borderPrimary60: mauma.borderPrimary60,
    borderPrimary50: mauma.borderPrimary50,
    borderPrimary40: mauma.borderPrimary40,
    borderPrimary30: mauma.borderPrimary30,
    borderPrimary20: mauma.borderPrimary20,
    borderPrimary10: mauma.borderPrimary10,
    outlinePrimary100: mauma.outlinePrimary100,
    outlinePrimary90: mauma.outlinePrimary90,
    outlinePrimary80: mauma.outlinePrimary80,
    outlinePrimary70: mauma.outlinePrimary70,
    outlinePrimary60: mauma.outlinePrimary60,
    outlinePrimary50: mauma.outlinePrimary50,
    outlinePrimary40: mauma.outlinePrimary40,
    outlinePrimary30: mauma.outlinePrimary30,
    outlinePrimary20: mauma.outlinePrimary20,
    outlinePrimary10: mauma.outlinePrimary10,
}

const sameProp = {

  colorBlack: mauma.colorBlack,
  colorWhite: mauma.colorWhite,

  invertColor: mauma.invertColor,
  colorMd: mauma.colorMd,
  blurBackground: mauma.blurBackground,
 
  radiusMd: mauma.radiusMd,
  boxshadowSlim: mauma.boxshadowSlim,
  blurColor: mauma.blurColor,
  background: mauma.background,
  color: mauma.color,
  backgroundTop: mauma.backgroundTop,
  backgroundMid: mauma.backgroundMid,
  backgroundBot: mauma.backgroundBot,
  inputPrimary: mauma.inputPrimary,
  menuBackground: mauma.menuBackground,
  normalText: mauma.normalText
}

//#region Generate Color Map
const percentOpacity = [
  "100",
  "90",
  "80",
  "70",
  "60",
  "50",
  "40",
  "30",
  "20",
  "10",
];

const propContent = [
  "colorPrimary",
  "backgroundPrimary",
  "boxshadowPrimary",
  "borderPrimary",
  "outlinePrimary",
  "inputPrimary",
];


const mapThing = () => {
  var object = {};
  propContent.forEach((prop) => {
      percentOpacity.forEach((percent) => {
        var name = prop + percent;
        var temp: { [k: string]: any } = {};
        temp[name] = `mauma.${name}`;
        object = {...object, ...temp}
      });
  });
  console.log(object)
  return object;
};

//#endregion

const _gdProps = {
  ...copyGenerateProps,
  ...sameProp

};

export default _gdColor;
export { _gdMode, _gdProps };
