import { SxProps, Theme } from "@mui/material";
import IRootConsumer from "../../../../../../../consumer/root-consumer/root-consumer.model";

const hintLogin = (root: IRootConsumer | null) => {
  const props: SxProps<Theme> = {
    //props
    hintlogin: {},
    divider: {
      background: root?.themes?.getModeColor?.("colorToogleMid"),
      width: "100%",
      marginTop: 2,
      marginBottom: 2,
    },
    textHint: {
      fontSize: 16,
      color: root?.themes?.getModeColor?.("colorToogle"),
    },
    loginButton: {
      marginTop: 3,
      borderColor: root?.themes?.getPrimaryColor(),
      color: root?.themes?.getPrimaryColor(),
      textTransform: "capitalize",
      fontSize: 20,
      "&:hover, &:focus": {
        borderColor: root?.themes?.getPrimaryColor(),
      },
    },
  };
  return props;
};

export default hintLogin;
