// 删除数组中指定的对象
export function removeArrObj<T>(_arr: [], _obj: {}): any {
  var length: number = _arr.length
  for (var i: number = 0; i < length; i++) {
    if (_arr[i] == _obj) {
      if (i == 0) {
        _arr.shift() //删除并返回数组的第一个元素
        return _arr
      } else if (i == length - 1) {
        _arr.pop() //删除并返回数组的最后一个元素
        return _arr
      } else {
        _arr.splice(i, 1) //删除下标为i的元素
        return _arr
      }
    }
  }
}
// 二维数组降维
export const flatten = function(arr: any): [] {
  while (arr.some((item: string) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * 获取移动操作系统类型，
 * 0 Android
 * 1 iOS
 * 2 其他移动os
 */
export function getOSType(): number {
  var ua: string = navigator.userAgent.toLowerCase()
  if (/(Android)/i.test(ua)) {
    return 0
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return 1
  } else {
    return 2
  }
}

/**
 * 判断当前环境是否是微信环境
 * 1 是
 * 2 否
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
  var ua = navigator.userAgent,
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
