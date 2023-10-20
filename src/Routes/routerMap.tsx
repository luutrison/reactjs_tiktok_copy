import React, { Component, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { JsxElement } from "typescript";
import PagesRouter from "../Pages/router";



export default class RouterMap extends Component {

  constructor(props:any) {
    super(props)
  }

  componentDidMount(){
  }


  render() {


    const MapRouter = (route: ReactElement[])=> {
      return route.map((e, i) => {
        return e
      });
    }

    const routere = [
      ...MapRouter(PagesRouter),
    ];

    return (
      <>
        <Routes>
          {routere}
        </Routes>
      </>
    );
  }
}
