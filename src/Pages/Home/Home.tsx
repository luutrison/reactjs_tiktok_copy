import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginPanel from "../../Components/Home/Components/Account/LoginPanel/LoginPanel";
import VideoBlock from "../../Components/Home/Components/VideoBlock/video-block";
import VideoPlayer from "../../Components/Home/Components/VideoPlayer/video-player";
import LayoutContext, { LayoutRoot } from "../../Layout/layout-root";

export default class Home extends Component {

  constructor(params: any) {
    super(params);
  }
  

  componentDidMount() {
    document.title = "Home";
  }



  render() {
    return (
      <>
      <VideoBlock></VideoBlock>
      </>
    );
  }
}

