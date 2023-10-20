import { SxProps, Theme } from "@mui/material"
import IRootConsumer from "../../../../../consumer/root-consumer/root-consumer.model";


const tabSearch = (root: IRootConsumer) => {
    
    const props: SxProps<Theme>  = {
        //prop
        boxSearch:{
            height: "44px",
            minWidth: "260px",
            padding: "0px 20px",
            borderRadius: "50px",
            background: root.themes?.getModeColor?.("mauBoxSearch")
        }
    }
    return props
}

export default tabSearch


const searchPlaceholderColor = (root: IRootConsumer) => {
    var content: SxProps<Theme> = {}

    content = {
        color: root.themes?.getModeColor?.("color"),
        "&:placeholder": {
            color: root.themes?.getModeColor?.("colorToogle")
        }
    }

    return content
}

export {searchPlaceholderColor}