import { SxProps, Theme } from "@mui/material";
import { _gdProps } from "../../../../../../Module/underscore/components/giaodien/config/color.config";
import themeConfig from "../../../../../../Root/config/config.theme";
import IRootConsumer from "../../../../../consumer/root-consumer/root-consumer.model";
const menuLeft = (root: IRootConsumer) => {
  const props: SxProps<Theme> = {
    //prop
    containerMenuLeft: {
      height: `calc(100vh - ${themeConfig.headerHeight})`,
      top: themeConfig.headerHeight,
      position: "sticky",
    },
   
  };
  return props;
};

export default menuLeft;

const setActive = (state: any, itemActive: any) => {
  state({
    activeItem: itemActive,
  });
};

