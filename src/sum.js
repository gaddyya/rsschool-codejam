function sumOfOther(array){
  let sum = array.reduce( (a, b) => a + b , 0 );
  return array.map( value => sum - value );
}