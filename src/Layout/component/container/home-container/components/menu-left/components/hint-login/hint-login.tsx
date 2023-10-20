import { Button, Divider, Grid } from "@mui/material";
import React, { Component } from "react";
import { AccountConsumer } from "../../../../../../../../Components/Home/Components/Account/account.consumer";
import { _gdProps } from "../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import { RootConsumer } from "../../../../../../../consumer/root-consumer/root-consumer";
import hintLogin from "./hint-login.config";

export default class HintLogin extends Component {
  render() {
    return (
      <RootConsumer>
        {(root): any => {
          const themes: any = hintLogin(root as any);

          return (
            <AccountConsumer>
              {(account) => {
               return(
                <Grid container sx={themes.hintlogin}>
                <Divider sx={themes.divider}></Divider>

                <Grid item component="span" sx={themes.textHint}>
                  {root?.languages?.sub?.("dang_nhap_menu_hint")}
                </Grid>
                <Button fullWidth variant="outlined" sx={themes.loginButton} onClick={account?.login?.check}>
                  {root?.languages?.sub?.("dang_nhap")}
                </Button>
                <Divider sx={themes.divider}></Divider>
              </Grid>
               )
              }}
            </AccountConsumer>
          );
        }}
      </RootConsumer>
    );
  }
}
