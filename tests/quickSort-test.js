import {expect, assert} from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRanNum from '../scripts/genRanNum.js'

describe('Merge Sort', () => {
  it('Should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('Should sort an unsorted array of letters', () => {
    let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let sorted = quickSort([...letters]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', letters);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal(['e', 'i', 'o', 'p', 'q', 'r', 't', 'u', 'w', 'y'])
  })

  it('Should sort an unsorted array of numbers', () => {
    let numbers = [5, 2, 3, 1, 4];
    let sorted = quickSort([...numbers]);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', numbers);
    console.log('sorted:', sorted);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort both positive and negative numbers', () => {
    let numbers = [...genRanNum(20, 1, 10)];
    let sortedNumbers = [...numbers].sort((a, b) => a - b);

    console.log('-=-=-=-=-=-=-=-');
    console.log('numbers:', numbers);
    console.log('sorted:', quickSort(numbers));

    expect(quickSort(numbers)).to.deep.equal(sortedNumbers)
  })

  it.skip('Should sort large arrays of numbers', () => {
    let randomArray = genRanNum(380000);  // max num < 2sec
    let sortedArray = [...randomArray].sort((a, b) => a - b);

    console.log('-=-=-=-=-=-=-=-');
    console.log('random:', randomArray);
    console.log('sorted:', sortedArray);
    console.log('randomSorted:', quickSort(randomArray));
    expect(quickSort(randomArray)).to.deep.equal(sortedArray)
  })

  it('Should move min number to front', () => {
    let array = genRanNum(8);
    let min = Math.min(...array)

    console.log('-=-=-=-=-=-=-=-');
    console.log('orig array:', array);
    console.log('min:', min);
    console.log('sorted array:', quickSort(array));
    console.log('front of sorted array:', quickSort(array)[0]);
    expect(quickSort(array)[0]).to.deep.equal(min)
  })
})
