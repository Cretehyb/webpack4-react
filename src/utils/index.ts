'use strict'
// import { BrowserRouter } from 'react-router-dom'
// import { HtmlHTMLAttributes } from 'react'

/**
 * 删除数组中指定的对象
 * @author clubs
 * @param _arr 源数组
 * @param _obj 目标对象
 */
type remove_arr = []
type remove_obj = object
export function removeArrObj<T extends remove_arr, U extends remove_obj>(
  _arr: T,
  _obj: U
): [] | void {
  let length: number = _arr.length
  if (!length) {
    throw new Error('数组为空')
  } else {
    for (let i: number = 0; i < length; i++) {
      if (_arr[i] === _obj) {
        if (i === 0) {
          _arr.shift() //删除并返回数组的第一个元素
          return _arr
        } else if (i === length - 1) {
          _arr.pop() //删除并返回数组的最后一个元素
          return _arr
        } else {
          _arr.splice(i, 1) //删除下标为i的元素
          return _arr
        }
      }
    }
  }
}
/**
 * 二维数组降维
 * @author clubs
 * @param arr 源数组
 */
// 二维数组降维
export const flatten = function(arr: any): [] {
  while (arr.some((item: string) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * 获取移动操作系统类型,
 * @author clubs
 * @return 0  Android
 * @return 1  iOS
 * @return 2  其他移动os
 */
export function getOSType(): number | void {
  if (typeof window !== 'undefined' && window) {
    let ua: string = window.navigator.userAgent.toLowerCase()
    if (/(Android)/i.test(ua)) {
      return 0
    } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      return 1
    } else {
      return 2
    }
  }
}

/**
 * 判断当前环境是否是微信环境
 * @author clubs
 * @return 1 是
 * @return 2 否
 */
export function is_weixin(): number {
  var ua: string = navigator.userAgent.toLowerCase()
  if (/(MicroMessenger)/i.test(ua)) {
    return 1
  } else {
    return 0
  }
}

/**
 * 判断操作系统和平台
 */
export const os = (function() {
  let ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isChrome
  }
})()

/**
 * iphonex 适配
 * @author clubs
 * @return boolean
 */
export const isIphonex = (): boolean => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ]
  // H5
  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent)
    if (!isIOS) {
      return false
    }
    const { devicePixelRatio, screen } = window
    const { width, height } = screen
    return xSeriesConfig.some(
      item =>
        item.devicePixelRatio === devicePixelRatio &&
        item.width === width &&
        item.height === height
    )
  }
  return false
}

// 浏览器可视宽高
const getBrowserVisibleContent = () => {
  let height =
    document.documentElement.clientHeight || document.body.clientHeight
  let width = document.documentElement.clientWidth || document.body.clientWidth
  return { width, height }
}
// 当前元素距离文档顶部距离
const getTop = (el: any) => {
  let top = el.offsetTop
  let currentParent = el.offsetParent
  while (currentParent != null) {
    top += currentParent.offsetTop
    currentParent = currentParent.offsetParent
  }
  return top
}

// 计算垂直滚动条的距离
const scrollWidth = () => {
  if (document.body.clientWidth !== window.innerWidth) {
    var scrollHeight = window.innerWidth - document.body.clientWidth
    return scrollHeight
  } else {
    return false
  }
}

// 两端去空格
function trim1(str: string): string {
  let reg: RegExp = /^\s*(.*?)\s+$/
  return str.replace(reg, '')
}
//右端去空格
function trim2(str: string): string {
  let reg: RegExp = /(\s*| *)$/
  return str.replace(reg, '')
}
//左端去空格
function trim3(str: string): string {
  let reg: RegExp = /^(\s*| *)/
  return str.replace(reg, '')
}
//替换全部
function replaceAll(s1: RegExp, s2: string, str: string): string {
  return str.replace(new RegExp(s1, 'gm'), s2)
}
//去除所有空格，需要配合上面的替换全部
function trimAll(str: string): string {
  var reExtraSpace = /\s*(.*?)\s+/
  return replaceAll(reExtraSpace, '$1', str)
}

//url转成base64
function urlToBase64(url: string) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = function() {
      let canvas: any = document.createElement('canvas')
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0)
      // result
      let result = canvas.toDataURL('image/png')
      resolve(result)
    }
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute('crossOrigin', 'Anonymous')
    image.src = url
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('图片流异常'))
    }
  })
}

// base64转成Blob
function base64ToBlob({
  b64data = '',
  contentType = '',
  sliceSize = 512
} = {}) {
  return new Promise((resolve, reject) => {
    // 使用 atob() 方法将数据解码
    let byteCharacters = atob(b64data)
    let byteArrays = []
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize)
      let byteNumbers = []
      for (let i = 0; i < slice.length; i++) {
        byteNumbers.push(slice.charCodeAt(i))
      }
      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。
      byteArrays.push(new Uint8Array(byteNumbers))
    }
    let result = new Blob(byteArrays, {
      type: contentType
    })
    result = Object.assign(result, {
      // jartto: 这里一定要处理一下 URL.createObjectURL
      preview: URL.createObjectURL(result),
      name: `图片示例.png`
    })
    resolve(result)
  })
}
// Blob转成Base64
function blobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e: any): void => {
      resolve(e.target.result)
    }
    // readAsDataURL
    fileReader.readAsDataURL(blob)
    fileReader.onerror = () => {
      reject(new Error('文件流异常'))
    }
  })
}
// canvas缩小图片大小(jpeg, png)
function shrinkImg(
  oldWidth: number,
  oldHeight: number,
  newWidth: number,
  img: HTMLImageElement
): string {
  let imgRatio = oldWidth / oldHeight

  let cvs: HTMLCanvasElement = document.createElement('canvas')
  // 获取容器中的画板
  let ctx: CanvasRenderingContext2D | null = cvs.getContext('2d')
  cvs.width = newWidth
  cvs.height = cvs.width / imgRatio
  if (ctx !== null) {
    ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
    let b64 = cvs.toDataURL('image/jpeg', 0.9)
    return b64
  } else {
    return ''
  }
}
// img载入测速 (指定一张服务器上的图片，并要知道fileSize)
function getSpeedWithImg(imgUrl: string, fileSize: number) {
  return new Promise((resolve, reject) => {
    let start: number = 0
    let end = null
    let img = document.createElement('img')
    start = new Date().getTime()
    img.onload = function(e) {
      end = new Date().getTime()
      const speed = (fileSize * 1000) / (end - start)
      resolve(speed)
    }
    img.src = imgUrl
  }).catch(err => {
    throw err
  })
}
