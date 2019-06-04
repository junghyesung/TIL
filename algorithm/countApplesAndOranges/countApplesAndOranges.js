function countApplesAndOranges(s, t, a, b, apples, oranges) {
  
  var appleCount = 0, orangeCount = 0;
  for (var prop1 in apples) {
    apples[prop1] = a + (apples[prop1]);
    if(apples[prop1] >= s && apples[prop1] <= t){
      appleCount++;
    }
  }
  for (var prop2 in oranges) {
    oranges[prop2] = b + (oranges[prop2]);
    if(oranges[prop2] >= s && oranges[prop2] <= t){
      orangeCount++;
    }
  }
  return [appleCount, orangeCount];
  
}


