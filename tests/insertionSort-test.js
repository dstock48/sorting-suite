import {expect, assert} from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import genRanNum from '../scripts/genRanNum.js'

describe('Insertion Sort', () => {
  it('Should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('Should sort an unsorted array of letters', () => {
    let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let sorted = insertionSort([...letters]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', letters);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal(['e', 'i', 'o', 'p', 'q', 'r', 't', 'u', 'w', 'y'])
  })

  it('Should sort an unsorted array of numbers', () => {
    let numbers = [5, 2, 3, 1, 4];
    let sorted = insertionSort([...numbers]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', numbers);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('Should sort large arrays of numbers', () => {
    let randomArray = genRanNum(15);
    let sortedArray = [...randomArray].sort((a, b) => a - b);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', randomArray);
    console.log('sorted:', sortedArray);
    console.log('randomSorted:', insertionSort(randomArray));
    expect(insertionSort(randomArray)).to.deep.equal(sortedArray)
  })

  it('Should move min number to front', () => {
    let array = genRanNum(8);
    let min = Math.min(...array)

    console.log('-=-=-=-=-=-=-=-');
    console.log('orig array:', array);
    console.log('min:', min);
    console.log('sorted array:', insertionSort(array));
    console.log('front of sorted array:', insertionSort(array)[0]);
    expect(insertionSort(array)[0]).to.deep.equal(min)

  })
})
