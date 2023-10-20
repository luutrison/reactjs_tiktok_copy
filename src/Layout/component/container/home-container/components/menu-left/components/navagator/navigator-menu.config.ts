import { SxProps, Theme } from "@mui/material";
import { _gdProps } from "../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import IRootConsumer from "../../../../../../../consumer/root-consumer/root-consumer.model";

const navigatorMenu = (root: IRootConsumer | null) => {
  const sameprops: SxProps<Theme> = {
    itemMenu: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      zIndex: 1,
      color: "white",
      padding: "0px 20px",
      borderRadius: "50px",
      "& svg": {
        marginRight: "5px",
      },
    },
  };

  const props: SxProps<Theme> = {
    //props
    iconButton: {
      justifyContent: "start",
      textTransform: "none",
      fontSize: 20,
      "& svg": {
        fontSize: "30px !important",
      },
    },
    activeMenu: {
      backgroundColor: root?.themes?.getPrimaryColor(),
      ...(sameprops.itemMenu as any),
    },
    menuitem: {
      backgroundColor: root?.themes?.getModeColor?.("colorToogleMid"),
      filter: "grayscale(1)",
      ...(sameprops.itemMenu as any),
    },
  };
  return props;
};

export default navigatorMenu;

const stateActiveMenu = (root: IRootConsumer, state: any, key: string) => {
  var className = "";
  if (root.themes?.mode == "dark") {
    if (root.themes.primaryColor == "dark") {
      if (state.currentCate == key) {
        className = _gdProps.colorMd;
      } else {
        className = _gdProps.colorPrimary60;
      }
    } else {
      if (state.currentCate == key) {
        className = _gdProps.colorPrimary70;
      } else {
        className = _gdProps.colorMd;
      }
    }
  } else {
    if (root.themes?.primaryColor == "dark") {
      if (state.currentCate == key) {
        className = _gdProps.colorMd;
      } else {
        className = _gdProps.blurColor;
      }
    } else {
      if (state.currentCate == key) {
        className = _gdProps.colorPrimary60;
      } else {
        className = _gdProps.colorMd;
      }
    }
  }
  return className;
};

const activeDecoration = (root: IRootConsumer, state: any, key: string) => {
  const backgroundColor = () => {
    var background: any = "";
    if (root.themes?.primaryColor == "dark") {
      background = root.themes.getModeColor?.("color");
    } else {
      background = root.themes?.getPrimaryColor();
    }

    return background;
  };

  var activeDecore: SxProps<Theme> = {};
  if (state.currentCate == key) {
    activeDecore = {
      "&:before": {
        content: '""',
        position: "absolute",
        right: "10px",
        top: "calc(50% - 7px)",
        height: "14px",
        width: "14px",
        borderRadius: "100%",
        background: backgroundColor(),
      },
      "&:after": {
        content: '""',
        position: "absolute",
        right: "10px",
        top: "calc(50% - 1px)",
        height: "2px",
        width: "calc(100% - 60px)",
        borderRadius: "100%",
        background: backgroundColor(),
      },
    };
  }
  return activeDecore;
};

export { stateActiveMenu, activeDecoration };
