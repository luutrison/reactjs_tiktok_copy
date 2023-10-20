import { Button, Grid } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import VideocamIcon from "@mui/icons-material/Videocam";
import PeopleIcon from "@mui/icons-material/People";
import { RootConsumer } from "../../../../../../../consumer/root-consumer/root-consumer";
import navigatorMenu, {
  activeDecoration,
  stateActiveMenu,
} from "./navigator-menu.config";
import { _gdProps } from "../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import { AccountConsumer } from "../../../../../../../../Components/Home/Components/Account/account.consumer";

export default class NavigatorMenu extends Component {
  constructor(params: any) {
    super(params);
    this.state = {
      currentCate: "trend",
    };
  }

  state: any;
  render() {
    return (
      <RootConsumer>
        {(root): any => {
          const themes: any = navigatorMenu(root as any);
          return (
            <AccountConsumer>
              {(account): any => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Link to="/">
                        <Button
                          className={
                            stateActiveMenu(
                              root as any,
                              this.state,
                              "trend"
                            ) as any
                          }
                          fullWidth
                          sx={{
                            ...themes.iconButton,
                            ...activeDecoration(
                              root as any,
                              this.state,
                              "trend"
                            ),
                          }}
                          onClick={() => {
                            console.log("click");
                          }}
                        >
                          <Grid
                            item
                            component="span"
                            sx={{ ...themes.activeMenu }}
                          >
                            <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                            {root?.languages?.sub?.("thinh_hanh")}
                          </Grid>
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        className={
                          stateActiveMenu(
                            root as any,
                            this.state,
                            "follow"
                          ) as any
                        }
                        sx={{
                          ...themes.iconButton,
                          ...activeDecoration(
                            root as any,
                            this.state,
                            "follow"
                          ),
                        }}
                        onClick={account?.login?.check}
                      >
                        <Grid item component="span" sx={{ ...themes.menuitem }}>
                          <PeopleIcon></PeopleIcon>
                          {root?.languages?.sub?.("dang_follow")}
                        </Grid>
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        className={
                          stateActiveMenu(
                            root as any,
                            this.state,
                            "follow"
                          ) as any
                        }
                        sx={{
                          ...themes.iconButton,
                          ...activeDecoration(
                            root as any,
                            this.state,
                            "follow"
                          ),
                        }}
                        onClick={account?.login?.check}
                      >
                        <Grid item component="span" sx={{ ...themes.menuitem }}>
                          <VideocamIcon></VideocamIcon>
                          {root?.languages?.sub?.("truc_tiep")}
                        </Grid>
                      </Button>
                    </Grid>
                  </>
                );
              }}
            </AccountConsumer>
          );
        }}
      </RootConsumer>
    );
  }
}
