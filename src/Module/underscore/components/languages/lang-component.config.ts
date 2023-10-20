import { SxProps, Theme } from "@mui/material"
import IRootConsumer from "../../../../Layout/consumer/root-consumer/root-consumer.model"


const langComponent = (root: IRootConsumer | null) => {
    
    const props: SxProps<Theme>  = {
        //props
        "& .simplebar-scrollbar:before": {
            
        }
    }
    return props
}

export default langComponent