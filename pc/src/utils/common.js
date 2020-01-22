/**
 * 是否为空
 * @param val
 * @returns {boolean}
 */
export const isEmpty = val => {
    if (undefined === val || null === val || "" === val) {
        return true;
    } else {
        return false;
    }
}

/**
 *获取query
 * @param name
 * @returns {null}
 */
export const getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 获取数组中每一项的累加值，生成新的数组
export const generateAccumArray = (arr) => {
    let accumArray = [];// 这个是累加百分比的数组
    arr.map(Number).reduce((prev, curr, currIndex, arr) => {
        if (currIndex !== 0) {
            if ((prev > 100) || (prev === 100)) {
                prev = 100; // 如果累加和超过100，填入100
            }
            accumArray.push(prev.toFixed(2));// 第一项是初始值0，不进行push，之后每一项都push进去。这时会比arr少一项
        }
        if (currIndex === arr.length - 1) {
            const lastNum = 100; // 本来是prev + curr 现在强制100
            accumArray.push(lastNum.toFixed(2)); // 要把最后一项push进去
        }
        return prev + curr
    }, 0);
    return accumArray
};
