import React, { Component } from "react";
import HomeFooter from "../../component/footer/home-footer/home-footer";
import HomeHeader from "../../component/header/home-header/home-header";
import HomeContainer from "../../component/container/home-container/home-container";
import LanguageComponent from "../../../Module/underscore/components/languages/lang-component";
import SpacerVertical from "../../component/container/home-container/components/spacer-container/spacer-vertical";

export default class LayoutHome extends Component {
  constructor(params: any) {
    super(params);
  }
  render() {
    type keys = keyof typeof this.props;
    return (
      <>
          <HomeHeader></HomeHeader>
          <HomeContainer>{this.props["children" as keys]}</HomeContainer>
          {/* <HomeFooter></HomeFooter> */}
      </>
    );
  }
}
