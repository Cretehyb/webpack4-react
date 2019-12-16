declare namespace HomeLessModule {
  export interface IHomeLess {
    div: string
    img: string
  }
}

declare const HomeLessModule: HomeLessModule.IHomeLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeLessModule.IHomeLess
}

export = HomeLessModule
