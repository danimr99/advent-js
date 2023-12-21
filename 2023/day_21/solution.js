const message = [1, 1, 0, 1, 1, 0, 1, 1];

function findBalancedSegment(message) {
  let longestSegment = [];
  let longestSegmentLength = 0;

  for (let i = 0; i < message.length; i++) {
    let zeros = 0;
    let ones = 0;

    for (let j = i; j < message.length; j++) {
      message[j] === 0 ? zeros++ : ones++;

      if (zeros === ones && zeros + ones > longestSegmentLength) {
        longestSegment = [i, j];
        longestSegmentLength = zeros + ones;
      }
    }
  }

  return longestSegment;
}

console.log(findBalancedSegment(message));
