import themeConfig from "../../../../../../Root/config/config.theme";
import { SxProps, Theme } from "@mui/material";
import IRootConsumer from "../../../../../consumer/root-consumer/root-consumer.model";

const spacerVertical = (size: number | any) => {
  size = size ? size : 5;
  const props: SxProps<Theme> = {
    //props
    paddingTop: size,
  };
  return props;
};

export default spacerVertical;
