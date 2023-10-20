import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RootConsumerSetup, {
  RootConsumer,
} from "../../../../Layout/consumer/root-consumer/root-consumer";
import _ from "../../underscore";
import ILang, { ILanguages } from "./lang-component.model";
import _lang from "./config/languages.config";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import {
  themesChangeLocal,
  themesConfig,
} from "../../../../Layout/config/layout/layout.config";
import { Box } from "@mui/material";
import SpacerVertical from "../../../../Layout/component/container/home-container/components/spacer-container/spacer-vertical";

//Contex

export default class LanguageComponent extends Component<any> {
  constructor(params: any) {
    super(params);
    this.state = {
      default: "vi",
      current: themesConfig().location.language,
      autoLang: "vi",
      startRender: false,
      setLang: this.setLang,
      loaded: {},
      langSupport: _lang,
      sub: this.sub,
      scrollbar: null,
    };
    this.setLang = this.setLang.bind(this);
  }

  state: ILang;

  ref: any = React.createRef();

  configThis = () => {
    const configLang = window.navigator.languages;
    const langSupport = this.state.langSupport;
    const successLoad = () => {
      this.setState({
        startRender: true,
        scrollbar: this.ref?.current?.getScrollElement(),
      });
      _lang[this.state.current as keyof typeof _lang].font.default.set();
      _.setElement({
        fontFamily:
          _lang[this.state.current as keyof typeof _lang].font.default.name,
      });
    };

    const loadLang = (lang: keyof typeof _lang) => {
      if (!this.state.loaded[lang]) {
        this.state.langSupport[lang as any].set().then((e: any) => {
          var obj: any = {};
          obj[lang] = e;
          this.setState({
            loaded: obj,
          });
          successLoad();
        });
      } else {
        successLoad();
      }
    };

    if (!this.state.current) {
      configLang.forEach((el) => {
        if (Object.keys(langSupport).find((e) => e == el)) {
          loadLang(el as any);
          this.setState({
            autoLang: el,
          });
        } else {
          loadLang(this.state.default as any);
        }
      });
    } else {
      loadLang(this.state.current);
    }
  };

  componentDidMount(): void {
    this.configThis();
  }

  sub = (sub: keyof ILanguages<ReturnType<typeof _lang["vi"]["set"]>>) => {
    const itemSub =
      this.state?.loaded[this.state?.current ? this.state?.current : "vi"][
        sub.toLowerCase()
      ];
    return itemSub ? itemSub : sub;
  };

  setLang = (lang: keyof typeof _lang) => {
    if (this.state.loaded[lang]) {
      this.setState(
        {
          current: lang,
        },
        () => {
          themesChangeLocal({ lang: lang });
        }
      );
    } else {
      _lang[lang].set().then((e) => {
        this.state.loaded[lang] = e;
        this.setState(
          {
            current: lang,
          },
          () => {
            themesChangeLocal({ lang: lang });
          }
        );
      });
    }
  };

  render() {
    return (
      <Box component="main">
        <SimpleBar autoHide={false} style={{ height: "100vh" }} ref={this.ref}>
          <BrowserRouter>
            <RootConsumerSetup
              isRender={this.state.startRender}
              langs={this.state}
              themes={this.props.themes}
              page={{
                scrollBar: this.state.scrollbar,
              }}
              account={this.props.account}
            >
              {this.props.children}
            </RootConsumerSetup>
          </BrowserRouter>
        </SimpleBar>
      </Box>
    );
  }
}

interface iLanguageSub {
  subtext: keyof ILanguages<ReturnType<typeof _lang["vi"]["set"]>>;
}

class LanguageSub extends Component<iLanguageSub> {
  render() {
    return (
      <RootConsumer>
        {(root) => {
          return root?.languages?.loaded[
            root?.languages?.current ? root?.languages?.current : "vi"
          ][this.props.subtext];
        }}
      </RootConsumer>
    );
  }
}

export { LanguageSub };
