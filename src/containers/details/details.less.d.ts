declare namespace DetailsLessModule {
  export interface IDetailsLess {
    countBox: string
  }
}

declare const DetailsLessModule: DetailsLessModule.IDetailsLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DetailsLessModule.IDetailsLess
}

export = DetailsLessModule
