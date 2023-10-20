import { Grid } from "@mui/material";
import React, { Component } from "react";
import SpacerVertical from "../../../../Layout/component/container/home-container/components/spacer-container/spacer-vertical";
import { RootConsumer } from "../../../../Layout/consumer/root-consumer/root-consumer";
import { _gdProps } from "../../../../Module/underscore/components/giaodien/config/color.config";
import _mix from "../../../../Module/underscore/components/giaodien/data/data";
import randomName from "../../../../Root/data/config.data";
import VideoList from "../VideoList/video-list";
import VideoPlayer from "../VideoPlayer/video-player";
import videoBlock, { itemVideo } from "./video-block.theme";

interface IVideoContext {
  volume: number;
  setVolume: any;
  items: any;
  currentPlaying: any;
  setCurrentPlaying: any
}

export type {IVideoContext}

const VideoContext = React.createContext<IVideoContext | null>(null);
const VideoConsumer = VideoContext.Consumer;

export default class VideoBlock extends Component {
  constructor(params: any) {
    super(params);
    this.state = {
      loaded: false,
      data: [],
      nameitems: randomName({ name: "videoitem" }),
      namePlaceVideo: randomName({ name: "placeVideo" }),
      volume: 0.8,
      itemMap: {},
      currentPlaying: 0
    };
  }

  componentDidMount(): void {
    this.getItems();
  }

  changeDefaultVolume = (number: number) => {
    this.setState({
      volume: number,
    });
  };

  setCurrentPlaying = (number:any) => {
    this.setState({
      currentPlaying: number
    })
  }

  state: any;

  ref: any = React.createRef();
  getItems = () => {
    var items: any = [];
    import("./Mock/video-block.mock").then((data: any) => {
      data.default.forEach((element: any, key: any) => {
        items.push(element);
      });

      this.setState({
        data: items,
        loaded: true,
      });
    });
  };

  objectItems: any = {};

  setStateItem = () => {};

  render() {

    const providerValue = {
      volume: this.state.volume,
      setVolume: this.changeDefaultVolume,
      items: this.objectItems,
      currentPlaying: this.state.currentPlaying,
      setCurrentPlaying: this.setCurrentPlaying
    }

    if (this.state.loaded) {
      const themes: any = videoBlock(null);
      var renderItem: any = [];

      var properties: any = {};

      this.state.data.map((data: any, key: any) => {
        renderItem.push(
          <VideoPlayer
            data={data}
            classOfVideos={this.state.nameitems}
            index={key}
            key={key}
            placeName={this.state.namePlaceVideo}
            changeVolume={this.changeDefaultVolume}
            defaultVolume={this.state.defaultVolume}
            ref={(e) => {
              this.objectItems[key] = e?.ref?.container?.current?.offsetTop;
            }}
          ></VideoPlayer>
        );
      });

      return (
        <RootConsumer>
          {(root): any => {
            return (
              <VideoContext.Provider
                value={providerValue}
              >
                <VideoList>
                  <Grid
                    container
                    sx={{ ...itemVideo(root, this.state.nameitems) }}
                    id={this.state.placeVideo}
                  >
                    {renderItem}
                  </Grid>
                </VideoList>
              </VideoContext.Provider>
            );
          }}
        </RootConsumer>
      );
    }
  }
}

export { VideoConsumer };
