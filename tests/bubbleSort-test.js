import {expect, assert} from 'chai';
import bubbleSort from '../scripts/bubbleSort.js'
import genRanNum from '../scripts/genRanNum.js'

describe('Bubble Sort with filter', () => {
  it('Should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('Should sort an unsorted array of numbers', () => {
    let numbers = [5, 2, 3, 1, 4];
    let sorted = bubbleSort([...numbers]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random: ', numbers);
    console.log('sorted: ', sorted);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('Should sort large arrays', () => {
    let randomArray = genRanNum(20);
    let sortedArray = [...randomArray].sort((a, b) => a - b);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random: ', randomArray);
    console.log('sorted: ', sortedArray);
    console.log('randomSorted: ', bubbleSort(randomArray));
    expect(bubbleSort(randomArray)).to.deep.equal(sortedArray)
  })

  it('Should move min number to front', () => {
    let array = [4, 6, 8, 1, 5, 0, 3, 6, 7];
    let min = Math.min(...array)

    console.log('-=-=-=-=-=-=-=-');
    console.log('orig array: ', array);
    console.log('min: ', min);
    console.log('sorted array: ', bubbleSort(array));
    console.log('front of sorted array: ', bubbleSort(array)[0]);
    expect(bubbleSort(array)[0]).to.deep.equal(min)

  })
})
