import React, { Children, Component } from "react";
import { BrowserRouter } from "react-router-dom";
import _mix from "../Module/underscore/components/giaodien/data/data";

import scss from "./layout-root.module.scss";
import _gdLayout, {
  themesChangeLocal,
  themesConfig,
} from "./config/layout/layout.config";
import _gdColor, {
  _gdMode,
  _gdProps,
} from "../Module/underscore/components/giaodien/config/color.config";
import LanguageComponent, {
  LanguageSub,
} from "../Module/underscore/components/languages/lang-component";
import _lang from "../Module/underscore/components/languages/config/languages.config";
import davata from "../Module/underscore/components/data/data";
import IGiaodien from "./layout-root.model";
import RootConsumerSetup from "./consumer/root-consumer/root-consumer";
import IThemesConfig from "./config/layout/layout.model";
import AccountConsumerSetup from "../Components/Home/Components/Account/account.consumer";

//Layout Name Config
const LayoutContext = React.createContext<IGiaodien | null>(null);
const LayoutProvider = LayoutContext.Provider;
const LayoutConsumer = LayoutContext.Consumer;

export class LayoutRoot extends Component<any> {
  // static contextType = LayoutContext;
  constructor(params: any) {
    super(params);
    this.state = this.reloadDataConfig();
    // this.setLayout = this.setLayout.bind(this);
    // this.setMode = this.setMode.bind(this);
    // this.setPrimaryColor = this.setPrimaryColor.bind(this);
    // this.getColor = this.getColor.bind(this);
  }

  componentDidMount(): void {}

  //#region get themesConfig from local storage

  reloadDataConfig(): IGiaodien {
    const currentLoaded = themesConfig();
    const defaultStateSetting: IGiaodien = {
      mode: currentLoaded.themes.mode,
      primaryColor: currentLoaded.themes.color,
      layout: "_home",
      setLayout: this.setLayout,
      setMode: this.setMode,
      setPrimaryColor: this.setPrimaryColor,
      getModeColor: this.getModeColor,
      getPrimaryColor: this.getPrimaryColor,
    };
    return defaultStateSetting;
  }

  //#endregion

  configThis = () => {
    const mode = _gdMode[this.state.mode as keyof typeof _gdMode]
      ? _gdMode[this.state.mode as keyof typeof _gdMode]
      : _gdMode.normal;
    const color = _gdColor[this.state.primaryColor as keyof typeof _gdColor]
      ? _gdColor[this.state.primaryColor as keyof typeof _gdColor]
      : _gdColor.primaryColor;

    const mainProps = [
      mode.css,
      color.css,
      _gdProps.background,
      _gdProps.color,
    ];

    document.querySelector("html")?.setAttribute?.("class", _mix(mainProps));
  };

  state: IGiaodien;

  setLayout = (layoutIs: keyof typeof _gdLayout) => {
    this.setState({
      layout: _gdLayout[layoutIs],
    });
  };

  setPrimaryColor = (colorIs: keyof typeof _gdColor) => {
    this.setState({
      primaryColor: colorIs,
    });
    themesChangeLocal({ color: colorIs });
  };

  setMode = (modeIs: any) => {
    this.setState({
      mode: modeIs,
    });
    themesChangeLocal({ mode: modeIs });
  };

  getModeColor = (prop: keyof typeof _gdMode.normal.render) => {
    return _gdMode[this.state.mode as keyof typeof _gdMode].render[prop];
  };

  getPrimaryColor = () => {
    return _gdColor[this.state.primaryColor as keyof typeof _gdColor].render;
  };

  render() {
    this.configThis();

    type keys = keyof typeof this.props;
    const CurrentLayout =
      _gdLayout[this.state.layout as keyof typeof _gdLayout];

    return (
      <>
        <LanguageComponent themes={this.state}>
          <AccountConsumerSetup>
            <CurrentLayout>{this.props.children}</CurrentLayout>
          </AccountConsumerSetup>
        </LanguageComponent>
      </>
    );
  }
}

// const context : keyof typeof LayoutRoot.contextType = {}

export default LayoutConsumer;
