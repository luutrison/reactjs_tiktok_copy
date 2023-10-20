import { Avatar, Box, Button, Grid, Skeleton, Tooltip } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component, Ref } from "react";
import { RootConsumer } from "../../../../Layout/consumer/root-consumer/root-consumer";
import { _gdProps } from "../../../../Module/underscore/components/giaodien/config/color.config";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import _mix from "../../../../Module/underscore/components/giaodien/data/data";
import videoPlayer, { VideoSize } from "./video-player.config";
import { IVideoPlayer } from "./video-player.model";

import css from "./sample.module.css";
import IVideoController from "./Components/video-controller";
import { ElectricScooterSharp } from "@mui/icons-material";
import { VideoPlayConsumer } from "../VideoList/video-list";

export default class VideoPlayer extends Component<IVideoPlayer> {
  constructor(params: any) {
    super(params);
    this.state = {
      onAvatarReady: true,
      onVideoReady: true,
      showControl: false,
    };
  }

  ref: any = {
    video: React.createRef(),
    container: React.createRef(),
  };

  state: any;

  render() {
    return (
      <RootConsumer>
        {(root): any => {
          const themes: any = videoPlayer(root as any);

          const title = (title: string) => {
            return (
              <span style={{ fontSize: 14, color: "white" }}>{title}</span>
            );
          };

          return (
            <Grid
              container
              spacing={2}
              className={_mix([_gdProps.colorMd, this.props?.classOfVideos])}
              sx={themes.videoPlayerProp}
              ref={this.ref.container as any}
            >
              <Button
                variant="outlined"
                className={_mix([
                  _gdProps.borderPrimary60,
                  _gdProps.colorPrimary60,
                ])}
                size="small"
                sx={themes.buttonFollow}
              >
                Follow
              </Button>

              <Grid item ref={this.ref.avatar as any}>
                {this.state.onAvatarReady && (
                  <Skeleton
                    sx={themes.avatarUser}
                    variant="circular"
                  ></Skeleton>
                )}

                <Box
                  onLoad={() => {
                    this.setState({
                      onAvatarReady: false,
                    });
                  }}
                  hidden={this.state.onAvatarReady}
                >
                  <Avatar
                    sx={themes.avatarUser}
                    src={this.props.data.author.avatar}
                  ></Avatar>
                </Box>
              </Grid>
              <Grid item sx={themes.rightContainer}>
                <Grid item>
                  <Box component="span" sx={themes.nameUser}>
                    {this.props.data.author.id}
                  </Box>
                  <Box component="span">{this.props.data.author.subname}</Box>
                </Grid>
                <Grid item sx={{ marginTop: 1 }}>
                  <span>{this.props.data.title}</span>
                  <Grid item component="ul"></Grid>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                  <Grid container>
                    <Grid item sx={themes.videoPlace}>
                      <Box
                        sx={{
                          ...themes.videoContent,
                          ...VideoSize(this.props),
                        }}
                        onMouseEnter={() => {
                          this.setState({
                            showControl: true,
                          });
                        }}
                        onMouseLeave={() => {
                          this.setState({
                            showControl: false,
                          });
                        }}

                        // height={this.props.data.videoHeight}
                        // className={css.sample}
                      >
                        <Box
                          sx={themes.videoPlayer}
                          // {...VideoSize(this.props)}
                        >
                          {this.state.onVideoReady && (
                            <Skeleton
                              variant="rounded"
                              sx={themes.videoPost}
                            ></Skeleton>
                          )}
                          {/* Video */}
                          <Box
                            component="video"
                            preload="auto"
                            // muted
                            onLoadedMetadata={() => {
                              this.setState({
                                onVideoReady: false,
                              });
                            }}
                            hidden={this.state.onVideoReady}
                            // loop
                            src={this.props.data.url}
                            sx={{
                              ...themes.videoPost,
                              ...this.state.videoReady,
                            }}
                            ref={this.ref.video}
                          ></Box>

                          {
                            <VideoPlayConsumer>
                              {(videoPlay):any =>{
                                return(
                                  <IVideoController
                                  show={this.state.showControl}
                                  allowSkip={this.props.data.allowSkip}
                                  duration={this.props.data.videoLength}
                                  video={this.ref.video}
                                  changeVolume={this.props.changeVolume}
                                  defaultVolume={this.props.defaultVolume}
                                  playState = {videoPlay?.currentPlaying == this.props.index ? true : false}
                                ></IVideoController>
                                )
                              }}
                            </VideoPlayConsumer>
                          }
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item alignSelf="end" sx={themes.videoInteractive}>
                      <Grid container spacing={2}>
                        <Grid
                          flexDirection="column"
                          item
                          xs={12}
                          sx={themes.interactivePlace}
                          alignItems="center"
                        >
                          <Tooltip
                            title={title("I like this")}
                            placement="right"
                            {...themes.toolTipOption}
                          >
                            <Button
                              variant="contained"
                              className={_gdProps.backgroundPrimary60}
                              sx={themes.buttonInteractive}
                            >
                              <FavoriteIcon fontSize="medium"></FavoriteIcon>
                            </Button>
                          </Tooltip>

                          <Grid item sx={themes.countNumber} component="span">
                            123K
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sx={themes.interactivePlace}
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Tooltip
                            {...themes.toolTipOption}
                            placement="right"
                            title={title("Comment")}
                          >
                            <Button
                              variant="contained"
                              className={_gdProps.backgroundPrimary60}
                              sx={themes.buttonInteractive}
                            >
                              <CommentIcon fontSize="medium"></CommentIcon>
                            </Button>
                          </Tooltip>
                          <Grid item sx={themes.countNumber} component="span">
                            12K
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sx={themes.interactivePlace}
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Tooltip
                            title={title("Share")}
                            placement="right"
                            {...themes.toolTipOption}
                          >
                            <Button
                              variant="contained"
                              className={_gdProps.backgroundPrimary60}
                              sx={themes.buttonInteractive}
                            >
                              <ShareIcon fontSize="medium"></ShareIcon>
                            </Button>
                          </Tooltip>
                          <Grid item sx={themes.countNumber} component="span">
                            1K
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      </RootConsumer>
    );
  }
}
