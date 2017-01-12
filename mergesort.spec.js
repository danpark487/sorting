describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array', function(){
    expect( mergeSort([5,4,6,7,2,4]) ).toEqual( [2,4,4,5,6,7] );
  });


  it('handles an array', function(){
    expect( mergeSort([2,4,6,7,2,4,8,12]) ).toEqual( [2,2,4,4,6,7,8,12] );
  });


  it('handles an array filled with same numbers', function(){
    expect( mergeSort([3,3,3,3,3]) ).toEqual( [3,3,3,3,3] );
  });

   it('handles an array with negative integers', function(){
    expect( mergeSort([-2,-5,-3,5,6,0,2]) ).toEqual( [-5,-3,-2,0,2,5,6] );
  });

});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
      expect( split([2,4,5,6,7,8,9])).toEqual( [[2,4,5], [6,7,8,9]] );
  });
  it('is able to split an array into two halves', function() {
      expect( split([2,4,5,6,7,8,9,10])).toEqual( [[2,4,5,6], [7,8,9,10]] );
  });
});


describe('Merge Array function', function() {
  it('is able to combine two halves', function() {
      expect( merge([2,4,5,6],[7,8,9])).toEqual( [2,4,5,6,7,8,9]);
  });

  it('is able to combine two halves', function() {
      expect( merge([1,2,3,4],[5,6,7,8])).toEqual( [1,2,3,4,5,6,7,8]);
  });

});