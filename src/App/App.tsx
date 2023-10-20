import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
// import "../../src/Fonts/font.css"
import RouterMap from "../Routes/routerMap";
import { LayoutRoot } from "../Layout/layout-root";
import LanguageComponent from "../Module/underscore/components/languages/lang-component";

export default class App extends Component {
  constructor(params: any) {
    super(params);
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <LayoutRoot>
          <RouterMap></RouterMap>
        </LayoutRoot>
      </>
    );
  }
}
