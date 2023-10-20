import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Hidden,
  ListItemIcon,
  MenuItem,
} from "@mui/material";
import React, { Component } from "react";

import _gdColor, {
  _gdMode,
  _gdProps,
} from "../../../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import CheckIcon from "@mui/icons-material/Check";
import _mix from "../../../../../../../../../../Module/underscore/components/giaodien/data/data";
import { RootConsumer } from "../../../../../../../../../consumer/root-consumer/root-consumer";

import SimpleBar from "simplebar-react";
import CancelIcon from "@mui/icons-material/Cancel";

interface iCustomize {
  open: any;
  close: any;
}

export default class CustomizeLayout extends Component<iCustomize> {
  constructor(params: any) {
    super(params);
  }

  changeMode = (mode: keyof typeof _gdMode) => {
    if (localStorage) {
      const currentMode = localStorage.getItem("mode");
    }
  };

  state: any;
  render() {
    return (
      <RootConsumer>
        {(root): any => {
          var color: any = [];
          Object.keys(_gdColor).forEach((e: any, i) => {
            color.push(
              <Grid item key={i}>
                <Fab
                  onClick={() => {
                    root?.themes?.setPrimaryColor?.(e);
                    this.setState({
                      activePrimary: e,
                    });
                  }}
                  sx={{
                    "&:hover": {
                      opacity: "1 !important",
                    },
                  }}
                  style={{
                    background: _gdColor[e as keyof typeof _gdColor].render,
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    overflow: "hidden",
                    color: "white",
                    opacity: root?.themes?.primaryColor == e ? 1 : 0.8,
                  }}
                >
                  {root?.themes?.primaryColor == e ? (
                    <CheckIcon></CheckIcon>
                  ) : null}
                </Fab>
              </Grid>
            );
          });

          var chedo: any = [];

          Object.keys(_gdMode).forEach((e: any, i): any => {
            const Icon = _gdMode[e as keyof typeof _gdMode].icon;

            chedo.push(
              <Grid item key={i} xs={4} position="relative">
                <Card
                  style={{
                    height: 150,
                    cursor: "pointer",
                    opacity: root?.themes?.mode == e ? 1 : 0.5,
                    filter:
                      root?.themes?.mode == e ? "grayscale(0)" : "grayscale(1)",
                    outline:
                      root?.themes?.mode == e
                        ? "solid 5px " + root?.themes?.getPrimaryColor()
                        : "solid 2px " + root?.themes?.getPrimaryColor(),
                  }}
                  className={_mix([_gdProps.background])}
                  sx={{
                    "&:hover": {
                      boxShadow:
                        " 0px 0px 0px 5px " +
                        root?.themes?.getPrimaryColor(),
                    },
                    svg: {
                      transform: "scale(1)",
                      transition: ".3s ease",
                    },
                    "&:hover svg": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => {
                    root?.themes?.setMode?.(e);
                    this.setState({
                      activeMode: e,
                    });
                  }}
                >
                  <CardMedia
                    style={{
                      height: 100,
                    }}
                  >
                    <Grid
                      item
                      justifyContent="center"
                      alignItems="center"
                      display="flex"
                      height="100%"
                    >
                      <Icon
                        style={{
                          fontSize: 50,
                          color: root?.themes?.getPrimaryColor(),
                        }}
                      ></Icon>
                    </Grid>
                  </CardMedia>
                  <CardContent
                    style={{
                      height: 50,
                      textAlign: "center",
                      color: root?.themes?.getModeColor?.("color"),
                    }}
                  >
                    {root?.languages?.sub?.(
                      _gdMode[e as keyof typeof _gdMode]?.name as any
                    )}
                  </CardContent>
                </Card>

                {root?.themes?.mode == e ? (
                  <Box
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 30,
                      background: root?.themes?.getPrimaryColor(),
                      position: "absolute",
                      right: "5px",
                      top: "20px",
                      color: "white",
                    }}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <CheckIcon style={{ fontSize: 15 }}></CheckIcon>
                  </Box>
                ) : null}
              </Grid>
            );
          });

          return (
            <>
              <Dialog
                open={this.props.open}
                onClose={() => {
                  this.props.close();
                }}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                  style: {
                    background: root?.themes?.getModeColor?.("menuBackground"),
                    color: root?.themes?.getModeColor?.("color"),
                    overflow: "hidden",
                    maxHeight: "auto"
                  },
                }}
              >
                <DialogTitle>
                  {root?.languages?.sub?.("tuy_chinh_giao_dien")}
                </DialogTitle>
                <SimpleBar autoHide={false} style={{ maxHeight: 400 }}>
                  <DialogContent>
                    <Grid item>
                      <Grid item alignItems="center" marginBottom={5}>
                        <Grid item>{root?.languages?.sub?.("mau_chu_de")}</Grid>
                        <Grid item marginTop={2}>
                          <Grid container spacing={2}>
                            {color}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item alignItems="center">
                        <Grid item>
                          {root?.languages?.sub?.("che_do_giao_dien")}
                        </Grid>
                        <Grid item marginTop={2}>
                          <Grid container spacing={2}>
                            {chedo}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </SimpleBar>

                <DialogActions
                  style={{
                    borderTop:
                      "solid 1px " + root?.themes?.getModeColor?.("mauBorder"),
                  }}
                >
                  <Button
                    className={_mix([
                      _gdProps.colorPrimary60,
                      _gdProps.normalText,
                    ])}
                    variant="text"
                    onClick={() => {
                      this.props.close();
                    }}
                  >
                    {/* <CancelIcon></CancelIcon> */}
                    {root?.languages?.sub?.("dong")}
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          );
        }}
      </RootConsumer>
    );
  }
}
