/**
 *将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param (Array): 需要处理的数组
 * @param [size=1] (number): 每个数组区块的长度
 * @returns (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
 *  * _.chunk(['a', 'b', 'c', 'd'], 2);
 *  // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 *  // => [['a', 'b', 'c'], ['d']]
 */
const chunk = (array, size = 1) => {
  // 兜底处理
  // todo: size should be a integer number
  size = Math.max(size, 0);
  const length = array?.length || 0;
  if (!length || size < 1) {
    return [];
  }
  // 当前分割下标
  let index = 0,
    //  当前数组下标
    resIndex = 0;
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
};

const myChunk = (array, size = 1) => {
  const result = new Array(Math.ceil(array?.length / size));
  let selfArray: number[] = [];
  array.map((item: number) => {
    if (selfArray.length < size) {
      selfArray.push(item);
    } else {
      result.push(selfArray);
      selfArray = [item];
    }
  });
  return result;
};

console.log(myChunk(['a', 'b', 'c', 'd'], 2));
