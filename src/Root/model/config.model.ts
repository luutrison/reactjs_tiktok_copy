

type CSSObject <T> = {
    [Key in keyof T ]?: any
}

type CSSProps = { [Key in keyof CSSObject<CSSStyleDeclaration> ]?: any }


type CSSObjectProps = {
    [key in keyof CSSProps & any] ?:  CSSProps
} & CSSProps


export default CSSObject
export type {CSSObjectProps}