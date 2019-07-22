// 删除数组中指定的对象
function removeArrObj(_arr, _obj) {
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

const flatten = function(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
// 求数组中的众数
var majorityElement = function(nums) {
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
