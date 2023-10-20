import { Box, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { type } from "os";
import React, { Component } from "react";
import { _layoutConfig } from "../../../config/layout/layout.config";
import MenuLeft from "./components/menu-left/menu-left";
import SpacerVertical from "./components/spacer-container/spacer-vertical";

import scss from "./home-container.module.scss";
import  homeContainer  from "./home-container.config";

export default class HomeContainer extends Component {
  render() {
    type keys = keyof typeof this.props;
    const themes:any = homeContainer(null as any)
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="start"
        sx={themes.containerHome}
      >
        <Container maxWidth="lg" sx={themes.mainContainer}>
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <MenuLeft></MenuLeft>
            </Grid>
            <Grid item xs={8}>
              <SpacerVertical></SpacerVertical>
              {this.props["children" as keys]}
              <SpacerVertical></SpacerVertical>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
}
