import { Grid, InputBase } from "@mui/material";
import React, { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";
import scss from "./tab-search.module.scss";
import rootscss from "../../../../../../Root/css/root.module.scss";
import { _gdProps } from "../../../../../../Module/underscore/components/giaodien/config/color.config";
import _mix from "../../../../../../Module/underscore/components/giaodien/data/data";
import { RootConsumer } from "../../../../../consumer/root-consumer/root-consumer";
import tabSearch, { searchPlaceholderColor } from "./tab-search.config";
interface props {
  content?: any;
}

export default class TabSearch extends Component<props> {
  constructor(params: any) {
    super(params);
  }
  componentDidMount(): void {}
  oncreate = () => {};
  render() {
    return (
      <>
        <RootConsumer>
          {(root): any => {
            const themes:any = tabSearch(root as any)
            return (
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className={_gdProps.radiusMd}
                sx={themes.boxSearch}
              >
                <InputBase
                  className={_mix([
                    _gdProps.radiusMd,
                    _gdProps.colorMd,
                  ])}
                  placeholder={root?.languages?.sub?.("tim_kiem")}
                  style={{
                    minWidth: 260,
                  }}
                  sx={{...searchPlaceholderColor(root as any)}}
                ></InputBase>
                <SearchIcon sx={{color: root?.themes?.getModeColor?.("colorToogle")}}></SearchIcon>
              </Grid>
            );
          }}
        </RootConsumer>
      </>
    );
  }
}
