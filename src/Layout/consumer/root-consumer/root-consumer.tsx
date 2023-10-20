import React, { Component } from "react";
import IRootConsumer from "./root-consumer.model";

const RootContext = React.createContext<IRootConsumer | null>(null);
const RootProvider = RootContext.Provider;
const RootConsumer = RootContext.Consumer;

export default class RootConsumerSetup extends Component<any> {
  constructor(params: any) {
    super(params);
  }

  render() {

    const propvider:IRootConsumer = {
        languages: this.props.langs,
        themes: this.props.themes,
        page: {
          scrollBar: this.props.page.scrollBar
        },
        account: this.props.account
    }

    if (this.props.isRender) {
      return (
        <>
          <RootProvider value={propvider}>{this.props.children}</RootProvider>
        </>
      );
    }
    else{
      return <></>
    }
    
   
  }
}

export {RootConsumer}
