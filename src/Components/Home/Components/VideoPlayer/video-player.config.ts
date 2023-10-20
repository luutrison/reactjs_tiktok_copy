import { SxProps, Theme } from "@mui/material";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import IRootConsumer from "../../../../Layout/consumer/root-consumer/root-consumer.model";
import { IVideoPlayer } from "./video-player.model";


const avatarSize = 50
const buttonInteractiveSize = 48

const videoPlayer = (root: IRootConsumer) => {


  const themes: SxProps<Theme> = {


    buttonInteractive: {
      width: buttonInteractiveSize,
      height: buttonInteractiveSize,
      borderRadius: buttonInteractiveSize,
      padding: 0,
      minWidth: "inherit",
      marginBottom: 1,
      filter: "grayscale(1)",

      "&:hover": {
        filter: "grayscale(0)",
      },
    },

    videoPlayerProp: {
      position: "relative",
      flexWrap: "nowrap",
    },
    buttonFollow: {
      position: "absolute",
      top: 20,
      right: 0,
    },
    avatarUser: {
      width: avatarSize,
      height: avatarSize,
    },
    videoPlace: {
      maxWidth: "calc(100% - 100px)",
      position: "relative",
    },
    videoContent: {
      maxHeight: 568,
      maxWidth: "100%"
    },
    videoPlayer: {
      // maxHeight: "600px",
      // maxWidth: "100%",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0

    },
    rightContainer: {
      maxWidth: `calc(100% - ${avatarSize}px)`
    },
    videoInteractive: {
      width: 100,
    },
    nameUser: {
      fontSize: 18,
      fontWeight: 600,
      marginRight: 1,
    },
    videoPost: {
      borderRadius: 3,
      width: "100%",
      height: "100%",
      // background: root.themes?.getModeColor?.("colorToogle"),
      objectFit: "contain"
    },
    countNumber: {
      fontWeight: 600,
      fontSize: 14,
      color: root.themes?.getModeColor?.("color"),
    },
    interactivePlace: {
      justifyContent: "start",
      display: "flex",
    },
    toolTipOptions: {
      PopperProps: {
        sx: {
          "& div:only-child": {
            background: root?.themes?.getPrimaryColor(),
          },
        },
      },
    }
  };

  return themes;
};


const VideoSize = (props:IVideoPlayer) => {
  var width = props.data.videoWidth,
  height = props.data.videoHeight;

//class videoNgang
//width 100%
//height calc(ratio)

//class videoDoc
//height 600
//width calc(600 * ratio)

var sizeHeight = {
  xs: 488,
  md: 568,
};

var configVideo: any = {};
if (width > height) {
  //video horizone
  //width 100% => height (ratio)
  var videoRatio = height / width;

  configVideo["width"] = "100vw";
  configVideo["paddingTop"] = `calc(100% * ${videoRatio})`;
} else if (width < height) {
  //video vertical
  //height 100%
  var videoRatio = width / height;

  //max height == 600 => widht (ratio)
  configVideo["height"] = {
    xs: sizeHeight.xs,
    md: sizeHeight.md,
  };

  configVideo["width"] = {
    xs: `calc(${sizeHeight.xs}px * ${videoRatio})`,
    md: `calc(${sizeHeight.md}px * ${videoRatio})`,
  };
} else {
  //square video
  configVideo["height"] = {
    xs: sizeHeight.xs,
    md: sizeHeight.md,
  };
  configVideo["width"] = configVideo["height"];
}
return configVideo
}

export {VideoSize}

export default videoPlayer;
