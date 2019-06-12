function maxSubarraySum(arr) {
  var max = arr[0];
  var sum = arr[0];
 
  for(var i = 1; i < arr.length; i++){
    sum = Math.max(sum + arr[i], arr[i]);
    max = Math.max(sum , max);
  }
  if(arr.length === 0) max = 0;

  return max;
}