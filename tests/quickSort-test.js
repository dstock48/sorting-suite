import {expect, assert} from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRanNum from '../helper/genRanNum.js'

describe('Quick Sort', () => {
  it('Should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should not accept an Object as an argument', () => {
    const obj = {name: 'Dave'};

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('input:', obj);
    // console.log('output:', quickSort(obj));
    expect(quickSort(obj)).to.equal('Error - argument must be an array or string')
  })

  it('Should sort an unsorted array of only letters', () => {
    let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let sorted = quickSort([...letters]);

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('random:', letters);
    // console.log('sorted:', sorted);

    expect(sorted).to.deep.equal(['e', 'i', 'o', 'p', 'q', 'r', 't', 'u', 'w', 'y'])
  })

  it('should accept a String and return an array of sorted characters', () => {
    let stg = '5t4hequickbrow2nfoxjumpso1verthe3lazydog'

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('string:', stg);
    // console.log('sorted:', quickSort(stg));

    expect(quickSort(stg)).to.deep.equal(
      [ '1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e',
        'e', 'e', 'f', 'g', 'h', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'o', 'o', 'o', 'p', 'q', 'r', 'r',
        's', 't', 't', 'u', 'u', 'v', 'w', 'x', 'y', 'z' ]
    )
  })

  it('Should sort an unsorted array of only numbers', () => {
    let numbers = [5, 2, 3, 1, 4];
    let sorted = quickSort([...numbers]);

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('random:', numbers);
    // console.log('sorted:', sorted);

    expect(sorted).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort both positive and negative numbers', () => {
    let numbers = [...genRanNum(20, 1, 10)];
    let sortedNumbers = [...numbers].sort((a, b) => a - b);

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('numbers:', numbers);
    // console.log('sorted:', quickSort(numbers));

    expect(quickSort(numbers)).to.deep.equal(sortedNumbers)
  })

  it.skip('Should sort large arrays of numbers', () => {
    let randomArray = genRanNum(480000);  // max num < 2sec
    let sortedArray = [...randomArray].sort((a, b) => a - b);

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('random:', randomArray);
    // console.log('sorted:', sortedArray);
    // console.log('randomSorted:', quickSort(randomArray));
    expect(quickSort(randomArray)).to.deep.equal(sortedArray)
  })

  it('Should move min number to front', () => {
    let array = genRanNum(8);
    let min = Math.min(...array)

    // console.log('-=-=-=-=-=-=-=-');
    // console.log('orig array:', array);
    // console.log('min:', min);
    // console.log('sorted array:', quickSort(array));
    // console.log('front of sorted array:', quickSort(array)[0]);
    expect(quickSort(array)[0]).to.deep.equal(min)
  })
})
