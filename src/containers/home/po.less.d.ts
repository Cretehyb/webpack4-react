declare namespace PoLessModule {
  export interface IPoLess {
    content: string
  }
}

declare const PoLessModule: PoLessModule.IPoLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PoLessModule.IPoLess
}

export = PoLessModule
