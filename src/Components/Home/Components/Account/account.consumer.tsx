import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import LanguageComponent from "../../../../Module/underscore/components/languages/lang-component";
import IAccount from "./account.model";
import LoginPanel from "./LoginPanel/LoginPanel";

const AccountContext = React.createContext<IAccount | null>(null);
const AccountConsumer = AccountContext.Consumer;

export default class AccountConsumerSetup extends Component<any> {
  constructor(params: any) {
    super(params);
    this.state = {
      login: {
        isLogin: false,
        isOpenPanel: false,
        openPanel: this.openPanelLogin,
        closePanel: this.closePanelLogin,
        check: this.checkLogin
      },
    };
  }
  state: IAccount;
  openPanelLogin = () => {
    if (!this.state?.login?.isLogin) {
      this.setState({
        login: {
          ...this.state.login,
          isOpenPanel: true,
        },
      });
    }
  };

  closePanelLogin = () => {
    this.setState({
      login: {
        ...this.state.login,
        isOpenPanel: false,
      },
    });
  };

  checkLogin = () => {
    
    if (this?.state.login?.isLogin == false) {
        this.openPanelLogin()
    }
    else{
        // return info
    }
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
        <LoginPanel></LoginPanel>
      </AccountContext.Provider>
    );
  }
}

export { AccountConsumer };
