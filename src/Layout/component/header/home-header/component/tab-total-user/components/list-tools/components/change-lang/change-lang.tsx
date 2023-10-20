import {
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  ListItem,
  Paper,
} from "@mui/material";
import React, { Component } from "react";
import { _gdProps } from "../../../../../../../../../../Module/underscore/components/giaodien/config/color.config";
import _mix from "../../../../../../../../../../Module/underscore/components/giaodien/data/data";
import _lang from "../../../../../../../../../../Module/underscore/components/languages/config/languages.config";
import { RootConsumer } from "../../../../../../../../../consumer/root-consumer/root-consumer";

export default class ChangeLang extends Component<any> {
  constructor(params:any) {
    super(params)
  }
  render() {
    return (
      <RootConsumer>
        {(root): any => {
        
          var lang:any = [];

          Object.keys(_lang).forEach((e, i) => {

            var langitem = _lang[e as keyof typeof _lang]

            lang.push(
                <Grid item xs={6} key={i}>
                  <Card
                    className={_mix([
                      _gdProps.background,
                      _gdProps.colorPrimary70,
                      _gdProps.borderPrimary40
                    ])}
                    sx={{
                      cursor: "pointer",
                      filter: root?.languages?.current == e ? "grayscale(0)" : "grayscale(1)",
                      boxShadow: root?.languages?.current == e ?"3px 3px 0px 0px " + root?.themes?.getPrimaryColor() : "",
                      "&:hover": {
                        boxShadow: "3px 3px 0px 0px " + root?.themes?.getPrimaryColor()
                      }
                      
                    }}
                    onClick = {() => {
                      root?.languages?.setLang?.(e as any )
                    }}
                  >
                    <CardContent sx={{padding: "15px !important"}}>
                      <Grid item style={{fontSize: 20, fontWeight: 600}}>
                        {root?.languages?.sub?.(langitem.name as any)}
                      </Grid>
                      <Grid item marginTop={1.5} style={{color: root?.themes?.getModeColor?.("colorToogle")}}>{langitem.sub}</Grid>
                    </CardContent>
                  </Card>
                </Grid>
            );

          })

          return (
            <>
              <Dialog
                open={this.props.open}
                onClose={this.props.close}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                  sx: {
                    maxHeight: "inherit",
                    background: root?.themes?.getModeColor?.("menuBackground"),
                    color: root?.themes?.getModeColor?.("color"),
                  },
                }}
              >
                <DialogTitle>
                  {root?.languages?.sub?.("chon_ngon_ngu")}
                </DialogTitle>
                <DialogContent style={{marginTop: 10, paddingTop: 10}}>
                  <Grid container spacing={2}>
                    {lang}
                  </Grid>
                </DialogContent>
                <DialogActions
                 style={{
                  marginTop: 50,
                  borderTop:
                    "solid 1px " + root?.themes?.getModeColor?.("mauBorder"),
                }}
                >
                  <Button className={_gdProps.colorPrimary60} onClick={()=>{
                    this.props.close()
                  }}>
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
