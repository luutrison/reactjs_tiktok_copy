import { Grid } from "@mui/material";
import React, { Component } from "react";
import scss from "./home-header.module.scss";
import { _gdProps } from "../../../../Module/underscore/components/giaodien/config/color.config";
import { Container } from "@mui/material";
import TabTotalUser from "./component/tab-total-user/tab-total-user";
import _mix from "../../../../Module/underscore/components/giaodien/data/data";
import LayoutContext from "../../../layout-root";
import TabSearch from "./component/tab-search/tab-search";
import { _layoutConfig } from "../../../config/layout/layout.config";
import homeHeader from "./home-header.theme";
import icon from './../../../../Images/icon.png';
import { Box } from "@mui/system";

export default class HomeHeader extends Component {
  render() {
    const themes: any = homeHeader(null);

    return (
      <>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={themes.header}
          className={_mix([_gdProps.boxshadowSlim, _gdProps.backgroundTop])}
        >
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item sx={themes.name}>
                haiđô
              </Grid>
              <Grid item>
                <TabSearch></TabSearch>
              </Grid>
              <Grid item>
                <TabTotalUser></TabTotalUser>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </>
    );
  }
}
