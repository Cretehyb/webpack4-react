// 删除数组中指定的对象
export function removeArrObj(_arr, _obj) {
    var length = _arr.length;
    for (var i = 0; i < length; i++) {
        if (_arr[i] == _obj) {
            if (i == 0) {
                _arr.shift(); //删除并返回数组的第一个元素
                return _arr;
            } else if (i == length - 1) {
                _arr.pop(); //删除并返回数组的最后一个元素
                return _arr;
            } else {
                _arr.splice(i, 1); //删除下标为i的元素
                return _arr;
            }
        }
    }
}
export const flatten = function(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
// 求数组中的众数
export const majorityElement = function(nums) {
    var count = 1
    var result = nums[0]
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === result) {
            count++
        } else {
            count--
            if (count === 0) {
                count = 1
                result = nums[++i]
            }
        }
    }
    return result
};

/**
 * 获取移动操作系统类型，
 * 0 Android
 * 1 iOS
 */
export function getOSType() {
    if (/(Android)/i.test(navigator.userAgent)) {
        return 0;
    } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return 1;
    } else {
        return 2;
    }
};

/**
 * 判断当前环境是否是微信环境
 */
export function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

/**
 * 判断操作系统和平台
 */
export const os = function (){
    var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();