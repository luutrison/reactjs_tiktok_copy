import React, { Component } from "react";
import { RootConsumer } from "../../../../Layout/consumer/root-consumer/root-consumer";
import { IVideoContext, VideoConsumer } from "../VideoBlock/video-block";

interface IVideoPlayContext {
  currentPlaying: any;
}

const VideoPlayContext = React.createContext<IVideoPlayContext | null>(null);
const VideoPlayConsumer = VideoPlayContext.Consumer;

export { VideoPlayConsumer };

export default class VideoList extends Component<any> {
  constructor(params: any) {
    super(params);
    this.state = {
      currentPlaying: 0,
    };
  }
  //   componentDidMount(): any {
  //     return (
  //       <RootConsumer>
  //         {(root): any => {
  //           console.log(root);
  //         }}
  //       </RootConsumer>
  //     );
  //   }

  state: any;

  scrollBarEvent = (page: any, video: IVideoContext) => {
    page?.scrollBar?.addEventListener("scroll", (e: any) => {
      
      var scrollPosition = page?.scrollBar?.scrollTop,
        items = video.items;
      const setitems = (item: any) => {
        if (item != this.state.currentPlaying) {
          this.setState({
            currentPlaying: item,
          });
        }
      };


      Object.keys(items).forEach((v, i) => {

        var centerScreen = scrollPosition + window.innerHeight / 2;
        if (i == 0 || i == Object.keys(items).length - 1) {
          if (i == 0) {
            if (scrollPosition < window.innerHeight / 2 - 100) {
              setitems(i);
            }
          } else {
            if (scrollPosition + window.innerHeight >= page?.scrollBar?.scrollHeight) {
              setitems(i);
            }
          }
        } else {
          if (
            items[i] <= centerScreen - 100 &&
            items[i] + (items[i + 1] - items[i]) >= centerScreen
          ) {
            setitems(i);
          }
        }
      });
    });
  };

  render() {
    return (
      <RootConsumer>
        {(root): any => {
          return (
            <VideoConsumer>
              {(video): any => {
                // console.log(video);
                this.scrollBarEvent(root?.page, video as any);

                return (
                  <VideoPlayContext.Provider
                    value={{ currentPlaying: this.state.currentPlaying }}
                  >
                    {this.props.children}
                  </VideoPlayContext.Provider>
                );
              }}
            </VideoConsumer>
          );
        }}
      </RootConsumer>
    );
  }
}
