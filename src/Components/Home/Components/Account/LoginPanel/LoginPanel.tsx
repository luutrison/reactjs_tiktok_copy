import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
} from "@mui/material";
import { maxHeight } from "@mui/system";
import React, { Component } from "react";
import SimpleBar from "simplebar-react";

import QrCodeIcon from "@mui/icons-material/QrCode";
import PersonIcon from "@mui/icons-material/Person";
import LoginPanelConfig from "./LoginPanel.config";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import ClearIcon from "@mui/icons-material/Clear";
import { RootConsumer } from "../../../../../Layout/consumer/root-consumer/root-consumer";
import { AccountConsumer } from "../account.consumer";
export default class LoginPanel extends Component {
  render() {
    return (
      <RootConsumer>
        {(root): any => {
          const themes: any = LoginPanelConfig(root as any);
          return (
            <AccountConsumer>
              {(account): any => {
                return (
                  <Dialog
                    maxWidth="sm"
                    fullWidth
                    open={account?.login?.isOpenPanel || false}
                    onClose={account?.login?.closePanel}
                    PaperProps={{
                      sx:{
                        ...themes.dialog
                      }
                    }}
                  >
                    <DialogTitle sx={themes.dialogTittle}>
                      <Fab
                        size="small"
                        onClick={account?.login?.closePanel}
                      >
                        <ClearIcon />
                      </Fab>
                    </DialogTitle>
                    <SimpleBar
                      style={{ minHeight: 200, maxHeight: 500, height: "100%" }}
                    >
                      <DialogContent>
                        <Box component="span" sx={themes.titleLogin}>
                          Login To Haido
                        </Box>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Button
                              sx={themes.buttonChoice}
                              fullWidth
                              variant="outlined"
                            >
                              <QrCodeIcon
                                sx={themes.iconButtonChoice}
                              ></QrCodeIcon>
                              Qr Code
                            </Button>
                          </Grid>

                          <Grid item xs={12}>
                            <Button
                              sx={themes.buttonChoice}
                              fullWidth
                              variant="outlined"
                            >
                              <PersonIcon
                                sx={themes.iconButtonChoice}
                              ></PersonIcon>
                              Ma nguoi dung / Tai khoan
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              sx={themes.buttonChoice}
                              fullWidth
                              variant="outlined"
                            >
                              <GoogleIcon
                                sx={themes.iconButtonChoice}
                              ></GoogleIcon>
                              Google
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              sx={themes.buttonChoice}
                              fullWidth
                              variant="outlined"
                            >
                              <FacebookIcon
                                sx={themes.iconButtonChoice}
                              ></FacebookIcon>
                              Facebook
                            </Button>
                          </Grid>
                        </Grid>
                      </DialogContent>
                    </SimpleBar>

                    <DialogActions sx={themes.actionBar}>
                      <Grid item>
                        Ban chua co tai khoan? <Box component="a">Dang ky</Box>
                      </Grid>
                    </DialogActions>
                  </Dialog>
                );
              }}
            </AccountConsumer>
          );
        }}
      </RootConsumer>
    );
  }
}
