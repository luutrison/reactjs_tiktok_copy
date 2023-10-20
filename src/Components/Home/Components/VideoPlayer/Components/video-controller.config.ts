import { SxProps, Theme } from "@mui/material"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import IRootConsumer from "../../../../../Layout/consumer/root-consumer/root-consumer.model"


const videoController = (root: IRootConsumer | null) => {


    const superProps: SxProps<Theme>  = {
        sliderDefault: {
            "&:hover .MuiSlider-thumb, &:focus .MuiSlider-thumb": {
                boxShadow: "0px 0px 5px white !important"
            }
        }
    }
    
    const props: SxProps<Theme>  = {
        //props
        videoController: {
            position: "absolute",
            bottom: 0,
            width: "calc(100% - 40px)",
            display: "flex",
            justifyContent: "space-between"
        },
        timeLine:{
            width: "calc(100% - 85px)"
        },
        boxContent: {
            display: "flex",
            justifyContent: "center"
        },
        countTime:{
            fontSize: 12,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            paddingBottom: "5px",
            paddingLeft: "5px",
            color: "white",
            textShadow: "0px 0px 1px black",
            whiteSpace: "nowrap"
        },
        videoTimeSlider:{
            color: "white",
            ...superProps.sliderDefault as any
        },
        coltrolTray: {
            position: "absolute",
            width: "calc(100% - 78px)",
            bottom: "30px",
            justifyContent: "space-between",
            color: "white"
        },
        volumePlace: {
            height: "80px",
            position: "relative",
            right: "-5px",
            marginBottom: 4,
            background: "#00000042",
            padding: "10px 5px",
            borderRadius: "40px"
        },
        playPlace: {
            position: "absolute",
            bottom: 0,
            cursor: "pointer"
        },
        volumeSlider: {
            color: "white",
            ...superProps.sliderDefault as any
        },
        volumeIcon:{
            position: "absolute",
            bottom: 0,
            right: 0,
            cursor: "pointer"
        }
    }
    return props
}

export default videoController
