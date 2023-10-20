import _lang from "./config/languages.config";

type ILanguages<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

interface IScroll{
  scrollbar: any
}

interface ILang extends IScroll{
  current?: keyof typeof _lang;
  default?: keyof typeof _lang;
  autoLang?: keyof typeof _lang;
  langSupport?: any;
  loaded?: any;
  sub?: (sub: keyof ILanguages<ReturnType<typeof _lang["vi"]["set"]>>) => string;
  // sub?: any;
  setLang?: (lang: keyof typeof _lang) => any;
  startRender?: boolean;
  state?: any;
}

export default ILang

export type {ILanguages}