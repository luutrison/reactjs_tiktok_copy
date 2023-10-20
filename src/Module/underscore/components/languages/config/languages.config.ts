
const _lang = {
   vi: {
    name: "tieng_viet",
    sub:"vi-VN",
    set:  () => {
        return import("../Langs/vi.json")
    },
    font:{
        default:{
            name: "roboto",
            set: () => {
                return import("../Fonts/Roboto/roboto")
            }
        } 
    }
   },
   en: {
    name: "tieng_anh",
    sub:"en-US",
    set: ()=>{
        return import("../Langs/en.json")
    },
    font:{
        default:{
            name: "roboto",
            set: () => {
                return import("../Fonts/Roboto/roboto")
            }
        } 
    }
   }
}




export default _lang;
