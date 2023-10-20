import { SxProps, Theme } from "@mui/material";
import IRootConsumer from "../../../../../Layout/consumer/root-consumer/root-consumer.model";

const LoginPanelConfig = (root: IRootConsumer | null) => {
  const props: SxProps<Theme> = {
    //props
    iconButtonChoice: {
      position: "absolute",
      left: "10px",
      fontSize: "30px",
    },
    buttonChoice: {
      borderRadius: 0,
      height: 50,
      borderColor: root?.themes?.getModeColor?.("colorToogle"),
      color: root?.themes?.getModeColor?.("color"),
      "&:hover, &:focus": {
        borderColor: root?.themes?.getPrimaryColor(),
        color: root?.themes?.getPrimaryColor(),
      },
    },
    actionBar: {
      justifyContent: "center",
      borderTop: "solid 1px " + root?.themes?.getModeColor?.("colorToogleMid"),
      height: 50,
    },
    dialog: {
      maxHeight: "auto",
      background: root?.themes?.getModeColor?.("menuBackground"),
      color: root?.themes?.getModeColor?.("color"),
    },
    dialogTittle: {
      paddingBottom: 0,
      display: "flex",
      justifyContent: "end",
    },
    titleLogin: {
      fontSize: 30,
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
    },
  };
  return props;
};

export default LoginPanelConfig;
