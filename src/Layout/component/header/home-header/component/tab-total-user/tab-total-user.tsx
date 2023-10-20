import { Button, Grid, IconButton } from "@mui/material";
import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  _gdMode,
  _gdProps,
} from "../../../../../../Module/underscore/components/giaodien/config/color.config";
import _mix from "../../../../../../Module/underscore/components/giaodien/data/data";
import ListTools from "./components/list-tools/list-tools";
import { Link } from "react-router-dom";
import _ from "../../../../../../Module/underscore/underscore";
import { __String } from "typescript";
import { LanguageSub } from "../../../../../../Module/underscore/components/languages/lang-component";
import { RootConsumer } from "../../../../../consumer/root-consumer/root-consumer";
import { AccountConsumer } from "../../../../../../Components/Home/Components/Account/account.consumer";
import IAccount from "../../../../../../Components/Home/Components/Account/account.model";

interface Type {
  substate: any;
}

export default class TabTotalUser extends Component {
  constructor(params: any) {
    super(params);
  }

  upload(account:IAccount){
    account.login?.check()
  }

  render() {
    return (
      <AccountConsumer>
        {(account): any => {
          return(
            <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                className={_mix([_gdProps.backgroundPrimary50])}
                startIcon={<AddIcon></AddIcon>}
                onClick={()=>{this.upload(account as any)}}
              >
                <LanguageSub subtext="tai_len"></LanguageSub>
              </Button>
            </Grid>
            <Grid item>
                <Button
                  variant="outlined"
                  className={_mix([_gdProps.colorMd, _gdProps.borderPrimary50])}
                  startIcon={<AccountCircleIcon></AccountCircleIcon>}
                  onClick={account?.login?.openPanel}
                >
                  <LanguageSub subtext="dang_nhap"></LanguageSub>
                </Button>
            </Grid>
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <ListTools></ListTools>
            </Grid>
          </Grid>
          )
        }}
      </AccountConsumer>
    );
  }
}
