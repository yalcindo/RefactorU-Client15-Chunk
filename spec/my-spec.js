
describe('getChunk', function() {
  var input = [1,2,3,4,5,6,7,8,9,10];
 it('should return chunks', function() {
  expect(getChunk(input,2)).toEqual([ [1,2,3,4,5], [6,7,8,9,10] ]);
 });

it('should return chunks', function() {
   var input = [1,2,3,4,5,6,7,8,9,10];
  expect(getChunk(input,3)).toEqual( [ [1,2,3,4], [5,6,7], [8,9,10] ]);
 });
  it('should return chunks', function() {
     var input = [1,2,3,4,5,6,7,8,9,10];
  expect(getChunk(input,7)).toEqual([ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]);
 });
 
});
