import {expect, assert} from 'chai';
import bubbleSort from '../scripts/bubbleSort.js'
import genRanNum from '../scripts/genRanNum.js'

describe('Bubble Sort with filter', () => {
  it('Should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('Should sort an unsorted array of letters', () => {
    let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let sorted = bubbleSort([...letters]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', letters);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal(['e', 'i', 'o', 'p', 'q', 'r', 't', 'u', 'w', 'y'])
  })

  it('Should sort an unsorted array of numbers', () => {
    let numbers = [5, 2, 3, 1, 4];
    let sorted = bubbleSort([...numbers]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', numbers);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('Should sort large arrays of numbers', () => {
    let randomArray = genRanNum(11000);  // max num < 2sec
    let sortedArray = [...randomArray].sort((a, b) => a - b);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', randomArray);
    console.log('sorted:', sortedArray);
    console.log('randomSorted:', bubbleSort(randomArray));
    expect(bubbleSort(randomArray)).to.deep.equal(sortedArray)
  })

  it('Should move min number to front', () => {
    let array = genRanNum(8);
    let min = Math.min(...array)

    console.log('-=-=-=-=-=-=-=-');
    console.log('orig array:', array);
    console.log('min:', min);
    console.log('sorted array: ', bubbleSort(array));
    console.log('front of sorted array: ', bubbleSort(array)[0]);
    expect(bubbleSort(array)[0]).to.deep.equal(min)

  })
})
