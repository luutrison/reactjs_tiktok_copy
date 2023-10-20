import { Box, Button, Container, Divider, Grid, List, ListItem } from "@mui/material";
import React, { Component } from "react";
import { RootConsumer } from "../../../../../consumer/root-consumer/root-consumer";

import SimpleBar from "simplebar-react";
import { _layoutConfig } from "../../../../../config/layout/layout.config";
import scss from "./menu-left.module.scss";
import SpacerVertical from "../spacer-container/spacer-vertical";

import { _gdProps } from "../../../../../../Module/underscore/components/giaodien/config/color.config";
import menuLeft from "./menu-left.config";
import NavigatorMenu from "./components/navagator/navigator-menu";
import HintLogin from "./components/hint-login/hint-login";


export default class MenuLeft extends Component {


  render() {
    return (
      <RootConsumer>
        {(root): any => {
          const themes: any = menuLeft(root as any);

          return (
            <Grid container sx={themes.containerMenuLeft}>
              <Box position="absolute" width="100%">
                <SimpleBar autoHide={false} style={{ height: "100vh", paddingTop: "10px" }}>
                    <NavigatorMenu></NavigatorMenu>
                    <HintLogin></HintLogin>
                </SimpleBar>
              </Box>
            </Grid>
          );
        }}
      </RootConsumer>
    );
  }
}
