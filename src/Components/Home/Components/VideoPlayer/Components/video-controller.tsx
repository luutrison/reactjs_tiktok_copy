import { Box, Grid, Slider } from "@mui/material";
import React, { Component } from "react";
import videoController from "./video-controller.config";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import { VideoConsumer } from "../../VideoBlock/video-block";

export default class IVideoController extends Component<any> {
  constructor(params: any) {
    super(params);

    this.state = {
      hideVolume: true,
      playState: this.props.playState,
      userControl: false,
      videoTime: "00:00",
      videoCurrent: "00:00",
      percentVideoPlayed: 0,
    };
  }
  componentDidMount(): void {
    const videoTime = this.props.duration;
    this.setState({
      videoTime: this.formatTime(videoTime),
    });
    const vid = this.props.video.current;

    vid.onplaying = () => {
      var loopTime = setInterval(() => {
        if (vid.paused == false) {
          if (this.props.allowSkip) {
            // console.log("loop", this.state.percentVideoPlayed);
            const percent = (vid.currentTime / this.props.duration) * 100;

            this.setState({
              videoCurrent: this.formatTime(vid.currentTime),
              percentVideoPlayed: percent,
            });
          }
        } else {
          clearInterval(loopTime);
          this.setState({
            playState: false,
          });
        }
      }, 300);
    };
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (this.state.userControl) {
      if (this.props.playState == false) {
        this.setState({
          userControl: false
        })
      }
    }
    else{
      if (this.props.playState != this.state.playState) {
        this.setState(
          {
            playState: this.props.playState,
          },
          () => {
            const vid = this.props.video.current;
  
            if (this.state.playState) {
              vid.currentTime = 0;
              vid.play();
            } else {
              vid.currentTime = 0;
              vid.pause();
            }
          }
        );
      }
    }

    
  }

  formatTime = (second: any) => {
    //format second to mm:ss
    var videoTime = Math.round(second),
      minute = (videoTime - (videoTime % 60)) / 60;

    var minuteds = ("0" + minute).slice(-2),
      secondds = ("0" + (videoTime - minute * 60)).slice(-2);
    // if (minute > 0) {
    //   if (minute < 10) {
    //     minuteds = `0${minute}`
    //   }
    //   else{
    //     minuteds = minute as any
    //   }
    // }

    const timeOut = `${minuteds}:${secondds}`;

    return timeOut;
  };

  state: any;
  ref: any = {
    volume: React.createRef(),
  };

  render() {
    const themes: any = videoController(null as any);

    if (this.props.show) {
      return (
        <VideoConsumer>
          {(video): any => {
            const changeVolume = (vol: any) => {
              var volume = vol / 100;
              video?.setVolume(volume);
              const vid = this.props.video.current;
              vid.volume = volume;
            };

            const changeStatePlayVideo = () => {
              const vid = this.props.video.current;

              if (vid.paused) {
                vid.play();
                vid.volume = video?.volume;
                this.setState({
                  userControl: true,
                  playState: true
                })
              } else {
                vid.pause();
                this.setState({
                  userControl: true,
                  playState: false
                })
              }
            };

            const pauseVideo = () => {
              const vid = this.props.video.current;
              vid.pause();
              this.setState({
                userControl: true,
                playState: false
              })
            };

            const startVideo = (percent: any) => {
              const vid = this.props.video.current;
              const timeCurrent = (this.props.duration * percent) / 100;
              vid.currentTime = timeCurrent;
              vid.play();
              this.setState({
                userControl: true,
                playState: true,
                percentVideoPlayed: percent,
              });
            };

            return (
              <Box sx={themes.boxContent}>
                <Grid container sx={themes.coltrolTray}>
                  <Grid item>
                    <Box sx={themes.playPlace} onClick={changeStatePlayVideo}>
                      {this.state.playState ? (
                        <PauseIcon></PauseIcon>
                      ) : (
                        <PlayArrowIcon></PlayArrowIcon>
                      )}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    onMouseEnter={() => {
                      this.setState({
                        hideVolume: false,
                      });
                    }}
                    onMouseLeave={() => {
                      this.setState({
                        hideVolume: true,
                      });
                    }}
                  >
                    <Box sx={themes.volumePlace} hidden={this.state.hideVolume}>
                      <Slider
                        key={`slider-volume-${video?.volume}`}
                        orientation="vertical"
                        size="small"
                        sx={themes.volumeSlider}
                        defaultValue={video?.volume ? video.volume * 100 : 80}
                        ref={this.ref.volume}
                        onChangeCommitted={(e, value: any) => {
                          changeVolume(value);
                        }}
                      ></Slider>
                    </Box>
                    <Box sx={themes.volumeIcon}>
                      <VolumeUpIcon></VolumeUpIcon>
                    </Box>
                  </Grid>
                </Grid>
                {this.props.allowSkip && (
                  <Grid container sx={themes.videoController}>
                    <Grid item sx={themes.timeLine}>
                      <Slider
                        key={`slider-time-${this.state.percentVideoPlayed}`}
                        size="small"
                        sx={themes.videoTimeSlider}
                        defaultValue={this.state.percentVideoPlayed}
                        onMouseDown={() => {
                          pauseVideo();
                        }}
                        onChangeCommitted={(e, v) => {
                          startVideo(v);
                        }}
                      ></Slider>
                    </Grid>
                    <Grid item sx={themes.countTime}>
                      {this.state.videoCurrent}/{this.state.videoTime}
                    </Grid>
                  </Grid>
                )}
              </Box>
            );
          }}
        </VideoConsumer>
      );
    }
  }
}
