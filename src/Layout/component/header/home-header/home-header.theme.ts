import themeConfig from "../../../../Root/config/config.theme";

import { SxProps, Theme } from "@mui/material"
import IRootConsumer from "../../../consumer/root-consumer/root-consumer.model";


const homeHeader = (root: IRootConsumer | null) => {
    
    const props: SxProps<Theme>  = {
        //props
        header: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: themeConfig.headerHeight,
            zIndex: themeConfig.layer,
          },
          name: {
            fontSize: "25px",
            fontWeight: "bold",
          },
    }
    return props
}

export default homeHeader