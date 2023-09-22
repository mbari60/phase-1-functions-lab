// Code your solution in this file!
function distanceFromHqInBlocks(pickUpPoint) {
  const hQ = 42;
  distanceFromHqInBlocks = Math.abs(pickUpPoint - hQ);

  return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(pickUpPoint) {
  const hQ = 42;
  distanceFromHqInFeet = Math.abs(pickUpPoint - hQ) * 264;
  return distanceFromHqInFeet;
}

 function distanceTravelledInFeet(start, destination) {
   distanceTravelledInFeet = Math.abs(start - destination) * 264;

   return distanceTravelledInFeet;
 }


function calculatesFarePrice(start, destination) {
  calculatesFarePrice = Math.abs(start - destination);
  distanceTravelledInFeet = calculatesFarePrice * 264;
  let freeSample = 400;
  if (distanceTravelledInFeet < 400) {
    return 0;
  } else if (
    distanceTravelledInFeet >= 400 &&
    distanceTravelledInFeet <= 2000
  ) {
    return (calculatesFarePrice = 0.02 * (distanceTravelledInFeet - freeSample));
  } else if (
    distanceTravelledInFeet > 2000 &&
    distanceTravelledInFeet <= 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet > 2500) {
    return "cannot travel that far";
  }
}