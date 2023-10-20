import IAccount from "../../../Components/Home/Components/Account/account.model";
import ILogin from "../../../Components/Home/Components/Account/LoginPanel/LoginPanel.model";
import ILang from "../../../Module/underscore/components/languages/lang-component.model";
import IGiaodien from "../../layout-root.model";


interface IRootConsumer {
    themes?: IGiaodien;
    languages?: ILang;
    page?:{
      scrollBar: any
    };
    account?: IAccount
  }

  export default IRootConsumer