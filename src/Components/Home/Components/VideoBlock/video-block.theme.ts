
import { SxProps, Theme } from "@mui/material"
import IRootConsumer from "../../../../Layout/consumer/root-consumer/root-consumer.model"


const videoBlock = (root: IRootConsumer | null) => {
    
    const props: SxProps<Theme>  = {
        //props
        videoBlock: {
            "& .videoBlockItem:not(:last-of-type)": {
              borderBottom: "solid 1px",
              paddingBottom: "30px",
            },
            "& .videoBlockItem:not(:first-of-type)": {
              paddingTop: "30px",
            },
          },
    }
    return props
}




const itemVideo = (root: IRootConsumer | null, itemName: string) => {

  var videoProp:any = {}

  videoProp[`& .${itemName}:not(:last-of-type)`] = {
    borderBottom: "solid 1px " + root?.themes?.getModeColor?.("colorToogleMid"),
    paddingBottom: "30px",
  }

  videoProp[`& .${itemName}:not(:first-of-type)`] = {
    marginTop: "15px",
  }
  
  const props: SxProps<Theme>  = {
    //props
   ...videoProp
  }

  return props
}

export  {itemVideo}


export default videoBlock
