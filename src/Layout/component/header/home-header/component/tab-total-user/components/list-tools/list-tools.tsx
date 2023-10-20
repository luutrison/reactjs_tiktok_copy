import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { Component } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import _mix from "../../../../../../../../Module/underscore/components/giaodien/data/data";
import _gdColor, {
  _gdProps,
} from "../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import _gdState from "../../../../../../../../Module/underscore/components/giaodien/config/state.config";
import scss from "./list-tool.module.scss";
import { padding } from "@mui/system";
import _ from "../../../../../../../../Module/underscore/underscore";
import TollIcon from "@mui/icons-material/Toll";

import LanguageIcon from "@mui/icons-material/Language";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import {
  LanguageSub,
} from "../../../../../../../../Module/underscore/components/languages/lang-component";
import LayoutConsumer from "../../../../../../../layout-root";
import CustomizeLayout from "./components/customize/customize";
import { RootConsumer } from "../../../../../../../consumer/root-consumer/root-consumer";
import ChangeLang from "./components/change-lang/change-lang";
import _lang from "../../../../../../../../Module/underscore/components/languages/config/languages.config";
import { randomUUID } from "crypto";
import randomName from "../../../../../../../../Root/data/config.data";
interface propsMap {
  stateMenu?: any;
  menu?: any;
  customize?: any;
  changeLang?: any;
}

export default class ListTools extends Component {
  constructor(params: any) {
    super(params);
    this.state = {
      stateMenu: false,
      menu: null,
      customize: false,
      changeLang: false
    };
  }
  state: propsMap;
  changeStateMenu = (event: any) => {
    this.setState({
      menu: event.target,
      stateMenu: true,
    });
  };
  exitMenu = () => {
    this.setState({
      stateMenu: false,
    });
  };

  render() {
    return (
      <>
        <RootConsumer>
          {
            (root):any => {
              const idToogle = randomName({name:"setting"})
              
              return(
                <>
                      <Grid item>
                        <Grid item>
                          <Button
                            onClick={this.changeStateMenu}
                            aria-controls={idToogle}
                            aria-haspopup="true"
                            aria-expanded={true}
                            className={_gdProps.colorMd}
                            startIcon={<MoreVertIcon></MoreVertIcon>}
                          >
                            <LanguageSub subtext="cai_dat"></LanguageSub>
                          </Button>
                        </Grid>
                        <Grid item>
                          <Menu
                            open={this.state.stateMenu}
                            id={idToogle}
                            anchorEl={this.state.menu}
                            onClose={this.exitMenu}
                            PaperProps={{
                              sx: {
                                overflow: "visible",
                                mt: 1.5,
                                boxShadow:
                                  "0px 2px 8px " +
                                  root?.themes?.getModeColor?.("shadowColor"),
                                "&:after": {
                                  content: '""',
                                  display: "block",
                                  position: "absolute",
                                  top: 0,
                                  left: 10,
                                  width: 10,
                                  height: 10,
                                  bgcolor:
                                    root?.themes?.getModeColor?.("menuBackground"),
                                  transform: "translateY(-50%) rotate(45deg)",
                                  zIndex: 0,
                                  boxShadow:
                                    "0px 0px 4px " +
                                    root?.themes?.getModeColor?.("shadowColor"),
                                },
                                "& ul": {
                                  padding: 0,
                                  zIndex: 1,
                                  color: root?.themes?.getModeColor?.("color"),
                                  "& button": {
                                    textTransform: "none",
                                  },
                                  "& li": {
                                    padding: "10px",
                                    "&:hover": {
                                      background:
                                        root?.themes?.getModeColor?.("mauHover"),
                                    },
                                  },
                                },

                                "& hr": {
                                  borderColor:
                                    root?.themes?.getModeColor?.("shadowColor"),
                                },
                              },
                            }}
                          >
                            <Grid
                              style={{ background:  root?.themes?.getModeColor?.("menuBackground") }}
                            >
                              <MenuItem
                                  onClick={() => {
                                    this.setState({
                                      changeLang: true,
                                    });
                                    this.exitMenu()
                                  }}
                              >
                                <ListItemIcon>
                                  <LanguageIcon
                                    className={_gdProps.colorPrimary70}
                                  ></LanguageIcon>
                                </ListItemIcon>
                                <Grid container alignItems="center">
                                  <LanguageSub subtext="ngon_ngu"></LanguageSub>

                                  <Grid
                                    className={_gdProps.colorPrimary70}
                                    item
                                    style={{ fontSize: 14, marginLeft: 10 }}
                                  >
                                    ({root?.languages?.sub?.(_lang[root.languages.current as keyof typeof _lang].name as any)})
                                  </Grid>
                                </Grid>
                              </MenuItem>

                              <MenuItem
                                onClick={() => {
                                  this.setState({
                                    customize: true,
                                  });
                                  this.exitMenu()
                                }}
                              >
                                <ListItemIcon>
                                  <TollIcon
                                    className={_gdProps.colorPrimary70}
                                  ></TollIcon>
                                </ListItemIcon>
                                <LanguageSub subtext="tuy_chinh_giao_dien"></LanguageSub>
                              </MenuItem>

                              <Divider></Divider>
                              <MenuItem>
                                <ListItemIcon>
                                  <HelpCenterIcon
                                    className={_gdProps.colorPrimary70}
                                  ></HelpCenterIcon>
                                </ListItemIcon>
                                <LanguageSub subtext="ho_tro"></LanguageSub>
                              </MenuItem>
                            </Grid>
                          </Menu>
                        </Grid>
                      </Grid>

                      {/* Other Tab */}

                      <CustomizeLayout
                        open={this.state.customize}
                        close={()=>{this.setState({
                          customize: false
                        })}}
                      ></CustomizeLayout>
                      <ChangeLang open={this.state.changeLang}
                        close={()=>{this.setState({
                          changeLang: false
                        })}}>
                        
                      </ChangeLang>
                    </>
              )
            }
          }
        </RootConsumer>
      </>
    );
  }
}
