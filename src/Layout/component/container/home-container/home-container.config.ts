import themeConfig from "../../../../Root/config/config.theme";


import { SxProps, Theme } from "@mui/material"
import IRootConsumer from "../../../consumer/root-consumer/root-consumer.model";

const homeContainer = (root: IRootConsumer | null) => {
    
    const props: SxProps<Theme>  = {
        //props
        containerHome: {
            height: "100vh"
        },
        mainContainer: {
            marginTop: themeConfig.headerHeight
        }
    }
    return props
}

export default homeContainer